import { Request, Response } from "express";
import { User } from "../models/user.model";
import jwt from "jsonwebtoken";
import { validationResult } from "express-validator";
import bcrypt, { hash } from "bcrypt";

// user registration
const registerUser = async (req: Request, res: Response) => {
  // get user data from request
  // check if the user exists and return
  // create the user
  // create token
  // send to cookie
  // return the response
  try {
    // checking for errors with validator
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ message: errors.array() });
    }

    // console.log(req.body);
    let user = await User.findOne({ email: req.body.email });

    if (user) {
      return res.status(400).json({
        status: false,
        message: "User already exist",
      });
    }

    user = new User(req.body);
    await user.save();

    const token = jwt.sign(
      { userId: user.id },
      process.env.JWT_SECRET_KEY as string,
      {
        expiresIn: "1d",
      }
    );

    res.cookie("auth_token", token, {
      httpOnly: true,
      secure: true,
      maxAge: 86400000,
    });

    return res.sendStatus(200);
  } catch (error) {
    console.log("Error while registering the user :: ", error);
    res.status(500).json({ message: "something went wrong!" });
  }
};

// user login
const signInUser = async (req: Request, res: Response) => {
  // check if there is any error in express validator
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ message: errors.array() });
  }

  // get user data
  const { email, password } = req.body;

  try {
    // check for the user in the db
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "invalid credentials" });
    }

    // compare & match the password using bcrypt
    console.log("Passwords :: ", user.password, password);
    const isPasswordMatched = await bcrypt.compare(password, user.password);
    console.log("isPasswordMatched? :: ", isPasswordMatched);

    if (!isPasswordMatched) {
      return res.status(400).json({ message: "invalid credentials" });
    }

    // generate an access token
    const token = jwt.sign(
      { userId: user.id },
      process.env.JWT_SECRET_KEY as string,
      {
        expiresIn: "1d",
      }
    );

    // setting up the cookie
    res.cookie("auth_token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 86400000,
    });

    // sending the response
    res
      .status(200)
      .json({ message: "logged in successfully", userId: user._id });
  } catch (error) {
    console.log("Something went wrong while signing in :: ", error);
    return res
      .status(500)
      .json({ message: "Something went wrong while signing in" });
  }
};

export { registerUser, signInUser };
