import mongoose, { Schema, Document } from 'mongoose';

interface Geo {
  lat: string;
  lng: string;
}

interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface IUser extends Document {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
  password: string;
  refreshToken?: string;
}

const GeoSchema: Schema = new Schema({
  lat: { type: String },
  lng: { type: String },
});

const AddressSchema: Schema = new Schema({
  street: { type: String },
  suite: { type: String },
  city: { type: String },
  zipcode: { type: String },
  geo: { type: GeoSchema },
});

const CompanySchema: Schema = new Schema({
  name: { type: String },
  catchPhrase: { type: String },
  bs: { type: String },
});

const UserSchema: Schema = new Schema({
  id: { type: Number, unique: true, required: false },
  name: { type: String },
  username: { type: String },
  email: { type: String, required: true },
  address: { type: AddressSchema },
  phone: { type: String },
  website: { type: String },
  company: { type: CompanySchema },
  password: { type: String, },
  refreshToken: { type: String },
});

export default mongoose.model<IUser>('users', UserSchema);
