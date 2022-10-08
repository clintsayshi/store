import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

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
    getProduct: builder.query({
      query: (id) => `products/${id}`,
      providesTags: (result, error, id) => [{ type: "Product", id }],
    }),
  }),
});

export const {
  useGetCategoriesQuery,
  useGetProductsQuery,
  useGetProductQuery,
} = shoesApi;
