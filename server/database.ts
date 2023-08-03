import mongoose from "mongoose";

export const connectt = () => {
  return new Promise(function (fulfill, reject) {
    return mongoose
      .connect(process.env.MONGODB_URI as string)
      .then(() => fulfill("Connected!"))
      .catch((err) => reject(err));
  });
};
