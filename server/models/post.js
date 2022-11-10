import mongoose from "mongoose";

const postschema = mongoose.Schema({
   title: {
      type: String,
      required: true,
      min: [10, "Başlık uzunluğu yeterli değil"],
      max: 200,
   },
   subtitle: {
      type: String,
      required: true,
      min: [20, "Alt başlık uzunluğu yeterli değil"],
      max: 250,
   },
   text: {
      type: String,
      required: true,
      min: [50, "Yazı uzunluğu yeterli değil"],
   },
   tags: {
      type: [{ name: String, color: String }],
      required: false,
   },
   user: {
      type: String,
      required: true,
   },
   createDate: { type: Date, default: Date.now },
});

export default mongoose.model("Post", postschema);
