import pubsub from 'sweet-pubsub';
import { get } from 'lodash';

const show = toast => pubsub.emit('toast', toast);

const success = title => show({ title });

const error = err => {
  show({
    type: 'danger',
    title: 'Error',
    message: get(err, 'message', err),
    duration: 0,
  });
};

const info = (title, message, duration = 5) => show({
  type: 'info',
  title,
  message,
  duration,
});

const warning = (title, message, duration = 5) => show({
  type: 'warning',
  title,
  message,
  duration,
});

export default { show, success, error, info, warning };
