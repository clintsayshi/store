import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const shoesApi = createApi({
  reducerPath: "shoesApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8080/api/" }),
  tagTypes: ["Products"],
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => ({ url: `categories` }),
    }),
    getProducts: builder.query({
      query: ({ page = 1, categoryId = 0 }) => {
        return `products?page=${page}&category=${categoryId}`;
      },
      providesTags: ["Products"],
    }),
    getProduct: builder.query({
      query: (id) => `products/${id}`,
    }),
  }),
});

export const {
  useGetCategoriesQuery,
  useGetProductsQuery,
  useGetProductQuery,
} = shoesApi;
