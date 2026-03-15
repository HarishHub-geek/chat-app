import express from "express";
import path from "path";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";

import connectToMongoDB from "./db/connectToMongoDB.js";
import { app, server } from "./socket/socket.js";

dotenv.config();

const PORT = process.env.PORT || 5000;

const __dirname = path.resolve();

// PORT should be assigned after calling dotenv.config()

// const app = express();  //instead http server created in socket.js 

app.use(express.json());   //to parse the incoming requests with JSON payloads (from req.body)
app.use(cookieParser());

app.use('/api/auth', authRoutes);
app.use('/api/messages', messageRoutes);
app.use('/api/users', userRoutes);

//app.get("/", (req,res) => {
  // root route http://localhost:5000/
  //  res.status(200).send( "Be positive")
//})

server.listen(PORT, () => {
    connectToMongoDB();
    console.log(`server running on port ${PORT}`)
})