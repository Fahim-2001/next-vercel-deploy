import mongoose from "mongoose";

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_CONNECT);
    mongoose.set('strictQuery',true)
    // mongoose.set('strictQuery',false);
  } catch (error) {
    throw new Error("Connection Failed!");
  }
};

export default connect;
