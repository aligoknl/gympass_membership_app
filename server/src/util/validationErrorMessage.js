const validationErrorMessage = (errorList) => {
  return `BAD REQUEST: ${errorList.join(", ")}`;
};

export default validationErrorMessage;
