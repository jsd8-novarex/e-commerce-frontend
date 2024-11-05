export const statusMessageErrorApi: Record<number, { message: string }> = {
  400: { message: "Bad Request" },
  401: { message: "Unauthorized" },
  403: { message: "Forbidden" },
  404: { message: "Resource not found" },
  500: { message: "Internal Server Error" },
  503: { message: "Service Unavailable" },
  504: { message: "Gateway Timeout" },
};
