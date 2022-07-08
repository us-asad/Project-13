import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function PostCard({ image, title, content, slug, author, category }) {
  return (
    <article className='text-[#444] grid grid-cols-12 text-[14px] py-3'>
      <div className="col-span-12 lg:col-span-5 relative w-full h-[275px] px-[15px]">
        <Image
          src={image}
          alt={title}
          layout="fill"
        />
      </div>
      <div className='col-span-12 lg:col-span-7 p-5'>
        <h5 className="my-3 font-oswald text-[24px]">{title}</h5>
        <p>{content}</p>
        <p className='my-[15px]'># {author}</p>
        <Link href={`/files/${category.category.slug}/${category.slug}/${slug}`}>
          <a className='px-[15px] py-[6px] bg-[#f14b05] font-bold text-white block text-center'>Batafsil o`qish</a>
        </Link>
      </div>
    </article>
  )
}
