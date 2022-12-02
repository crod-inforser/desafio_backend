import { NextFunction, Request, Response } from 'express';
import { AnyZodObject, ZodError } from 'zod';

export default
(schema: AnyZodObject) => (
  (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse({
        body: req.body,
        params: req.params,
        query: req.query,
      });
      return next();
    } catch (error) {
      if (error instanceof ZodError) {
        console.log('schema error', error.issues);
        return res.status(400).json({ errors: error.issues.map((issue) => (issue.message)) });
      }
      return res.status(400).json({ message: 'internal server error' });
    }
  }
);
