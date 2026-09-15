import pubsub from 'sweet-pubsub';
import { get } from 'lodash';

const show = toast => pubsub.emit('toast', toast);

const success = (title, message) => show({ type: 'success', title, message });

const error = err => {
  show({
    type: 'danger',
    title: 'Error',
    message: get(err, 'message', err),
    duration: 0,
  });
};

const warning = (title, message) => show({ type: 'warning', title, message });

const info = (title, message) => show({ type: 'info', title, message });

const wizard = (title, message) => show({ type: 'wizard', title, message, duration: 5 });

export default { show, error, success, warning, info, wizard };
