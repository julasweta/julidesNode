import express from "express";
import mongoose from "mongoose";
import {PostsRouter} from "./routes/posts.router.js";
import {WorksRouter} from "./routes/works.router.js";
import {configs} from "./configs/config.js"; 


const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.all('*', (req, res, next) => {
  const {origin, Origin, referer, Referer} = req.headers;
  const allowOrigin = origin || Origin || referer || Referer || '*';
  res.header("Access-Control-Allow-Origin", allowOrigin);
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization, X-Requested-With");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("Access-Control-Allow-Credentials", true); //可以带cookies
  res.header("X-Powered-By", 'Express');
  if (req.method == 'OPTIONS') {
    res.sendStatus(200);
  } else {
    next();
  }
});

app.use("/posts", PostsRouter);
app.use("/works", WorksRouter);

app.use((error, req, res, next) => {
  res.json(error.message);
});

app.listen(configs.PORT, async () => {
  await mongoose.connect('mongodb+srv://julides:19731971@cluster0.tdsa9lj.mongodb.net/julides');
  console.log(`Server has successfully started on PORT ${configs.PORT}`);
});