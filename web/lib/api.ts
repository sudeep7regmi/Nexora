const API_URL = process.env.NEXT_PUBLIC_API_URL;

if (!API_URL) {
  throw new Error("NEXT_PUBLIC_API_URL is not defined");
}

interface ApiOptions extends RequestInit {
  headers?: HeadersInit;
}

export async function api<T>(
  endpoint: string,
  options: ApiOptions = {}
): Promise<T> {
  const response = await fetch(`${API_URL}${endpoint}`, {
    ...options,
    credentials: 'include',
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
  });

  if (!response.ok) {
    const errorData: unknown = await response.json();

    let message = "something went wrong";
    if (
      typeof errorData === "object" &&
      errorData !== null &&
      "message" in errorData &&
      typeof errorData.message === "string"
    ) {
      message = errorData.message;
    }
    throw new Error(message);
  }
  return response.json() as Promise<T>;
}
