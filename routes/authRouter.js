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

router.post("/register", validateRegisterInput, register);
router.post("/login", validateLoginInput, login);
router.get("/", getUsers);
router.get("/logout", logout);

export default router;
