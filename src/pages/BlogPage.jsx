import React from 'react'
import { Link } from "react-router-dom";
import { blogPosts } from '../blogsPosts/blogPosts';

export default function BlogPage() {
  return (
    <div>
      {
        Object.entries(blogPosts).map(([slug, post]) => (
          <Link to={`/blog/${post.slug}`} key={slug} className='flex flex-row p-4 m-4 w-96 rounded shadow-lg border-yellow-400 border'>
            <img className="h-20 w-20 rounded-full object-cover mr-4 border-2 border-yellow-400" src={post.imgUrl} alt={post.imgUrl} />
            <div className='flex flex-col'>
              <p className='font-bold'>{post.title}</p>
              <p className='overflow-hidden line-clamp-2'>{post.content}</p>
            </div>
          </Link>
        ))
      }
    </div>
  )
}
