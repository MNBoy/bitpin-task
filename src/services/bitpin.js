import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define a service using a base URL and expected endpoints
export const bitpinApi = createApi({
  reducerPath: 'bitpinApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.bitpin.org/v1/' }),
  endpoints: (builder) => ({
    getCoins: builder.query({
      query: () => `mkt/markets/`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetCoinsQuery } = bitpinApi;
