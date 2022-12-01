import { z } from 'zod';

export const SearchProductsSchema = z.object({
  query: z.object({
    search: z.string(),
  }),
});

export type SearchProductsQueryType = z.infer<typeof SearchProductsSchema>['query'];
