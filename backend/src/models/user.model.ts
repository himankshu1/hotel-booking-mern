import mongoose from "mongoose";
import bcrypt from "bcrypt";

export type UserType = {
  _id: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
};

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: [true, "duplicate email"],
    },
    password: {
      type: String,
      required: [true, "password is required"],
      min: [8, "minimum 8 characters are required"],
    },
    firstName: {
      type: String,
      required: [true, "first name is required"],
    },
    lastName: {
      type: String,
    },
  },
  { timestamps: true }
);

// hashing the password
userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 8);
  }
  next();
});

export const User = mongoose.model<UserType>("User", userSchema);
