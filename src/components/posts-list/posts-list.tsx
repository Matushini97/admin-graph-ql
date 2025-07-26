'use client'

import { GetPostsQuery, useGetPostsQuery } from '@/api/queries/get-posts.generated'
import { useInfiniteScroll } from '@siberiacancode/reactuse'
import { Loader } from '@vibe-samurai/visual-ui-kit'
import { useState, useCallback } from 'react'
import s from './posts-list.module.scss'
import { PostsItem } from '../post-item/post-item'

export type Post = GetPostsQuery['getPosts']['items'][0]

export const PostsList = () => {
  const [endCursorPostId, setEndCursorPostId] = useState<number>(0)
  const [allPosts, setAllPosts] = useState<Post[]>([])
  const { refetch, loading } = useGetPostsQuery({
    variables: { endCursorPostId },
    onCompleted: newData => {
      const newPosts = newData?.getPosts.items || []
      if (endCursorPostId === 0) {
        setAllPosts(newPosts)
      } else {
        setAllPosts(prev => [...prev, ...newPosts])
      }
    },
  })

  const loadMore = useCallback(async () => {
    const lastPostId = allPosts?.at(-1)?.id
    if (lastPostId && lastPostId !== endCursorPostId && !loading) {
      setEndCursorPostId(lastPostId)
      await refetch({ endCursorPostId: lastPostId })
    }
  }, [allPosts, endCursorPostId, loading, refetch])

  const infiniteScroll = useInfiniteScroll<HTMLDivElement>(loadMore, { distance: 10 })

  return (
    <div ref={infiniteScroll.ref} className={s.wrapper}>
      <div className={s.posts}>
        {allPosts?.map(post => (
          <PostsItem key={post.id} post={post} />
        ))}
      </div>
      {infiniteScroll.loading && <Loader />}
    </div>
  )
}
