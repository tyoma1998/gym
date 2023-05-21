export function getRoutePath(URL, params, query) {
  let parsedURL = URL;
  if (params) {
    Object.entries(params).map((value) => {
      parsedURL = parsedURL.replace(`:${value[0]}`, value[1]);
      return;
    });
  }

  if (query) {
    const paramsQuery = new URLSearchParams(query);
    const queryString = paramsQuery.toString();
    parsedURL = `${parsedURL}?${queryString}`;
  }

  return parsedURL;
}

export const removeSlashPath = (str) => {
  if (!str) return str;
  return str.replace(/^\/?|\/?$/, '');
};

export const getValidPath = (path = '') => `/${removeSlashPath(path)}`;
