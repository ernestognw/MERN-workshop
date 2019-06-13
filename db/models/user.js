import mongoose from "mongoose";
import uniqueValidator from "mongoose-unique-validator";

const UserSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, unique: true, index: true, required: true },
  password: { type: String, required: true }
});

UserSchema.plugin(uniqueValidator);

export default mongoose.model("User", UserSchema);
