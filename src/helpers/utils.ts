
export const checkIfEmail = (email: string) => {
  if (email.includes('@') && email.indexOf('.') > email.indexOf('@')) {
    return true;
  } else {
    return false;
  }
};


