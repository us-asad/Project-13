import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function CategoryBox({ image, name, slug, boxLink }) {
  return (
    <Link href={`/${boxLink}/${slug}`}>
      <a className="show-image-overflow group relative mb-5 mr-8 border border-black rounded-lg block p-[5px] pb-7 text-[12px] w-[160px] text-center overflow-hidden">
        <Image
          src={image}
          alt={name}
          width={100}
          height={100}
          objectFit="contain"
          className='group-hover:scale-125 duration-500'
        />
        <p className='absolute bottom-0 left-0 line-clamp-1 w-full py-1 mx-auto bg-[#555] text-white'>{name}</p>
      </a>
    </Link>
  )
}
