export const USERNAME_REGEX =
  /^[a-zA-Z]{1}[^#$%^&*(){}[\]+\-|/\\='":<>,.?]{4,15}$/;
export const PASSWORD_REGEX =
  /[A-Z]{1,}[^\s]*[0-9]{1,}[^\s]*[@!#$%^&*()\-_+?~<>[\]{}]{1,}|[A-Z]{1,}[^\s]*[@!#$%^&*()\-_+?~<>[\]{}]{1,}[^\s]*[0-9]{1,}|[0-9]{1,}[^\s]*[A-Z]{1,}[^\s]*[@!#$%^&*()\-_+?~<>[\]{}]{1,}|[0-9]{1,}[^\s]*[@!#$%^&*()\-_+?~<>[\]{}]{1,}[^\s]*[A-Z]{1,}|[@!#$%^&*()\-_+?~<>[\]{}]{1,}[^\s]*[0-9]{1,}[^\s]*[A-Z]{1,}|[@!#$%^&*()\-_+?~<>[\]{}]{1,}[^\s]*[A-Z]{1,}[^\s]*[0-9]{1,}/;
export const EMAIL_REGEX = /^[a-zA-Z0-9_.]+@[a-zA-Z0-9.]+\.[a-z]{2,3}$/;
export const BATCH_COUNT = 8;
export const ROLE_MEMBER = "member";
export const ROLE_ADMIN = "admin";
export const ROLE_NON_MEMBER = "non-member";
export const CREDIT_VALUE = 2;
