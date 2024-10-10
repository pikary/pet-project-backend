import mongoose, { Schema, Document } from 'mongoose';

export interface IPost extends Document {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const PostSchema: Schema = new Schema({
  userId: { type: Number, required: true },
  id: { type: Number, unique: true, required: true },
  title: { type: String, required: true },
  body: { type: String, required: true },
});

export default mongoose.model<IPost>('posts', PostSchema);
