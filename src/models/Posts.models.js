import {model, Schema, Types} from "mongoose";


const blockSchema = new Schema({
  title: {
    type: String,
  },
  photo: {
    type: [String],
    required: true,
  },
  paragraph: {
    type: String,
    required: false,
  },
});

const articleSchema = new Schema({
  title: {
    type: String,
  },
  short: {
    type: String,
    required: true,
  },
  description: {
    blocks: [blockSchema]
  },
});



export const Posts = model("posts", articleSchema);



