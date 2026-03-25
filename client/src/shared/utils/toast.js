import pubsub from 'sweet-pubsub';
import { get } from 'lodash';

import { ToastType } from 'shared/constants/toasts';

const show = toast => pubsub.emit('toast', toast);

const success = title => show({ type: ToastType.SUCCESS, title });

const error = err => {
  show({
    type: ToastType.DANGER,
    title: 'Error',
    message: get(err, 'message', err),
    duration: 0,
  });
};

const info = (title, message) =>
  show({
    type: ToastType.INFO,
    title,
    message,
  });

const warning = (title, message) =>
  show({
    type: ToastType.WARNING,
    title,
    message,
  });

export default { show, error, success, info, warning };
