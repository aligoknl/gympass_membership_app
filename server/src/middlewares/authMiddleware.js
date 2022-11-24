import jwt from "jsonwebtoken";
import User from "../models/User.js";

export const protect = async (req, res, next) => {
  // Check if the authorization header is out there, the authorization type is bearer
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    let token = req.headers.authorization.split(" ")[1];
    try {
      // Check the token has not expired or it is not invalid
      const payload = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

      const userId = payload.id;

      // Retrieve all user information except the hashed password
      const user = await User.findById(userId).select("-password");

      // store user object in the request
      req.user = user;
      next();
    } catch (err) {
      return res.status(401).json({ message: "unauthorized, invalid token" });
    }
  } else {
    // if not, the user did not provide a token
    return res.status(401).json({
      message: "unauthorized, No token",
    });
  }
};
