import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const connectToMongoDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGODB_URI || "", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(
      "🔌 [MONGODB]: Connected to MongoDB at " + connection.connection.host
    );
    return connection;
  } catch (error) {
    console.log("❌ [MONGODB]: " + error);
  }
};

export default connectToMongoDB;
