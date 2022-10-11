/** Import mongoose and Post interface */
import mongoose from "mongoose";
import { Post } from "../interface";

/** Create schema */
const postSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  userName: {
    type: String,
  },
  description: {
    type: String,
    max: 500,
  },
  img: {
    type: String,
  }
});
const Post = mongoose.model<Post>("Post", postSchema);

export default Post;
