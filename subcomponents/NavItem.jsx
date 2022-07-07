import Link from 'next/link'
import React from 'react'
import { BiChevronDown } from 'react-icons/bi'

export default function NavItem({ link, name, beforeItemClassNames }) {
  return (
    <li
      className="group pb-[26px] relative text-[14px] h-[70px] hover:text-white"
    >
      <Link href={link}>
        <a className={`z-[2] relative block h-full ${beforeItemClassNames} before:bottom-[-4px] before:right-[-17px] group-hover:after:bg-blue group-hover:after:hidden after:inline-block after:border-b-[#adadad] after:border-r-2 after:border-b-4 after:border-l-4 after:absolute after:-top-[2px] after:-left-[16px]`}>
          <span
            className='px-[15px] custom flex items-center h-full justify-center relative before:transition before:duration-200 group-hover:before:left-[-6px] before:ease-in group-hover:before:bg-blue group-hover:before:h-[77px] nav-item-gradient-bg-before group-hover:before:shadow-none before:absolute before:w-full before:z-[-1] before:bottom-[-3px] before:h-[51px] before:skew-x-[25deg]'
          >
            {name}
            <span className='group-hover:rotate-90'>
              <BiChevronDown className='ml-[4px]' />
            </span>
          </span>
        </a>
      </Link>
    </li>
  )
}
