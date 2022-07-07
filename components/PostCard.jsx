import Link from 'next/link'
import React from 'react'

export default function PostCard({ image, title, content, link, author }) {
  return (
    <article className='text-[#444] text-[14px] py-3'>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={image}
        alt={title}
        className="w-full h-[275px]"
      />
      <h5 className="my-3 font-oswald text-[24px]">{title}</h5>
      <p>{content}</p>
      <p className='my-[15px]'># {author}</p>
      <Link href={link}>
        <a className='px-[15px] py-[6px] bg-[#f14b05] text-white block text-center'>Batafsil o`qish</a>
      </Link>
    </article>
  )
}
