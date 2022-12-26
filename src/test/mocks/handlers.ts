// eslint-disable-next-line import/no-extraneous-dependencies
import { rest } from "msw"
import { IPostsResponse } from "../../services/posts"
import { postsMockData } from "./postMocks"

export const handlers = [
  rest.get("https://dummyapi.io/data/v1/post", (_, res, ctx) =>
    res(ctx.status(200), ctx.json<IPostsResponse>(postsMockData))
  ),
]
