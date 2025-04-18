import { apiSlice } from "../api/apiSlice";

const propertyApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProperties: builder.query({
      query: () => "/property",
    }),
    getPropertyById: builder.query({
      query: (id) => `/property/${id}`,
    }),
  }),
});

export const { useGetPropertiesQuery, useGetPropertyByIdQuery } = propertyApi;
