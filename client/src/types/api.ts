import { AxiosRequestConfig } from "axios";

type ApiEndpoints = [
  {
    uri: "/simple/price";
    response: Record<string, Record<string, number>>;
    parms: { ids: string; vs_currencies: string; include_24hr_change: boolean };
  }
];

export type ApiEndpoint = ApiEndpoints[number]["uri"];

type EndpointByUri<T extends ApiEndpoint> = Extract<
  ApiEndpoints[number],
  { uri: T }
>;

export type ApiResponse<T extends ApiEndpoint> = EndpointByUri<T>["response"];

export type ApiParams<T extends ApiEndpoint> = EndpointByUri<T> extends {
  params: object;
}
  ? EndpointByUri<T>["params"]
  : never;

type BaseApiCallConfig = {
  method?: "get" | "post" | "put" | "delete";
};

export type ApiCallConfig<T extends ApiEndpoint> = BaseApiCallConfig &
  (ApiParams<T> extends undefined
    ? AxiosRequestConfig
    : Omit<AxiosRequestConfig, "params"> & { params: ApiParams<T> });
