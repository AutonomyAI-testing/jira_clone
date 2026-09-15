import pubsub from 'sweet-pubsub';
import { get } from 'lodash';

/**
 * Emit a toast notification
 * @param {Object} toast - Toast configuration
 * @param {string} toast.type - Notification type: 'success', 'danger', 'warning', 'info'
 * @param {string} toast.title - Main notification message (required)
 * @param {string} [toast.message] - Optional secondary message
 * @param {number} [toast.duration] - Auto-dismiss duration in seconds (0 = no auto-dismiss)
 */
const show = toast => pubsub.emit('toast', toast);

/**
 * Show a success notification
 * @param {string} title - Success message
 * @param {Object} [options] - Optional configuration
 * @param {string} [options.message] - Optional secondary message
 * @param {number} [options.duration] - Auto-dismiss duration in seconds (default: 5)
 */
const success = (title, options = {}) =>
  show({
    type: 'success',
    title,
    message: options.message,
    duration: options.duration !== undefined ? options.duration : 5,
  });

/**
 * Show an error notification
 * @param {string|Error} err - Error message or Error object
 * @param {Object} [options] - Optional configuration
 * @param {string} [options.title] - Custom error title (default: 'Error')
 * @param {number} [options.duration] - Auto-dismiss duration in seconds (default: 0 = no auto-dismiss)
 */
const error = (err, options = {}) => {
  show({
    type: 'danger',
    title: options.title || 'Error',
    message: get(err, 'message', err),
    duration: options.duration !== undefined ? options.duration : 0,
  });
};

/**
 * Show a warning notification
 * @param {string} title - Warning message
 * @param {Object} [options] - Optional configuration
 * @param {string} [options.message] - Optional secondary message
 * @param {number} [options.duration] - Auto-dismiss duration in seconds (default: 5)
 */
const warning = (title, options = {}) =>
  show({
    type: 'warning',
    title,
    message: options.message,
    duration: options.duration !== undefined ? options.duration : 5,
  });

/**
 * Show an info notification
 * @param {string} title - Info message
 * @param {Object} [options] - Optional configuration
 * @param {string} [options.message] - Optional secondary message
 * @param {number} [options.duration] - Auto-dismiss duration in seconds (default: 5)
 */
const info = (title, options = {}) =>
  show({
    type: 'info',
    title,
    message: options.message,
    duration: options.duration !== undefined ? options.duration : 5,
  });

export default { show, success, error, warning, info };
