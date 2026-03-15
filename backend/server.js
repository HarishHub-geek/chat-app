import express from "express";
import path from "path";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";

import connectToMongoDB from "./db/connectToMongoDB.js";

dotenv.config();

const __dirname = path.resolve();

// PORT should be assigned after calling dotenv.config()
const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());   //to parse the incoming requests with JSON payloads (from req.body)
app.use(cookieParser());

app.use('/api/auth', authRoutes);
app.use('/api/messages', messageRoutes);
app.use('/api/users', userRoutes);

//app.get("/", (req,res) => {
  //  res.status(200).send( "Be positive")
//})

app.listen(PORT, () => {
    connectToMongoDB();
    console.log(`server running on port ${PORT}`)
})