import mongoose, { Schema, Document } from 'mongoose';

export interface IPhoto extends Document {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

const PhotoSchema: Schema = new Schema({
  albumId: { type: Number, required: true },
  id: { type: Number, unique: true, required: true },
  title: { type: String, required: true },
  url: { type: String, required: true },
  thumbnailUrl: { type: String, required: true },
});

export default mongoose.model<IPhoto>('photos', PhotoSchema);
