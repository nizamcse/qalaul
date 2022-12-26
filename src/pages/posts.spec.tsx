import { waitFor, render } from "@testing-library/react"
import { server } from "../test/server"
import PostList from "./posts"
import { Provider } from "react-redux"
import { store } from "../app/store"

describe("Posts", () => {
  beforeAll(() => {
    server.listen()
  })

  afterEach(() => {
    server.resetHandlers()
  })

  afterAll(() => {
    server.close()
  })

  it("should display posts", async () => {
    const { container } = render(
      <Provider store={store}>
        <PostList />
      </Provider>
    )

    await waitFor(() => {
      expect(container.getElementsByClassName("post-card")).toHaveLength(10)
    })
  })
})
