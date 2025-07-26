'use client'

import { Typography } from '@vibe-samurai/visual-ui-kit'
import Image from 'next/image'
import s from './post-item.module.scss'
import { GetPostsQuery } from '@/api/queries/get-posts.generated'

type Props = {
  post: GetPostsQuery['getPosts']['items'][0]
}

export const PostsItem = ({ post }: Props) => {
  const { description, images } = post

  const normalizedImage = images?.filter((img): img is { url: string } => Boolean(img?.url))[0]
  return (
    <div className={s.wrapper}>
      <Image width={100} height={100} src={normalizedImage?.url ?? ''} alt="post image" />
      <Typography>{description}</Typography>
    </div>
  )
}
