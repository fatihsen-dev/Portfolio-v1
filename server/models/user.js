import mongoose from "mongoose";

const userSchema = mongoose.Schema({
   name: {
      type: String,
      required: true,
      min: [3, "İsminiz yeteri kadar uzun değil"],
   },
   email: {
      type: String,
      required: true,
      min: [6, "Mail adresiniz yeteri kadar uzun değil"],
   },
   password: {
      type: String,
      required: true,
      min: [8, "Şifreniz  yeteri kadar güvenli değil"],
   },
   userType: {
      type: String,
      enum: ["USER", "ADMIN"],
      default: "USER",
   },
   createdDate: { type: Date, default: Date.now },
});

export default mongoose.model("User", userSchema);
