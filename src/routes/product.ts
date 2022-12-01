import { Router } from 'express';
import schemaValidation from '../middlewares/schema';
import { SearchProductsSchema } from '../zod/product.parser';
import { searchProduct } from '../controllers/product';

const router = Router();

router.get('/search', schemaValidation(SearchProductsSchema), searchProduct);

export default router;
