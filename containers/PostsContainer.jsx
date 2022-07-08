import React from 'react'
import PostCard from 'components/PostCard'

export default function PostsContainer({ posts }) {
  return (
    <ul>
      {posts?.map((post, i) => (
        <li key={i} className="border-t border-blue">
          <PostCard {...post} />
        </li>
      ))}
    </ul>
  )
}
