import React from 'react'
import { useParams } from 'react-router-dom'
import { blogPosts } from '../blogsPosts/blogPosts'

export default function BlogPost() {
  const { slug } = useParams()

  const { title, imgUrl, content } = blogPosts[slug];

  return (
    <div className='flex flex-col items-center space-y-4 p-10'>
      <img className='h-96 w-96 rounded-full object-cover' src={imgUrl} alt={imgUrl} />
      <h1 className='font-bold text-4xl'>{title}</h1>
      <p className='text-lg'>{content}</p>
    </div>
  )
}
