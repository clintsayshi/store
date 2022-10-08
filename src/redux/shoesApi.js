import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const shoesApi = createApi({
  reducerPath: "shoesApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8080/api/" }),
  tagTypes: ["Product"],
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => ({ url: `categories` }),
    }),
    getProducts: builder.query({
      query: () => `products`,
      providesTags: (result, error, id) => [{ type: "Product", id }],
    }),
  }),
});

export const { useGetCategoriesQuery, useGetProductsQuery } = shoesApi;
