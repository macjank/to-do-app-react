export const checkNameValidity = value => {
  if (value.trim() === '') {
    return false;
  }
  return true;
};
