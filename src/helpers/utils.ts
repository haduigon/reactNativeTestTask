
export const checkIfEmail = (email: string) => {
  // Basic check for "@" and "." in the correct order
  if (email.includes('@') && email.indexOf('.') > email.indexOf('@')) {
    return true;
  } else {
    return false;
  }
};
