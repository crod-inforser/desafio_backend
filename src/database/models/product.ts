import { model } from 'mongoose';
import { ProductSchema, IProduct } from '../schemas/product';

export default model<IProduct>('Product', ProductSchema);
