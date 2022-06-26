import mongoose from "mongoose"

export const connectToDatabase = () => {
  mongoose.connect(process.env.MONGO_URI, () => {
    console.log("Yes, we are connected to database!")
  })
}
