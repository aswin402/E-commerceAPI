import express from 'express';
import mongoose from 'mongoose';
import dotnev from 'dotenv';    
import cors from 'cors';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());



//  Routes
app.use("/api/products", productRoutes);

//  MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.log("❌ MongoDB Error:", err));

// Server Start
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));