import mongoose from "mongoose";

const connectToDB = async () => {
  try {
    const connection = await mongoose.connect(
      process.env.MONGODB_CONNECTION_STRING as string
    );
    console.log("Connected to MongoDB");
  } catch (error) {
    throw new Error(`MongoDb connection Error :: , ${error}`);
  }
};

export default connectToDB;
