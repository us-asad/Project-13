import { social } from 'data/main';
import React from 'react';
import { FaEnvelope, FaPhoneAlt, FaFlag, FaTelegramPlane } from "react-icons/fa";
import { GrFacebookOption } from "react-icons/gr";
import { BsInstagram } from "react-icons/bs";
import { AiFillYoutube } from "react-icons/ai";

const listItemClassNames = "flex space-x-1.5 items-center px-[10px] border-l-[1px] h-full border-[#0000000f] hover:bg-[#00000008]";

export default function HeaderTop() {
  return (
    <div className='hidden lg:block bg-blue text-white'>
      <div className='flex justify-between text-[12px] items-center h-10 custom-container'>
        <ul className='flex items-center h-full'>
          <li className={listItemClassNames}>
            <FaEnvelope />
            <b>Email:</b>
            <a
              href="mailto:navbahoritcenter@gmail.com"
              target="_blank"
              rel="noreferrer"
            >navbahoritcenter@gmail.com</a>
          </li>
          <li className={listItemClassNames}>
            <FaPhoneAlt className='text-[12px]' />
            <b>Tel:</b>
            <a
              href="tel:+998742282669"
              target="_blank"
              rel="noreferrer"
            >998 (74) 228 - 26 - 69</a>
          </li>
          <li className={listItemClassNames}>
            <FaFlag />
            <span>uzbek</span>
          </li>
        </ul>
        <ul className='flex items-center h-full text-[19px]'>
          <li className='text-[12px] pr-[10px]'>Biz tarmoqdamiz:</li>
          {social.map(item => (
            <li key={item.icon} className={listItemClassNames}>
              <a
                href="#"
                // target="_blank"
                rel="noreferrer"
              >
                {{
                  facebook: <GrFacebookOption />,
                  telegram: <FaTelegramPlane />,
                  instagram: <BsInstagram />,
                  youtube: <AiFillYoutube />
                }[item.icon]}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
