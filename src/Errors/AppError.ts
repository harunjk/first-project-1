class AppError extends Error {
  public statuseCode: number;

  constructor(statuseCode: number, message: string, stack = '') {
    super(message);
    this.statuseCode = statuseCode;
    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export default AppError;
