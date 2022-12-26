import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

const baseQuery = fetchBaseQuery({
  baseUrl: "https://dummyapi.io/data/v1",
  prepareHeaders: (headers) => {
    headers.set("app-id", "63a9331024ef7046279f0b49")
    return headers
  },
})

export const apiSlice = createApi({
  baseQuery: baseQuery,
  endpoints: (builder) => ({}),
})
