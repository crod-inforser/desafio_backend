import { ZodError } from 'zod';
import { SearchProductsSchema } from '../../../../src/zod/product.parser';

describe('SearchProductsSchema parse', () => {
  it('Should not be valid if params it is not correct', () => {
    try {
      SearchProductsSchema.parse({});
    } catch (err) {
      expect(err).toBeInstanceOf(ZodError);
    }
  });
});
