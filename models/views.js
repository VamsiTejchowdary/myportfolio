import mongoose, { Schema, models } from "mongoose";

const viewsSchema = new Schema(
  {
    count: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  { timestamps: true }
);

const Views = models.Views || mongoose.model("Views", viewsSchema);
export default Views;
