import { Request, Response } from "express";
import { User } from "../models/user.model";

const registerUser = async (req: Request, res: Response) => {
  try {
    console.log(req.body);
    let user = await User.findOne({ email: req.body.email });

    if (user) {
      return res.status(400).json({
        status: false,
        message: "User already exist",
      });
    }

    user = new User(req.body);
    await user.save();
  } catch (error) {
    console.log("Error while registering the user :: ", error);
    res.status(500).json({ message: "something went wrong!" });
  }
};

export default registerUser;
