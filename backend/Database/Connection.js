import mongoose from "mongoose";

mongoose.set("strictQuery", false);

export const MongoDB_Connection = async () => {
  try {
    await mongoose
      .connect(process.env.MONGODB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => {
        console.log("MongoDB Connected Successfully!");
      });
  } catch (error) {
    console.log("Mongodb Connection failed to Connect");
  }
};
