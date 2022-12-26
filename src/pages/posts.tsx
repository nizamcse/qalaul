import React, { useEffect, useState } from "react"
import Post from "../components/post"
import { IPost, usePostListQuery } from "../services/posts"

const PostList = () => {
  const [posts, setPosts] = useState<IPost[]>([])
  const { data, error } = usePostListQuery(
    {},
    { refetchOnMountOrArgChange: true }
  )
  useEffect(() => {
    if (data) {
      setPosts(data.data)
    }
    if (error) {
      if ("status" in error) {
        // you can access all properties of `FetchBaseQueryError` here
        const errMsg =
          "error" in error ? error.error : JSON.stringify(error.data)
        console.log(errMsg)
      } else {
        console.log(error.message || null)
      }
    }
  }, [data, error])
  return (
    <div>
      {posts.map((post) => (
        <Post post={post} key={`post-${post.id}`} />
      ))}
    </div>
  )
}

export default PostList
