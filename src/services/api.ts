import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BeerQueryParams, ItemBeer } from "../declarations/beerApi";

export const beerApi = createApi({
  reducerPath: "beerApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.punkapi.com/v2",
  }),
  endpoints: (builder) => ({
    getBeers: builder.query<ItemBeer, BeerQueryParams>({
      query: ({ query, startIndex }) =>
        `/beers?beer_name=${query}&page=${startIndex}&per_page=6`,
    }),
    getBeer: builder.query<ItemBeer, BeerQueryParams>({
      query: ({ id }) => `/beers/${id}`,
    }),
  }),
});

export const { useGetBeersQuery, useGetBeerQuery } = beerApi;
