import { footer_bottom_links, footer_social } from 'data/main'
import Link from 'next/link';
import React from 'react'
import { AiFillYoutube } from 'react-icons/ai';
import { BsFillTelephoneFill, BsInstagram } from 'react-icons/bs';
import { FaChild, FaEnvelope, FaFacebookF, FaPuzzlePiece, FaTelegramPlane } from 'react-icons/fa';
import { MdLocationPin } from 'react-icons/md';

const iconAnimation = {
  className: "group-hover:animate-ping",
  style: {
    animationIterationCount: 1
  }
}

export default function Footer() {
  return (
    <footer className='text-white'>
      <div className='hidden lg:block bg-black pt-[10px]'>
        <div className='custom-container flex justify-between '>
          <h2 className='font-oswald font-light text-[22px] pb-[10px] align-center text-gray-400'><b className='text-blue font-black font-sans'>ANDIJONVXTB</b> MONITORING SISTEMASI BILAN BOG`LANISH.</h2>
          <a
            href="https://t.me/maktablarbot"
            target="_blank"
            rel="noreferrer"
            className='bg-blue skew-x-[25deg] px-[30px] py-[22px] -mt-[17px] relative after:absolute after:-left-[9px] after:top-0 after:border-l-[9px] after:border-b-[7px] after:border-transparent after:border-b-blue'
            style={{ backgroundImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 86%, rgba(0, 0, 0, 0.27) 100%)' }}
          >
            <span className='relative z-10 skew-x-[-25deg] block font-extrabold tracking-wider'>@MAKTABLARBOT</span>
          </a>
        </div>
      </div>
      <div className='md:bg-[url(/footer-bg.png)] bg-repeat-x bg-left-bottom bg-[#111] text-[#888]'>
        <div className='custom-container lg:px-0'>
          <div className='grid grid-cols-4 gap-[30px] py-10 lg:py-[100px] px-[15px]'>
            <div className='col-span-4 lg:col-span-1'>
              <h3 className='font-oswald text-[22px] font-light mb-[45px]'>BIZ HAQIMIZDA</h3>
              <p className='mb-[25px] pb-5 border-b border-b-[#ffffff0d] text-[14px] text-[#888]'>Kelajagimiz bo`lmish yosh avlodni ta`lim-tarbiya olishlari uchun shart-sharoit yaratish, sog`-salomat ulg`aytirish, ularga ota-ona kabi mehr berish oliy maqsadimiz.</p>
              <ul className='grid grid-cols-2 gap-x-[10px] gap-y-[5px]'>
                {footer_social.map((item, i) => (
                  <li key={i}>
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noreferrer"
                      className='group h-[30px] bg-[#0b0b0b] flex items-center'
                    >
                      <span
                        className='h-full w-[30px] grid place-content-center overflow-hidden text-white'
                        style={{ background: item.color }}
                      >
                        {{
                          child: <FaChild {...iconAnimation} />,
                          telegram: <FaTelegramPlane {...iconAnimation} />,
                          puzzle: <FaPuzzlePiece {...iconAnimation} />,
                          facebook: <FaFacebookF {...iconAnimation} />,
                          instagram: <BsInstagram {...iconAnimation} />,
                          youtube: <AiFillYoutube {...iconAnimation} />
                        }[item.icon]}
                      </span>
                      <span className='px-[13px] text-[10px] text-[#aaa] group-hover:text-blue duration-200'>{item.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className='hidden lg:block cols-span-1'>
              <h3 className='font-oswald text-[22px] font-light mb-[45px]'>O`QITUVCHILARGA</h3>
            </div>
            <div className='hidden lg:block cols-span-1' />
            <div className='hidden lg:block cols-span-1 bg-[url(/world.png)] bg-center bg-no-repeat text-[14px]'>
              <h3 className='font-oswald text-[22px] font-light mb-[45px]'>ALOQA UCHUN</h3>
              <p className='text-[14px] mb-[10] pb-5 border-b border-b-[#ffffff0d]'>
                <MdLocationPin className='inline-block text-[16px] mr-1' />
                <span className='inline align-middle'>Andijon viloyat Andijon shahar Pirmuhamedov ko`cha 1 uy</span>
              </p>
              <div>
                <a
                  href="mailto:admin@andijonvxtb.uz"
                  target="_blank"
                  rel="noreferrer"
                  className='flex items-center my-[13px]'
                >
                  <FaEnvelope className='text-[13px]' />
                  <span className='ml-2'>admin@andijonvxtb.uz</span>
                </a>
                <a
                  href="tel:+998742282669"
                  target="_blank"
                  rel="noreferrer"
                  className='flex items-center my-[13px]'
                >
                  <BsFillTelephoneFill className='text-[12px]' />
                  <span className='ml-2'>998 (74) 228 - 26 - 69</span>
                </a>
              </div>
              <form
                onClick={e => e.preventDefault()}
                className="mt-[30px]"
              >
                <label htmlFor='subscribe-mail' className='mb-[5px] font-bold text-[15px] block'>Habardor bo`lish:</label>
                <div className='flex h-[35px]'>
                  <input
                    type="email"
                    required
                    placeholder='Emailingizni kiritng'
                    id="subscribe-mail"
                    className='bg-[#0B0B0B] px-3 outline-none text-[12px] tex'
                  />
                  <button className='font-bold text-[11px] px-3 h-full bg-blue uppercase text-white'>
                    SEND
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className='bg-black md:bg-transparent lg:py-8 py-5 flex flex-col-reverse lg:flex-row items-center justify-center text-[12px]'>
            {/* <p className='mt-8 lg:mt-0'>© Copyrights <b className='text-blue'>ZIYOLI.UZ</b> 2019 UZCMS</p> */}
            <ul className='flex justify-center flex-wrap'>
              {footer_bottom_links.map((link, i) => (
                <li key={i}>
                  <Link href={link.link}>
                    <a className='mb-[7px] block ml-[5px] border hover:text-white transition duration-300 px-2 py-1'>{link.name}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
