import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://assignment-seven-server.vercel.app/",
  }),
  tagTypes: ["winter-cloths"],
  endpoints: () => ({}),
});
