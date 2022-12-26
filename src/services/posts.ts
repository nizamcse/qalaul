import { apiSlice } from "../app/api/apiSlice"

interface IPostDetailsParams {
  id: string
}

export interface IOwner {
  firstName: string
  id: string
  lastName: string
  picture: string
  title: string
}

export interface IComment {
  id: string
  message: string
  owner: IOwner
  post: string
  publishDate: string
}

export interface IPost {
  id: string
  image: string
  likes: number
  publishDate: string
  text: string
  owner: IOwner
}

interface IPostsResponse {
  data: IPost[]
}
interface ICommentsResponse {
  data: IComment[]
}

const postApi = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    postList: build.query<IPostsResponse, Record<string, never>>({
      query: () => {
        return `/post?limit=10`
      },
    }),

    postDetails: build.query<ICommentsResponse, IPostDetailsParams>({
      query: ({ id }: IPostDetailsParams) => `/post/${id}/comment`,
    }),
  }),
  overrideExisting: false,
})

export const { usePostListQuery, usePostDetailsQuery } = postApi
