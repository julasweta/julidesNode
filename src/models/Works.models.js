import {model, Schema} from "mongoose";

const worksSchema = new Schema(
  {
    jpg: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },

  
  },
  {timestamps: true, versionKey: false},
);

export const Works = model ("works", worksSchema);