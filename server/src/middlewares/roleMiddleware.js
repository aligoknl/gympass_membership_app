export const checkRole = (req, res, next, role) => {
  const userType = req.user.userType;

  if (userType === role) {
    next();
  } else {
    return res
      .status(401)
      .json({ message: "You do not have access to the resource" });
  }
};
