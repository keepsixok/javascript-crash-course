import mongoose from "mongoose";

const connectMDB = async () => {
   try {
    await mongoose.connect(process.env.MDBC)
    console.log('Connected to MongoDB')
   } catch (error) {
    console.log(error)
   }
} 

export default connectMDB