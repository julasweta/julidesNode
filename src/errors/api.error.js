export class ApiError extends Error {
  public;
  constructor(message, status) {
    super(message);
    this.status = status;
  }
}