import express from "express";
import { registerUser, signInUser } from "../controllers/user.controller";
import { check } from "express-validator";

const router = express.Router();

// register route
router.post(
  "/register",
  [
    check("firstName", "first name is required").isString(),
    check("lastName", "last name is required").isString(),
    check("email", "email is required").isEmail(),
    check("password", "minimum 8 characters are required").isLength({ min: 8 }),
  ],
  registerUser
);

// login route
router.post(
  "/signin",
  [
    check("email", "email is required").isEmail(),
    check("password", "minimum 8 characters are required").isLength({ min: 8 }),
  ],
  signInUser
);

export default router;
