# Modal Component Specification

## Overview

The Modal component displays content in a dialog box overlaid on top of the main page content. It's used for forms, confirmations, search interfaces, and other focused user interactions that require the user's attention. The modal can be displayed in two visual styles (center or aside), and supports both controlled and uncontrolled modes of operation.

## Variants

### Center Variant
The center variant displays a modal dialog in the middle of the screen with a semi-transparent dark overlay behind it. The modal is sized to fit its content, constrained by the `width` prop (default 600px). This variant is ideal for forms, confirmation dialogs, and other relatively compact interactions.

**Visual behavior**: Modal appears centered both horizontally and vertically, with padding around the viewport edges. The close icon appears in the top-right corner of the modal.

**When to use**: Simple forms, quick actions, alerts, confirmations, or any dialog that should not take up the full screen height.

### Aside Variant
The aside variant slides in as a panel from the side and spans the full height of the viewport. The panel width is controlled by the `width` prop (default varies by context). The close icon appears outside the panel on the right edge, making it easy to click while viewing the panel content.

**Visual behavior**: Modal slides in from the right side, extends from top to bottom of the viewport, and occupies the full height regardless of content. Smooth animations apply during open/close transitions.

**When to use**: Detailed inspection panels, side-by-side viewing of content, or any interface where the modal content should remain visible and accessible while working through multiple items.

## Open/Close Behavior

The modal can be opened and closed through multiple mechanisms:

### Close Icon
A close button (X icon) is displayed in the modal's top area by default. Clicking it triggers the modal to close.

- **Center variant**: Icon appears in top-right corner within the modal
- **Aside variant**: Icon appears outside the modal on the right edge
- **Disable**: Pass `withCloseIcon={false}` to hide the close button

### Escape Key
Pressing the Escape key while the modal is open triggers a close action. This works in both controlled and uncontrolled modes.

### Outside Click
Clicking anywhere outside the modal (on the semi-transparent overlay) triggers a close action. Clicking inside the modal content does not close it.

## Controlled vs Uncontrolled Modes

The Modal component supports two different patterns for managing its open/closed state:

### Controlled Mode
The parent component manages the modal's open/closed state by passing the `isOpen` prop as a boolean and providing an `onClose` handler.

**Usage**: Use this when the parent needs to coordinate the modal state with other UI updates or when the modal's state should be reflected in the URL or app state.

**Example**:
```jsx
const [isOpen, setIsOpen] = useState(false);

<Modal
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  renderContent={({ close }) => (
    <div>
      <h2>Create Issue</h2>
      <button onClick={close}>Close</button>
    </div>
  )}
/>
```

**Key points**:
- Pass `isOpen` as a boolean (`true` or `false`)
- Provide an `onClose` callback that updates your state
- The `renderLink` prop is **ignored** in controlled mode
- The modal renders nothing when `isOpen={false}`

### Uncontrolled Mode
The Modal component manages its own open/closed state internally. The parent provides a `renderLink` function to create a trigger button or link that opens the modal.

**Usage**: Use this when the modal is simple and doesn't need to coordinate state with other parts of the page.

**Example**:
```jsx
<Modal
  renderLink={({ open }) => (
    <button onClick={open}>Open Modal</button>
  )}
  renderContent={({ close }) => (
    <div>
      <h2>Create Issue</h2>
      <button onClick={close}>Close</button>
    </div>
  )}
/>
```

**Key points**:
- Do **not** pass the `isOpen` prop (leave it `undefined`)
- Pass a `renderLink` function that receives an `open` callback
- The `onClose` callback is **ignored** in uncontrolled mode
- The modal renders the link/trigger button alongside the modal content

### Rendering the Modal Content
Both modes use the required `renderContent` prop to define what appears inside the modal:

```jsx
renderContent={({ close }) => (
  <div>
    <h2>Modal Title</h2>
    <p>Modal body content here</p>
    <button onClick={close}>Close</button>
  </div>
)}
```

The `renderContent` function receives an object with a `close` function you can call to trigger the close action (close icon click, Escape key, or outside click all use this same function).

## Props Reference

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `renderContent` | `function` | *required* | Function that returns the JSX to render inside the modal body. Receives `{ close }` callback as parameter. |
| `isOpen` | `boolean` | `undefined` | Controls whether the modal is visible (controlled mode). When `undefined`, modal manages its own state (uncontrolled mode). |
| `onClose` | `function` | `() => {}` | Callback triggered when the modal is closed (close icon, Escape key, or outside click). Only used in controlled mode. |
| `renderLink` | `function` | `() => {}` | Function that renders the button/link to open the modal. Receives `{ open }` callback. Only used in uncontrolled mode. |
| `variant` | `'center' \| 'aside'` | `'center'` | Visual style of the modal. `'center'` places it in the middle of the screen; `'aside'` slides it in from the side at full viewport height. |
| `width` | `number` | `600` | Width of the modal in pixels. For `'center'` variant, this is the max-width. For `'aside'` variant, this is the fixed panel width. |
| `withCloseIcon` | `boolean` | `true` | Whether to display the close (X) icon. Set to `false` to hide it (e.g., when you provide your own close button). |
| `testid` | `string` | `'modal'` | Data attribute (`data-testid`) for testing and debugging. |
| `className` | `string` | `undefined` | Optional CSS class name to apply to the modal element for custom styling. |

## Scroll Lock

When the modal is open, the page body scroll is locked by setting `overflow: hidden` on the `<body>` element. This prevents the background content from scrolling while the modal is visible.

- **Automatic**: Scroll lock is applied when the modal opens and removed when it closes or unmounts
- **No manual intervention needed**: The component handles this internally
- **Restoration**: If the component unmounts while open, scroll is restored to `visible`

## Portal Rendering

The Modal component renders its content outside the normal DOM tree using React's `createPortal` API. The modal content is appended to the element with `id="root"` (typically the main React application root).

**Why this matters**:
- Modal content is not subject to overflow constraints of parent elements
- CSS stacking context (z-index) is handled correctly
- Modal can visually appear on top of everything, regardless of where you place the component in your JSX

## Accessibility Notes

### Keyboard Navigation
- **Escape key**: Closes the modal. This is the primary keyboard interaction and works automatically
- **Focus**: Not explicitly managed by the component; provide focus management in your `renderContent` if needed (e.g., focus the first input on open)
- **Tab order**: Modal content follows standard HTML tab order; the background is not focusable while the modal is open (because it's outside the normal DOM)

### Screen Readers
- No ARIA attributes are set by the Modal component itself. If you need screen reader support, add appropriate ARIA roles and labels in your `renderContent` function (e.g., `role="dialog"`, `aria-labelledby`, `aria-describedby`)

### Interaction Patterns
- Users expect modals to close when they press Escape or click outside
- Ensure close buttons are clearly visible and easy to click
- Provide text labels on buttons (not just icons)
- Consider color contrast in your modal content for readability

### Best Practices
- Avoid trapping users: always provide a way to close the modal (close icon, Escape key, or cancel button)
- Keep modal content focused on a single task
- Test keyboard and screen reader interactions if accessibility is a requirement
