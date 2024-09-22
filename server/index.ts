import express, { Express } from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import router from "./routes";

dotenv.config();

const app: Express = express();

app.use(cors({
    origin:["https://kanban-seven-blush.vercel.app/"],
    methods:['POST','GET','HEAD','PUT','DELETE'],
    credentials: true
}));
app.use(cookieParser());
app.use(express.json({limit: "100mb"}));
app.use(express.urlencoded({limit:"50mb", extended: true}));
app.use("/api", router);

mongoose.connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.wto2koe.mongodb.net/test`).then(() => {
    console.log("database connected");
    app.listen(8000, () => {
        console.log("App running on 8000 port");
    })
}).catch((err: any) => {
    console.log(err);
})