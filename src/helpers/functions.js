export const deepClone = (obj) => {
  return JSON.parse(JSON.stringify(obj));
};

export const ucFirst = (str) => {
  if (!str) return str;
  return str[0].toUpperCase() + str.slice(1);
};

export const removeNumber = (str) => {
  if (!str) return str;
  return str.replace(/[0-9]/g, "");
};
