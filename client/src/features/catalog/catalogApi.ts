import type { Product } from "../../app/models/product";
import { baseQueryWithErrorHandling } from "../../app/api/baseApi";
import { createApi } from "@reduxjs/toolkit/query/react";

export const catalogApi = createApi({
    reducerPath: 'catalogApi',
    baseQuery: baseQueryWithErrorHandling,
    endpoints: (builder) => ({
        fetchProducts: builder.query<Product[], void>({
            query: () => ({url: '/products', method: 'GET'})
        }),
        fetchProductDetails: builder.query<Product, number>({
            query: (productId) => ({url: `/products/${productId}`, method: 'GET'})
        }),
    }),
});

export const {useFetchProductDetailsQuery, useFetchProductsQuery} = catalogApi;