import { last } from "ramda";

export const takeAfter = (substr) => (str) => {
  const lastIndex = str.indexOf(substr);
  return lastIndex > -1 ? str.substring(lastIndex + 1, str.length) : str;
};
