import express from "express";
import mongoose from "mongoose";
import {PostsRouter} from "./routes/posts.router.js";
import {WorksRouter} from "./routes/works.router.js";
import {configs} from "./configs/config.js"; 

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use("/posts", PostsRouter);
app.use("/works", WorksRouter);

app.use((error, req, res, next) => {
  res.json(error.message);
});

app.listen(configs.PORT, async () => {
  await mongoose.connect('mongodb+srv://julides:19731971@cluster0.tdsa9lj.mongodb.net/julides');
  console.log(`Server has successfully started on PORT ${configs.PORT}`);
});