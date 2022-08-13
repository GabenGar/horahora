import { PublicAPIURL, FetchError } from "./types";

export interface IAPIFetchArgs {
  pathname: ConstructorParameters<typeof PublicAPIURL>["0"];
  searchParams?: ConstructorParameters<typeof PublicAPIURL>["1"];
  baseErrorMessage?: string;
  options?: IAPIFetchOptions;
}

export interface IAPIFetchOptions extends RequestInit {
  method?: "GET" | "POST";
}

export async function apiFetch<ResBody = never>({
  pathname,
  searchParams,
  baseErrorMessage = "Failed to fetch",
  options={},
}: IAPIFetchArgs): Promise<ResBody> {
  const url = new PublicAPIURL(pathname, searchParams);
  options['credentials'] = "include";
  const response = await fetch(url, options);

  if (!response.ok) {
    // @TODO: 403 status handling
    switch (response.status) {
      default: {
        const error = new FetchError(baseErrorMessage, response);
        throw error;
      }
    }
  }

  const data: ResBody = await response.json();

  return data;
}
