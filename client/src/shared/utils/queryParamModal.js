import history from 'browserHistory';
import { queryStringToObject, addToQueryString, omitFromQueryString } from 'shared/utils/url';

const open = (param, mode) => {
  const queryParams = { [`modal-${param}`]: true };
  if (mode) {
    queryParams[`modal-${param}-mode`] = mode;
  }
  history.push({
    pathname: history.location.pathname,
    search: addToQueryString(history.location.search, queryParams),
  });
};

const close = param =>
  history.push({
    pathname: history.location.pathname,
    search: omitFromQueryString(history.location.search, [`modal-${param}`, `modal-${param}-mode`]),
  });

const isOpen = param => !!queryStringToObject(history.location.search)[`modal-${param}`];

const getMode = param => queryStringToObject(history.location.search)[`modal-${param}-mode`];

const setMode = (param, mode) =>
  history.push({
    pathname: history.location.pathname,
    search: addToQueryString(history.location.search, { [`modal-${param}-mode`]: mode }),
  });

export const createQueryParamModalHelpers = param => ({
  open: (mode) => open(param, mode),
  close: () => close(param),
  isOpen: () => isOpen(param),
  getMode: () => getMode(param),
  setMode: (mode) => setMode(param, mode),
});
