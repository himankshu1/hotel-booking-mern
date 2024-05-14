import { Request, Response } from "express";
import { User } from "../models/user.model";
import jwt from "jsonwebtoken";

// user registration
const registerUser = async (req: Request, res: Response) => {
  // get user data from request
  // check if the user exists and return
  // create the user
  // create token
  // send to cookie
  // return the response
  try {
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

export default registerUser;
