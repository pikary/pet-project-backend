import mongoose, { Schema, Document } from 'mongoose';

export interface IComment extends Document {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

const CommentSchema: Schema = new Schema({
  postId: { type: Number, required: true },
  id: { type: Number, unique: true, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  body: { type: String, required: true }
});

export default mongoose.model<IComment>('comments', CommentSchema);
