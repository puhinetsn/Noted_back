import { CustomError } from "./customError.class";

export class InvalidParamsError extends CustomError {
  constructor(message: string) {
    super(message, 400);
  }
}
