export class HttpError<TCode extends number = number> extends Error {
  public readonly cause?: Error;
  public readonly statusCode: TCode;
  public readonly message: string;
  public readonly url: string | undefined;
  public readonly method: string | undefined;
  public readonly error: any;

  constructor(opts: {
    url?: string;
    method?: string;
    message?: string;
    statusCode: TCode;
    cause?: Error;
    error?: any;
  }) {
    super(opts.message ?? `HTTP Error ${opts.statusCode} `);

    Object.setPrototypeOf(this, HttpError.prototype);
    this.name = HttpError.prototype.constructor.name;

    this.cause = opts.cause;
    this.statusCode = opts.statusCode;
    this.url = opts.url;
    this.method = opts.method;
    this.message = opts.message ?? `HTTP Error ${opts.statusCode}`;
    this.error = opts.error;

    if (opts.cause instanceof Error && opts.cause.stack) {
      this.stack = opts.cause.stack;
    }
  }

  public static fromRequest(request: Request, response: Response, error?: any) {
    return new HttpError({
      message: error,
      url: response.url,
      method: request.method,
      statusCode: response.status,
      error: error,
    });
  }
}
