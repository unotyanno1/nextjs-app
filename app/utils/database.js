import mongoose from 'mongoose';

const connectDB = async() => {
    try {
        await mongoose.connect("mongodb+srv://unotyanno1:Unokaoruno1@cluster0.d6jf1.mongodb.net/nextjsAppData?retryWrites=true&w=majority&appName=Cluster0")
        console.log("Success: Connected to MongoDB")
    } catch (err) {
        console.log("Failure: Unconnected to MongoDB")
        throw new Error()
    }
}

export default connectDB;