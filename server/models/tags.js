import mongoose from "mongoose";

const tagschema = mongoose.Schema({
   name: {
      type: String,
      required: true,
      min: [1, "Tag uzunluğu yeterli değil"],
      max: 40,
   },
   createDate: { type: Date, default: Date.now },
});

export default mongoose.model("tag", tagschema);
