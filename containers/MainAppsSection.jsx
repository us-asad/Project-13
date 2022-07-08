import { apps_1, apps_2 } from 'data/main';
import Image from 'next/image';
import React from 'react'
import { BsLaptop } from 'react-icons/bs';
import { FaAdjust, FaTelegramPlane } from 'react-icons/fa';
import { ImHtmlFive2 } from 'react-icons/im';
import { FiFileText } from "react-icons/fi"
import { RiCss3Fill } from "react-icons/ri";
import { SectionTitle } from 'subcomponents';
import Link from 'next/link';

export default function MainAppsSection() {
  return (
    <section className='hidden lg:block bg-[#f1f1f1] pt-[80px]'>
      <div className='custom-container'>
        <SectionTitle title1="BIZNING" title2="DASTUR" subtitle="BIZNING DASTUR FAOLYATIDAN QISQACHA TUSHUNCHA" />
        <div className='mt-[90px] flex items-center font-oswald uppercase'>
          <div className='mx-[15px] w-1/3 text-end'>
            {apps_1.map((item, i) => (
              <div key={i} className='mb-[50px] flex'>
                <div className='pr-5'>
                  <h4 className='text-[20px]'>{item.title}</h4>
                  <p className='text-[#555] text-[14px]'>{item.subtitle}</p>
                </div>
                <span className='bg-[url(/over2.svg)] rounded-sm text-[20px] min-w-[40px] max-w-[40px] min-h-[40px] max-h-[40px] grid place-content-center bg-blue text-white bg-center bg-cover'>
                  {{
                    adjust: <FaAdjust />,
                    laptop: <BsLaptop />,
                    html: <ImHtmlFive2 />
                  }[item.icon]}
                </span>
              </div>
            ))}
          </div>
          <div className='w-1/3 text-center'>
            <Image
              src="/app.png"
              alt="Biznig Dastur"
              width={312}
              height={548}
            />
          </div>
          <div className='mx-[15px] w-1/3'>
            {apps_2.map((item, i) => (
              <div key={i} className='mb-[50px] flex'>
                <span className='bg-[url(/over2.svg)] rounded-sm text-[20px] min-w-[40px] max-w-[40px] min-h-[40px] max-h-[40px] grid place-content-center bg-blue text-white bg-center bg-cover'>
                  {{
                    file: <FiFileText />,
                    telegram: <FaTelegramPlane />,
                    css: <RiCss3Fill />
                  }[item.icon]}
                </span>
                <div className='pl-5'>
                  <h4 className='text-[20px]'>{item.title}</h4>
                  <p className='text-[#555] text-[14px]'>{item.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
