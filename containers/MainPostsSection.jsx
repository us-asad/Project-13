import { MainPostCard } from 'components'
import { recent_posts, sections } from 'data/main'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BiLink } from 'react-icons/bi'
import { FaSearchPlus } from 'react-icons/fa'
import { SiGridsome } from 'react-icons/si'
import { SectionTitle } from 'subcomponents'
import { SideBar } from 'containers'
import PostCard from 'components/PostCard'

export default function MainPostsSection() {
  return (
    <div className='grid grid-cols-4 custom-container'>
      <div className='col-span-4 lg:col-span-3 lg:px-[15px] px-1 lg:pt-[80px] pt-[20px]'>
        <div className='border-dashed lg:border-b lg:border-l border-[#c9c9c9] px-[15px] lg:px-0 pb-10'>
          <MainPostCard />
        </div>
        <SectionTitle title1="DASTUR" title2="YO`NALISHLARI" subtitle="TA`LIMGA OID DASTURLAR KO`RSATMALARI" />
        <ul className='grid grid-cols-12 gap-0.5 border-b border-gray-300 pb-[50px]'>
          {sections.map((section, i) => (
            <li
              className='col-span-12 md:col-span-6 lg:col-span-3 text-white bg-no-repeat bg-cover w-full mb-10 lg:mb-0'
              style={{ backgroundImage: `url(${section.image})` }}
              key={i}
            >
              <div className='bg-[#00000099] p-10 text-center'>
                <SiGridsome className='hidden md:block text-[30px] mx-auto text-white' />
                <p className='text-[13px] mb-[10px] md:mb-[30px] mt-2.5 font-semibold md:font-normal font-oswald'>{section.name}</p>
                <Link href={section.link}>
                  <a className='uppercase text-[10px] p-[6px] border border-white font-bold'>Batafsil</a>
                </Link>
              </div>
            </li>
          ))}
        </ul>
        <SectionTitle title1="OXIRGI" title2="YUKLAMALAR" subtitle="MAKTABLAR IJODIDAN LAVXALAR" />
        <ul className='hidden lg:grid grid-cols-6 gap-0.5 pb-[50px]'>
          {recent_posts.map((post, i) => (
            <li
              key={i}
              className="group relative col-span-6 md:col-span-3 lg:col-span-2 text-white h-[270px] border-[3px] border-blue"
            >
              <div className='w-full h-full'>
                <Image
                  src={post.image}
                  alt={post.title}
                  layout="fill"
                  className='group-hover:scale-125 duration-300'
                />
              </div>
              <div className='absolute top-0 left-0 w-full h-full opacity-0 bg-[#000000a2] group-hover:opacity-100 duration-300 overflow-hidden'>
                <Link href={post.link}>
                  <a className='px-5 py-[15px] bg-white text-black hover:text-blue text-[14px] absolute top-[43%] -left-full group-hover:left-0 duration-300'>
                    <BiLink />
                  </a>
                </Link>
                <button className='px-5 py-[15px] bg-blue text-white text-[14px] absolute top-[43%] -right-full group-hover:right-0 duration-300'>
                  <FaSearchPlus />
                </button>
                <Link href={post.link}>
                  <a className='text-[17px] absolute -bottom-full group-hover:bottom-2 duration-300 w-full text-center'>{post.title}</a>
                </Link>
              </div>
            </li>
          ))}
        </ul>
        <div className='block lg:hidden space-y-3 mx-5'>
          {recent_posts.map((post, i) => <PostCard key={i} {...post} />)}
        </div>
      </div>
      <div className='col-span-1'>
        <SideBar />
      </div>
    </div>
  )
}
