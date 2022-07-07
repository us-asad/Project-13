import { active_sections, additional_sections, recent_posts, useful_websites } from 'data/main'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BsEyeFill } from 'react-icons/bs'
import { FaEye } from 'react-icons/fa'

export default function SideBar() {
  return (
    <aside
      className="hidden lg:block w-full py-[80px] relative text-[#333] after:absolute after:w-[500%] after:h-full after:top-0 after:shadow-1 after:bg-[#f7f7f7]"
    >
      <ul className='relative z-10'>
        <li className='mb-[40px]'>
          <h4 className='-ml-1 mb-[20px] py-[12px] px-4 bg-white text-[17px] uppercase font-oswald font-normal'>DAVLAT <span className='text-blue'>RAMZLARI</span></h4>
          <ol className='px-[20px] divide-y-2 divide-gray-200'>
            <li className='w-full flex justify-around items-center'>
              <Link href="/">
                <a>
                  <Image
                    src="/flag.png"
                    alt="Uzbekistan Flag"
                    width={52}
                    height={32}
                  />
                </a>
              </Link>
              <Link href="/">
                <a>
                  <Image
                    src="/gerb.png"
                    alt="Uzbekistan Gerb"
                    width={44}
                    height={44}
                  />
                </a>
              </Link>
              <Link href="/">
                <a>
                  <Image
                    src="/gimn.png"
                    alt="Uzbekistan Madhiya"
                    width={52}
                    height={32}
                  />
                </a>
              </Link>
            </li>
            {additional_sections.map((item, i) => (
              <li key={i} className="py-[10px]">
                <Link href={item.link}>
                  <a className='text-red-600 text-[14px] font-medium'>{item.name}</a>
                </Link>
              </li>
            ))}
          </ol>
        </li>
        <li className='mb-[40px]'>
          <h4 className='-ml-1 mb-[20px] py-[12px] px-4 bg-white text-[17px] uppercase font-oswald font-normal'>Oxirgi <span className='text-blue'>Yuklamalar</span></h4>
          <ol className='px-[20px] divide-y-2 divide-gray-200'>
            {recent_posts.map((post, i) => (
              <li key={i} className="py-[15px]">
                <Link href={post.link}>
                  <a className='flex space-x-[10px] text-[#333]'>
                    <Image
                      src={post.image}
                      alt={post.title}
                      width={55}
                      height={55}
                    />
                    <div>
                      <h5 className='text-[13px] mb-[10px]'>{post.title}</h5>
                      <div className='text-[11px] flex space-x-3'>
                        <span>{post.time}</span>
                        <div className='flex items-center space-x-1'>
                          <FaEye />
                          <span>{post.views}</span>
                        </div>
                      </div>
                    </div>
                  </a>
                </Link>
              </li>
            ))}
          </ol>
        </li>
        <li className='mb-[40px]'>
          <h4 className='-ml-1 mb-[20px] py-[12px] px-4 bg-white text-[17px] uppercase font-oswald font-normal'>Oxirgi <span className='text-blue'>Yuklamalar</span></h4>
          <ol className='px-[20px] divide-y-2 divide-gray-200'>
            {active_sections.map((section, i) => (
              <li key={i} className="py-[10px] text-[14px] font-medium flex justify-between">
                <Link href={section.link}>
                  <a className='cursor-pointer hover:text-blue duration-200'>{section.name}</a>
                </Link>
                <span>[{section.num}]</span>
              </li>
            ))}
          </ol>
        </li>
        <li className='mb-[40px]'>
          <h4 className='-ml-1 mb-[20px] py-[12px] px-4 bg-white text-[17px] uppercase font-oswald font-normal'><span className='text-blue'>Foydali</span> Saytlar</h4>
          <ol className='px-[20px] items-center flex flex-wrap'>
            {useful_websites.map(website => (
              <li key={website}>
                <a
                  href={`https://${website}`}
                  target="_blank"
                  rel="noreferrer"
                  className='cursor-pointer hover:text-blue duration-200 px-[10px] mb-[7px] mr-[4px] block font-medium py-[5px] text-[12px] border bg-white border-gray-200 hover:border-blue'
                >{website}</a>
              </li>
            ))}
          </ol>
        </li>
      </ul>
    </aside>
  )
}
