import { recent_post } from 'data/main'
import Link from 'next/link'
import React from 'react'

export default function MainPostCard() {
  const postLink = `/files/${recent_post.category.category.slug}/${recent_post.category.slug}/${recent_post.slug}`;

  return (
    <article className='grid grid-cols-9'>
      <div className='hidden lg:flex col-span-1 flex-col items-center h-max relative after:absolute after:top-[28px] after:left-0 after:w-[17px] after:h-[1px] after:bg-[#00000026] before:absolute before:top-[28px] before:right-0 before:w-[17px] before:h-[1px] before:bg-[#00000026]'>
        <div className='flex flex-col items-center justify-center rounded-full bg-blue text-white min-h-[55px] w-[55px] m-0'>
          <b>7</b>
          <b>Jul</b>
        </div>
        <p className='text-center text-[11px] mt-[7px]'>2022</p>
      </div>
      <div className='group col-span-9 lg:col-span-8'>
        <div className='relative h-auto border-b-4 w-full border-blue overflow-hidden'>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={recent_post.image}
            alt={recent_post.title}
            className="duration-300 group-hover:-rotate-12 group-hover:scale-[1.5] scal"
          />
          <div className='absolute top-0 left-0 w-full h-full flex items-center justify-center bg-[#0000009d] opacity-0 duration-300 group-hover:opacity-100'>
            <div className='w-[90%] h-[80%] border-4 border-[#ffffff99] translate-y-[8px] opacity-0 duration-300 group-hover:opacity-100 group-hover:translate-y-0' />
          </div>
        </div>
        <div className='lg:p-[15px] lg:pt-5 py-2 text-[#888] lg:text-black'>
          <Link href={postLink}>
            <a className='duration-300 group-hover:text-blue text-[20px] font-bold lg:font-normal lg:text-[23px] block mb-[4px] lg:mb-[15px]'>{recent_post.title}</a>
          </Link>
          <p className='text-[17px]'>{recent_post.content}</p>
          <Link href={postLink}>
            <a className='uppercase font-serif py-[10px] px-[15px] bg-blue duration-300 hover:bg-[#1689d0] w-full mt-[10px] block text-center text-[14px] text-white'>batafsil o&apos;qish</a>
          </Link>
        </div>
      </div>
    </article>
  )
}
