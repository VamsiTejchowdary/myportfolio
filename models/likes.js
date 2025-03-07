import mongoose, { Schema, models } from "mongoose";

const likesSchema = new Schema(
  {
    count: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  { timestamps: true }
);

const Likes = models.Views || mongoose.model("Likes", likesSchema);
export default Likes;
