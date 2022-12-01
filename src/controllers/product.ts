import { Request, Response } from 'express';

import { SearchProductsQueryType } from '../zod/product.parser';
import { IProduct } from '../database/schemas/product';
import Product from '../database/models/product';
import { isPalindrome } from '../util';

export const searchProduct = async (
  req: Request<unknown, unknown, unknown, SearchProductsQueryType>,
  res: Response,
) => {
  try {
    const idProds = await Product.find<IProduct[]>()
      .$where(`this.id.toString().match(/${req.query.search}/i)!==null`)
      .select('_id');

    const $regex = new RegExp(req.query.search, 'i');

    const allProducts = await Product.find({
      $or: [
        { brand: $regex },
        { description: $regex },
        { _id: { $in: idProds } },
      ],
    }).lean();

    const products = allProducts.map((product) => ({
      ...product,
      discount: (
        isPalindrome(product.id.toString())
        || isPalindrome(product.brand)
        || isPalindrome(product.description)
      )
        ? 50
        : 0,
    }));

    return res.status(200).json({ products });
  } catch (e) {
    console.error(e);
    if (e instanceof Error) return res.status(401).json({ message: e.message });
    return res.status(500).json({ message: 'Internal server error' });
  }
};

export const getProducts = () => {

};
