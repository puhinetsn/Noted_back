import { NextFunction, Request, Response } from "express";
import { AnyZodObject } from "zod";
import { de } from "zod/v4/locales";

const validate =
  (schema: AnyZodObject) =>
  (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse({
        body: req.body,
        query: req.query,
        params: req.params,
      });
    } catch (e: any) {
      return res.status(400).send(e.errors);
    }
  };

export default validate;
