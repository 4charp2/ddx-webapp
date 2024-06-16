import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { baseUrl } from '../utils/BaseUrl'

export const ddxApi = createApi({
  reducerPath: 'ddxApi',
  tagTypes: ['ddx'],
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
  }),
  endpoints: (build) => ({
    getCategories: build.query({
      query: () => ({
        url: 'category/get',
      }),
      providesTags: [{ type: 'ddx' }],
    }),
    getTagCategory: build.query({
      query: ({ tag_category }) => ({
        url: `category/get?tag_category=${tag_category}`,
      }),
      providesTags: [{ type: 'ddx' }],
    }),
    getTagProgram: build.query({
      query: ({ tag_category }) => ({
        url: `programs/get?tag_category=${tag_category}`,
      }),
      providesTags: [{ type: 'ddx' }],
    }),
  }),
})

export const { useGetCategoriesQuery, useGetTagCategoryQuery, useGetTagProgramQuery } = ddxApi
