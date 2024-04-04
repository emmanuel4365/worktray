import { Router } from "express";
import {
  register,
  login,
  getUsers,
  logout,
} from "../controllers/authController.js";
import {
  validateLoginInput,
  validateRegisterInput,
} from "../middleware/validationMiddleware.js";
const router = Router();

// import rateLimiter from "express-rate-limit";

// const apiLimiter = rateLimiter({
//   windowMs: 5 * 60 * 1000, // 5 minutes
//   max: 20,
//   message: { msg: "IP rate limit exceeded, retry in 5 minutes." },
// });

router.post("/register", validateRegisterInput, register);
router.post("/login", validateLoginInput, login);
router.get("/", getUsers);
router.get("/logout", logout);

export default router;
