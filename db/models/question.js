import mongoose from "mongoose";

const QuestionSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  icon: { type: String, required: true },
  createdAt: { type: Date, required: true, default: Date.now },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  answers: [
    { type: mongoose.Schema.Types.ObjectId, ref: "Answer", default: [] }
  ]
});

export default mongoose.model("Question", QuestionSchema);
