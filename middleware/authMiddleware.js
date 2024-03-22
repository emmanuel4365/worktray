import { UnauthenticatedError } from "../errors/customErrors.js";
import { verifyJWT } from "../utils/tokenUtils.js";

export const authenticateUser = (req, res, next) => {
  const { token } = req.cookies;
  console.log(token);
  if (!token) {
    console.log("hello here");
    throw new UnauthenticatedError("authentication invalid");
  }

  try {
    const { userId, role } = verifyJWT(token);
    console.log({ userId, role });
    req.user = { userId, role };
    next();
  } catch (error) {
    throw new UnauthenticatedError("authentication invalid");
  }
};

export const authorizePermissions = (...roles) => {
  return (req, res, next) => {
    // if (!roles.includes(req.user.role)) {
    //   throw new UnauthorizedError("Unauthorized to access this route");
    // }
    console.log(roles);
    next();
  };
};
