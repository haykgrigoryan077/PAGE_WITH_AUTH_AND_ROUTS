import { ALREADY_SIGNED_UP, NOT_VALID_PASSWORD, VALID_PASSWORD } from "./cases";

export const validation = (email, password, emailAndPassData) => {
  for (let i = 0; i < emailAndPassData.length; i++) {
    if (
      emailAndPassData[i].email === email &&
      emailAndPassData[i].password === password
    ) {
      return true;
    }
  }
  return false;
};

export const validationForNewAccountPasswordAndEmail = (
  email,
  password,
  emailAndPassData
) => {
  for (let i = 0; i < emailAndPassData.length; i++) {
    if (emailAndPassData[i].email === email) {
      return ALREADY_SIGNED_UP;
    }
  }
  if (password.length < 5 || password[0] === '') {
    return NOT_VALID_PASSWORD;
  }
  return VALID_PASSWORD;
};
