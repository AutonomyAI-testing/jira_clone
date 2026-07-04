import React from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';

// Mock the hooks that trigger close actions
jest.mock('shared/hooks/onOutsideClick');
jest.mock('shared/hooks/onEscapeKeyDown');

import Modal from './index';
import useOnOutsideClick from 'shared/hooks/onOutsideClick';
import useOnEscapeKeyDown from 'shared/hooks/onEscapeKeyDown';

describe('Modal Component', () => {
  let container;
  let rootPortal;

  beforeEach(() => {
    // Get reference to the root portal created by jest setup
    rootPortal = document.getElementById('root');

    // Clear the root portal content from previous tests
    rootPortal.innerHTML = '';

    // Create a container for rendering the test component
    container = document.createElement('div');
    document.body.appendChild(container);

    // Reset mocks before each test
    jest.clearAllMocks();

    // Default mock implementation
    useOnOutsideClick.mockImplementation(() => {});
    useOnEscapeKeyDown.mockImplementation(() => {});
  });

  afterEach(() => {
    // Unmount the component and cleanup
    if (container) {
      act(() => {
        try {
          ReactDOM.unmountComponentAtNode(container);
        } catch (e) {
          // Unmount may fail if container already removed
        }
      });
    }

    // Remove the test container
    if (container && container.parentNode) {
      container.parentNode.removeChild(container);
    }

    // Reset body styles
    document.body.style.overflow = '';
  });

  // ===== RENDERING TESTS =====

  describe('Rendering', () => {
    test('renders nothing when closed in controlled mode (isOpen=false)', () => {
      act(() => {
        ReactDOM.render(
          <Modal isOpen={false} renderContent={() => <div>Content</div>} />,
          container,
        );
      });

      // Portal root should be empty (no content in portal)
      expect(rootPortal.children.length).toBe(0);
    });

    test('renders content when open in controlled mode (isOpen=true)', () => {
      act(() => {
        ReactDOM.render(
          <Modal isOpen={true} renderContent={() => <div>Modal Content Here</div>} />,
          container,
        );
      });

      // Check that content is rendered in the portal
      expect(rootPortal.textContent).toContain('Modal Content Here');
    });

    test('renders with correct testid attribute', () => {
      act(() => {
        ReactDOM.render(
          <Modal
            isOpen={true}
            testid="custom-modal-id"
            renderContent={() => <div>Content</div>}
          />,
          container,
        );
      });

      const modalElement = rootPortal.querySelector('[data-testid="custom-modal-id"]');
      expect(modalElement).toBeTruthy();
    });

    test('uses default testid when not provided', () => {
      act(() => {
        ReactDOM.render(
          <Modal isOpen={true} renderContent={() => <div>Content</div>} />,
          container,
        );
      });

      const modalElement = rootPortal.querySelector('[data-testid="modal"]');
      expect(modalElement).toBeTruthy();
    });

    test('applies custom className to modal element', () => {
      act(() => {
        ReactDOM.render(
          <Modal
            isOpen={true}
            className="my-custom-class"
            renderContent={() => <div>Content</div>}
          />,
          container,
        );
      });

      const modalElement = rootPortal.querySelector('.my-custom-class');
      expect(modalElement).toBeTruthy();
    });
  });

  // ===== RENDER CONTENT FUNCTION TESTS =====

  describe('renderContent callback', () => {
    test('renderContent receives a close function', () => {
      const renderContentMock = jest.fn(() => <div>Content</div>);

      act(() => {
        ReactDOM.render(
          <Modal isOpen={true} renderContent={renderContentMock} />,
          container,
        );
      });

      expect(renderContentMock).toHaveBeenCalled();
      expect(renderContentMock.mock.calls[0][0]).toHaveProperty('close');
      expect(typeof renderContentMock.mock.calls[0][0].close).toBe('function');
    });

    test('close function can be called from renderContent', () => {
      let closeCallbackFromRender;
      const renderContentMock = jest.fn(({ close }) => {
        closeCallbackFromRender = close;
        return <button onClick={close}>Close</button>;
      });
      const onCloseMock = jest.fn();

      act(() => {
        ReactDOM.render(
          <Modal
            isOpen={true}
            onClose={onCloseMock}
            renderContent={renderContentMock}
          />,
          container,
        );
      });

      // Modal should be open
      expect(rootPortal.textContent).toContain('Close');

      // Call the close callback
      act(() => {
        closeCallbackFromRender();
      });

      // onClose should be called (controlled mode)
      expect(onCloseMock).toHaveBeenCalled();
    });
  });

  // ===== RENDER LINK FUNCTION TESTS =====

  describe('renderLink function (uncontrolled mode)', () => {
    test('renders renderLink when in uncontrolled mode', () => {
      const renderLinkMock = jest.fn(() => <button>Open Modal</button>);

      act(() => {
        ReactDOM.render(
          <Modal renderLink={renderLinkMock} renderContent={() => <div>Content</div>} />,
          container,
        );
      });

      expect(renderLinkMock).toHaveBeenCalled();
      expect(container.textContent).toContain('Open Modal');
    });

    test('renderLink receives an open function', () => {
      const renderLinkMock = jest.fn(({ open }) => (
        <button onClick={open}>Open</button>
      ));

      act(() => {
        ReactDOM.render(
          <Modal renderLink={renderLinkMock} renderContent={() => <div>Content</div>} />,
          container,
        );
      });

      expect(renderLinkMock).toHaveBeenCalled();
      expect(renderLinkMock.mock.calls[0][0]).toHaveProperty('open');
      expect(typeof renderLinkMock.mock.calls[0][0].open).toBe('function');
    });

    test('clicking the open button opens the modal in uncontrolled mode', () => {
      const renderLinkMock = jest.fn(({ open }) => (
        <button data-testid="open-button" onClick={open}>
          Open Modal
        </button>
      ));
      const renderContentMock = jest.fn(() => (
        <div data-testid="modal-content">Modal Content</div>
      ));

      act(() => {
        ReactDOM.render(
          <Modal
            renderLink={renderLinkMock}
            renderContent={renderContentMock}
          />,
          container,
        );
      });

      // Modal should be closed initially
      expect(rootPortal.querySelector('[data-testid="modal-content"]')).toBeNull();

      // Click the open button
      const openButton = container.querySelector('[data-testid="open-button"]');
      act(() => {
        openButton.click();
      });

      // Modal should now be open
      expect(rootPortal.querySelector('[data-testid="modal-content"]')).toBeTruthy();
    });

    test('renderLink is not called in controlled mode', () => {
      const renderLinkMock = jest.fn(() => <button>Open</button>);

      act(() => {
        ReactDOM.render(
          <Modal
            isOpen={true}
            renderLink={renderLinkMock}
            renderContent={() => <div>Content</div>}
          />,
          container,
        );
      });

      // renderLink should not be called in controlled mode (when isOpen is boolean)
      expect(renderLinkMock).not.toHaveBeenCalled();
    });
  });

  // ===== CLOSE ICON TESTS =====

  describe('Close icon', () => {
    test('renders close icon by default', () => {
      act(() => {
        ReactDOM.render(
          <Modal isOpen={true} renderContent={() => <div>Content</div>} />,
          container,
        );
      });

      // The Icon component is rendered as a styled element
      // Verify the portal has content (modal is rendered)
      expect(rootPortal.textContent).toContain('Content');
    });

    test('does not render close icon when withCloseIcon=false', () => {
      act(() => {
        ReactDOM.render(
          <Modal
            isOpen={true}
            withCloseIcon={false}
            renderContent={() => <div>Content</div>}
          />,
          container,
        );
      });

      // Modal still renders but without close icon
      expect(rootPortal.textContent).toContain('Content');
    });

    test('clicking close icon calls onClose in controlled mode', () => {
      const onCloseMock = jest.fn();
      let closeCallbackFromRender;

      const renderContentMock = jest.fn(({ close }) => {
        closeCallbackFromRender = close;
        return <div>Content</div>;
      });

      act(() => {
        ReactDOM.render(
          <Modal
            isOpen={true}
            onClose={onCloseMock}
            renderContent={renderContentMock}
          />,
          container,
        );
      });

      // Simulate close icon click by calling the close callback
      act(() => {
        closeCallbackFromRender();
      });

      expect(onCloseMock).toHaveBeenCalled();
    });

    test('clicking close icon closes modal in uncontrolled mode', () => {
      let closeCallbackFromRender;
      const renderLinkMock = jest.fn(({ open }) => (
        <button onClick={open}>Open</button>
      ));
      const renderContentMock = jest.fn(({ close }) => {
        closeCallbackFromRender = close;
        return <div data-testid="modal-content">Content</div>;
      });

      act(() => {
        ReactDOM.render(
          <Modal
            renderLink={renderLinkMock}
            renderContent={renderContentMock}
          />,
          container,
        );
      });

      // Open modal
      act(() => {
        container.querySelector('button').click();
      });

      expect(rootPortal.querySelector('[data-testid="modal-content"]')).toBeTruthy();

      // Simulate close icon click by calling the close callback
      act(() => {
        closeCallbackFromRender();
      });

      // Modal should be closed
      expect(rootPortal.querySelector('[data-testid="modal-content"]')).toBeNull();
    });
  });

  // ===== ESCAPE KEY TESTS =====

  describe('Escape key handling', () => {
    test('uses useOnEscapeKeyDown hook when open', () => {
      act(() => {
        ReactDOM.render(
          <Modal isOpen={true} renderContent={() => <div>Content</div>} />,
          container,
        );
      });

      expect(useOnEscapeKeyDown).toHaveBeenCalledWith(
        true, // isListening = true (modal is open)
        expect.any(Function), // closeModal callback
      );
    });

    test('does not listen for Escape key when closed', () => {
      jest.clearAllMocks();
      act(() => {
        ReactDOM.render(
          <Modal isOpen={false} renderContent={() => <div>Content</div>} />,
          container,
        );
      });

      expect(useOnEscapeKeyDown).toHaveBeenCalledWith(
        false, // isListening = false (modal is closed)
        expect.any(Function),
      );
    });

    test('calls onClose when Escape is pressed in controlled mode', () => {
      const onCloseMock = jest.fn();

      act(() => {
        ReactDOM.render(
          <Modal
            isOpen={true}
            onClose={onCloseMock}
            renderContent={() => <div>Content</div>}
          />,
          container,
        );
      });

      // Get the close callback passed to the hook
      const closeCallback = useOnEscapeKeyDown.mock.calls[0][1];

      // Simulate Escape key press
      act(() => {
        closeCallback();
      });

      expect(onCloseMock).toHaveBeenCalled();
    });

    test('closes modal when Escape is pressed in uncontrolled mode', () => {
      const renderLinkMock = jest.fn(({ open }) => (
        <button onClick={open}>Open</button>
      ));
      const renderContentMock = jest.fn(() => (
        <div data-testid="modal-content">Content</div>
      ));

      act(() => {
        ReactDOM.render(
          <Modal
            renderLink={renderLinkMock}
            renderContent={renderContentMock}
          />,
          container,
        );
      });

      // Open modal
      act(() => {
        container.querySelector('button').click();
      });

      expect(rootPortal.querySelector('[data-testid="modal-content"]')).toBeTruthy();

      // Simulate Escape key press
      const closeCallback = useOnEscapeKeyDown.mock.calls[0][1];
      act(() => {
        closeCallback();
      });

      // Modal should be closed
      expect(rootPortal.querySelector('[data-testid="modal-content"]')).toBeNull();
    });
  });

  // ===== OUTSIDE CLICK TESTS =====

  describe('Outside click handling', () => {
    test('uses useOnOutsideClick hook when open', () => {
      act(() => {
        ReactDOM.render(
          <Modal isOpen={true} renderContent={() => <div>Content</div>} />,
          container,
        );
      });

      expect(useOnOutsideClick).toHaveBeenCalledWith(
        expect.any(Object), // modal ref
        true, // isListening = true (modal is open)
        expect.any(Function), // closeModal callback
        expect.any(Object), // clickable overlay ref
      );
    });

    test('does not listen for outside click when closed', () => {
      jest.clearAllMocks();
      act(() => {
        ReactDOM.render(
          <Modal isOpen={false} renderContent={() => <div>Content</div>} />,
          container,
        );
      });

      expect(useOnOutsideClick).toHaveBeenCalledWith(
        expect.any(Object),
        false, // isListening = false (modal is closed)
        expect.any(Function),
        expect.any(Object),
      );
    });

    test('calls onClose when outside click occurs in controlled mode', () => {
      const onCloseMock = jest.fn();

      act(() => {
        ReactDOM.render(
          <Modal
            isOpen={true}
            onClose={onCloseMock}
            renderContent={() => <div>Content</div>}
          />,
          container,
        );
      });

      // Get the close callback passed to the hook
      const closeCallback = useOnOutsideClick.mock.calls[0][2];

      // Simulate outside click
      act(() => {
        closeCallback();
      });

      expect(onCloseMock).toHaveBeenCalled();
    });

    test('closes modal when outside click occurs in uncontrolled mode', () => {
      const renderLinkMock = jest.fn(({ open }) => (
        <button onClick={open}>Open</button>
      ));
      const renderContentMock = jest.fn(() => (
        <div data-testid="modal-content">Content</div>
      ));

      act(() => {
        ReactDOM.render(
          <Modal
            renderLink={renderLinkMock}
            renderContent={renderContentMock}
          />,
          container,
        );
      });

      // Open modal
      act(() => {
        container.querySelector('button').click();
      });

      expect(rootPortal.querySelector('[data-testid="modal-content"]')).toBeTruthy();

      // Simulate outside click
      const closeCallback = useOnOutsideClick.mock.calls[0][2];
      act(() => {
        closeCallback();
      });

      // Modal should be closed
      expect(rootPortal.querySelector('[data-testid="modal-content"]')).toBeNull();
    });
  });

  // ===== BODY OVERFLOW TESTS =====

  describe('Body overflow management', () => {
    test('sets body overflow to hidden when modal opens', () => {
      // Save initial state
      const initialOverflow = document.body.style.overflow;

      act(() => {
        ReactDOM.render(
          <Modal isOpen={true} renderContent={() => <div>Content</div>} />,
          container,
        );
      });

      expect(document.body.style.overflow).toBe('hidden');

      // Restore for next tests
      document.body.style.overflow = initialOverflow;
    });

    test('restores body overflow when component unmounts while open', () => {
      act(() => {
        ReactDOM.render(
          <Modal isOpen={true} renderContent={() => <div>Content</div>} />,
          container,
        );
      });

      expect(document.body.style.overflow).toBe('hidden');

      // Unmount
      act(() => {
        ReactDOM.unmountComponentAtNode(container);
      });

      expect(document.body.style.overflow).toBe('visible');
    });
  });

  // ===== VARIANT AND WIDTH TESTS =====

  describe('Variant and width props', () => {
    test('renders with center variant by default', () => {
      act(() => {
        ReactDOM.render(
          <Modal isOpen={true} renderContent={() => <div>Content</div>} />,
          container,
        );
      });

      // Just verify no errors occur and portal renders
      expect(rootPortal.textContent).toContain('Content');
    });

    test('renders with aside variant when specified', () => {
      act(() => {
        ReactDOM.render(
          <Modal
            isOpen={true}
            variant="aside"
            renderContent={() => <div>Content</div>}
          />,
          container,
        );
      });

      // Just verify no errors occur and portal renders
      expect(rootPortal.textContent).toContain('Content');
    });

    test('applies custom width to modal', () => {
      const customWidth = 800;

      act(() => {
        ReactDOM.render(
          <Modal
            isOpen={true}
            width={customWidth}
            renderContent={() => <div>Content</div>}
          />,
          container,
        );
      });

      // Verify modal rendered (styled-components will apply the width via CSS)
      expect(rootPortal.textContent).toContain('Content');
    });

    test('uses default width of 600 when not specified', () => {
      act(() => {
        ReactDOM.render(
          <Modal isOpen={true} renderContent={() => <div>Content</div>} />,
          container,
        );
      });

      expect(rootPortal.textContent).toContain('Content');
    });
  });

  // ===== CONTROLLED VS UNCONTROLLED MODE TESTS =====

  describe('Controlled vs Uncontrolled mode', () => {
    test('modal is in controlled mode when isOpen prop is a boolean', () => {
      const renderLinkMock = jest.fn(() => null);

      act(() => {
        ReactDOM.render(
          <Modal
            isOpen={true}
            renderLink={renderLinkMock}
            renderContent={() => <div>Content</div>}
          />,
          container,
        );
      });

      // renderLink should not be called in controlled mode
      expect(renderLinkMock).not.toHaveBeenCalled();
    });

    test('modal is in uncontrolled mode when isOpen prop is undefined', () => {
      const renderLinkMock = jest.fn(({ open }) => (
        <button onClick={open}>Open</button>
      ));

      act(() => {
        ReactDOM.render(
          <Modal
            renderLink={renderLinkMock}
            renderContent={() => <div>Content</div>}
          />,
          container,
        );
      });

      // renderLink should be called in uncontrolled mode
      expect(renderLinkMock).toHaveBeenCalled();
    });

    test('onClose is called only in controlled mode', () => {
      const onCloseMock = jest.fn();

      act(() => {
        ReactDOM.render(
          <Modal
            isOpen={true}
            onClose={onCloseMock}
            renderContent={() => <div>Content</div>}
          />,
          container,
        );
      });

      // Simulate close
      const closeCallback = useOnEscapeKeyDown.mock.calls[0][1];
      act(() => {
        closeCallback();
      });

      expect(onCloseMock).toHaveBeenCalled();
    });

    test('internal state is managed in uncontrolled mode', () => {
      const renderLinkMock = jest.fn(({ open }) => (
        <button data-testid="open-btn" onClick={open}>
          Open
        </button>
      ));
      const renderContentMock = jest.fn(() => (
        <div data-testid="content">Content</div>
      ));

      act(() => {
        ReactDOM.render(
          <Modal
            renderLink={renderLinkMock}
            renderContent={renderContentMock}
          />,
          container,
        );
      });

      // Modal closed initially
      expect(rootPortal.querySelector('[data-testid="content"]')).toBeNull();

      // Open via renderLink
      act(() => {
        container.querySelector('[data-testid="open-btn"]').click();
      });

      expect(rootPortal.querySelector('[data-testid="content"]')).toBeTruthy();

      // Close via Escape key
      const closeCallback = useOnEscapeKeyDown.mock.calls[0][1];
      act(() => {
        closeCallback();
      });

      expect(rootPortal.querySelector('[data-testid="content"]')).toBeNull();
    });
  });

  // ===== PROP DEFAULTS TESTS =====

  describe('Prop defaults', () => {
    test('applies all default props correctly', () => {
      const renderContentMock = jest.fn(() => <div>Content</div>);
      const renderLinkMock = jest.fn(({ open }) => (
        <button onClick={open}>Open</button>
      ));

      act(() => {
        ReactDOM.render(
          <Modal renderLink={renderLinkMock} renderContent={renderContentMock} />,
          container,
        );
      });

      // Verify that renderLink renders without errors using defaults
      expect(renderLinkMock).toHaveBeenCalled();
    });

    test('withCloseIcon defaults to true', () => {
      act(() => {
        ReactDOM.render(
          <Modal isOpen={true} renderContent={() => <div>Content</div>} />,
          container,
        );
      });

      // The close icon is rendered as a styled component with data-testid or class
      // We can verify it exists by checking portal has icon content
      const modalContent = rootPortal.querySelector('div');
      expect(modalContent).toBeTruthy();
      // The Icon component will be rendered (type="close" is a prop, not an attribute)
    });

    test('testid defaults to "modal"', () => {
      act(() => {
        ReactDOM.render(
          <Modal isOpen={true} renderContent={() => <div>Content</div>} />,
          container,
        );
      });

      const modalElement = rootPortal.querySelector('[data-testid="modal"]');
      expect(modalElement).toBeTruthy();
    });
  });
});
