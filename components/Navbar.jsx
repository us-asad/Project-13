import { menu_items, nav_items } from 'data/main'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { BiChevronDown } from "react-icons/bi";
import { FaSearch } from 'react-icons/fa';
import { MdOutlineClose } from 'react-icons/md';
import { ImHome3 } from "react-icons/im";
import { TiThMenu } from "react-icons/ti";
import { HiArrowRight } from "react-icons/hi";

const changeNum = 50;

const beforeItemClassNames = "before:absolute before:border-t-4 before:border-r-[6px] before:w-0 before:h-0 before:border-transparent before:border-t-[#adadad] before:inline-block after:inline-block after:border-transparent after:border-t-[#adadad] after:border-r-2 after:border-b-4 after:border-b-4"

export default function Navbar() {
  const [openSearch, setOpenSearch] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [openMenu, setOpenMenu] = useState(false);

  const showMenu = state => {
    setOpenMenu(state);
    document.body.style.overflow = state ? "hidden" : "auto"
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () => {
        setScrollY(window.scrollY);
      });
    }
  }, []);

  return (
    <>
      {/* DESKTOP */}
      <nav className={`hidden lg:block before:bg-[#f3f3f3] pt-[27px] relative z-[50] before:h-[45px] before:absolute before:left-0 before:t-[28px] before:w-full before:border-y before:border-[#0000000f] ${scrollY > changeNum && "before:hidden w-full !p-0 !fixed top-0 left-0 z-40 border-b !h-[52px] bg-white"}`}>
        <div className='custom-container flex justify-between'>
          <div className={`pr-[30px] pl-[20px] mt-[-27px] relative min-w-[200px] max-h-[77px] text-center ${beforeItemClassNames} before:bottom-[1px] before:-right-[6px] ${scrollY < changeNum ? "skew-x-[25deg] nav-item-gradient-bg" : "before:hidden !mt-0"}`}>
            <Link href="/">
              <a className={`${scrollY < changeNum ? "skew-x-[-25deg] h-[77px]" : "h-full"} w-full flex items-center`}>
                <Image
                  src="/logo.png"
                  alt="Andijon vxtb"
                  width={scrollY > changeNum ? 270 : 250}
                  height={scrollY > changeNum ? 40 : 70}
                />
              </a>
            </Link>
          </div>
          <ul className='flex space-x-[10px] font-bold text-[#444]'>
            {nav_items.map((item, i) => (
              <li
                key={i}
                className={`group pb-[26px] relative text-[14px] h-[70px] duration-200 ${openSearch && "opacity-0 pointer-events-none"} ${scrollY > changeNum && "!p-0 h-[52px]"}`}
              >
                <Link href={item.link}>
                  <a className={`z-[2] relative block h-full ${beforeItemClassNames} before:bottom-[-4px] before:right-[-17px] after:inline-block after:border-b-[#adadad] after:border-r-2 after:border-b-4 after:border-l-4 after:absolute after:-top-[2px] after:-left-[16px] ${scrollY > changeNum && "before:hidden after:hidden"}`}>
                    <span
                      className={`px-[15px] custom flex items-center h-full justify-center relative before:transition-all before:duration-200 nav-item-gradient-bg-before before:absolute before:w-full before:z-[-1] before:bottom-[-3px] before:h-[51px] before:skew-x-[25deg] ${scrollY > changeNum && "before:hidden "}`}
                    >
                      {item.name}
                      {item?.children?.length && <BiChevronDown className='ml-[4px] transition duration-200' />}
                    </span>
                  </a>
                </Link>
                {item?.children?.length && (
                  <ol className='bg-white duration-300 left-[15px] absolute min-w-[220px] top-[110%] z-10 opacity-0 pointer-events-none group-hover:top-full group-hover:opacity-100 group-hover:pointer-events-auto'>
                    {item.children.map((subItem, i) => (
                      <li
                        key={i}
                        className="duration-400 py-[13px] px-[15px] bg-[#0000000f] border-[#0000001a] border text-[14px] font-medium"
                      >
                        <Link href={subItem.link}>
                          <a className='min-w-ful hover:pl-2 duration-300'>{subItem.name}</a>
                        </Link>
                      </li>
                    ))}
                  </ol>
                )}
              </li>
            ))}
            <li className={`group pb-[26px] relative text-[14px] h-[70px] ml-3 cursor-pointer ${scrollY > changeNum && "!p-0 h-[52px]"}`}>
              <div className={`z-[2] relative block h-full ${beforeItemClassNames} before:bottom-[-4px] before:border-t-blue before:right-[-17px] after:inline-block after:border-b-blue after:border-r-2 after:border-b-4 after:border-l-4 after:absolute after:-top-[4px] after:-left-[12px] ${scrollY > changeNum && "before:hidden after:hidden"}`}>
                <div
                  className={`ml-[4px] transition duration-200 text-white px-[15px] custom flex items-center h-full justify-center relative before:transition-all before:duration-200 before:bg-blue nav-item-gradient-bg-before before:absolute before:w-full before:z-[-1] before:bottom-[-3px] before:h-[51px] before:skew-x-[25deg] ${scrollY > changeNum && "before:hidden text-black"}`}
                >
                  {openSearch && (
                    <form onSubmit={e => e.preventDefault()}>
                      <input
                        type="text"
                        maxLength={4000}
                        placeholder="Search..."
                        required
                        className={`h-full outline-none w-96 ${scrollY > changeNum ? "bg-white text-black placeholder:text-black" : "bg-blue text-white placeholder:text-white"}`}
                      />
                    </form>
                  )}
                  {openSearch ? <MdOutlineClose onClick={() => setOpenSearch(prev => !prev)} className='text-[16px] h-full' /> : <FaSearch className='h-full' onClick={() => setOpenSearch(prev => !prev)} />}
                </div>
              </div>
            </li>
          </ul>
        </div >
      </nav>
      {/* MOBILE */}
      <div className='block lg:hidden mb-[48px] w-full'>
        <nav className='fixed top-0 left-0 z-[50] w-full bg-blue mx-auto h-[48px]'>
          <div className='max-w-[765px] border-x border-white text-white h-full justify-between flex items-center mx-auto '>
            <Link href="/">
              <a className='px-3'>
                <ImHome3 className='text-[25px]' />
              </a>
            </Link>
            <h2 className='word whitespace-nowrap text-center font-bold text-[24px]'>ANDIJONVXTB UZ</h2>
            <button
              onClick={() => showMenu(!openMenu)}
              className="h-full px-3"
              style={{ boxShadow: openMenu ? "inset 0 0 0.5em rgb(0 0 0 / 50%)" : "none" }}
            >
              <TiThMenu className='text-[25px]' />
            </button>
            <aside
              className={`fixed z-[9] bottom-0 overflow-y-auto w-[80%] duration-200 bg-white ${openMenu ? "right-0" : "right-[-100%]"}`}
              style={{ height: "calc(100vh - 48px)" }}
            >
              <ul className='text-black text-[12.6px]'>
                {menu_items.map((item, i) => (
                  <li
                    key={i}
                    className="border-l-[3px] border-l-blue-tight border-b border-b-[#bbbbbba3] my-0.5 p-3"
                  >
                    <Link href={item.link}>
                      <a>{item.name}</a>
                    </Link>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </nav>
        {openMenu && <div
          className='fixed top-0 left-0 w-full h-full bg-[#00000054] z-[7]'
          onClick={() => showMenu(false)}
        />}
      </div>
    </>
  )
}
