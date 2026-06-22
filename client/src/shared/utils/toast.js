import pubsub from 'sweet-pubsub';
import { get } from 'lodash';

// Emit a toast event to display a notification
const show = toast => pubsub.emit('toast', toast);

// Show a success toast (green) confirming a completed action
// Auto-dismisses after duration (default 5s)
const success = (title, message, duration) =>
  show({ type: 'success', title, message, ...(duration !== undefined ? { duration } : {}) });

// Show an error toast (red). Accepts Error objects or strings.
// Persistent (0s) by default unless duration is specified
const error = (err, message, duration) => {
  show({
    type: 'danger',
    title: typeof err === 'string' ? err : 'Error',
    message: typeof err === 'object' ? get(err, 'message', String(err)) : message,
    duration: duration !== undefined ? duration : 0,
  });
};

// Show a warning toast (orange) highlighting a potential risk or caution
// Auto-dismisses after duration (default 5s)
const warning = (title, message, duration) =>
  show({ type: 'warning', title, message, ...(duration !== undefined ? { duration } : {}) });

// Show an info toast (blue) providing helpful context or updates
// Auto-dismisses after duration (default 5s)
const info = (title, message, duration) =>
  show({ type: 'info', title, message, ...(duration !== undefined ? { duration } : {}) });

export default { show, success, error, warning, info };
