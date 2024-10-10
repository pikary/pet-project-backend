import mongoose, { Schema, Document } from 'mongoose';

export interface IAlbum extends Document {
  userId: number;
  id: number;
  title: string;
}

const AlbumSchema: Schema = new Schema({
  userId: { type: Number, required: true },
  id: { type: Number, unique: true, required: true },
  title: { type: String, required: true },
});

export default mongoose.model<IAlbum>('albums', AlbumSchema);
