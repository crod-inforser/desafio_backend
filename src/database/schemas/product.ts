import { Document, Schema } from 'mongoose';

export interface IProduct extends Document {
  id: number,
  brand: string,
  description: string,
  image: string,
  price: number
}

export const ProductSchema: Schema = new Schema({
  id: Number,
  brand: String,
  description: String,
  image: String,
  price: Number,
});
