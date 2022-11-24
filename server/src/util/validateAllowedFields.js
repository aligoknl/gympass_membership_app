const validateAllowedFields = (object, allowedFields) => {
  const invalidFields = [];

  Object.keys(object).forEach((key) => {
    if (!allowedFields.includes(key)) {
      invalidFields.push(key);
    }
  });

  if (invalidFields.length > 0) {
    return `the following properties are not allowed to be set: ${invalidFields.join(
      ", "
    )}`;
  } else {
    return "";
  }
};

export default validateAllowedFields;
