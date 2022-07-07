import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide'
import { slider_imgs } from 'data/main'
import Image from 'next/image'
import React, { useRef, useState } from 'react'
import { FaFlask, FaGraduationCap, FaUser, FaUsers } from 'react-icons/fa';
import { GoChevronRight } from 'react-icons/go';

const arrowClassNames = `text-white text-[20px] top-[80%] p-[6px] bg-blue duration-200 hover:!opacity-100 !opacity-30`

export default function MainSlider() {
  const [activeIdx, setActiveIdx] = useState(0);
  const splideRef = useRef(null);

  return (
    <div className='hidden lg:block relative mb-[75px]'>
      <Splide onMove={e => setActiveIdx(e.index)} ref={splideRef} hasTrack={false} options={{ pagination: false }}>
        <div className={`splide__arrows splide__arrows--ltr`}>
          <button
            className={`splide__arrow splide__arrow--prev left-[3%] ${arrowClassNames}`}
            type="button"
            aria-label="Previous slide"
            aria-controls="splide01-track"
          >
            <GoChevronRight className='!fill-white' />
          </button>
          <button
            className={`splide__arrow splide__arrow--next right-[3% ${arrowClassNames}]`}
            type="button"
            aria-label="Next slide"
            aria-controls="splide1-track"
          >
            <GoChevronRight className='!fill-white' />
          </button>
        </div>
        <SplideTrack>
          {slider_imgs.map(item => (
            <SplideSlide key={item.image}>
              <div className='w-full relative' style={{ height: "65vh" }}>
                <Image
                  src={item.image}
                  alt={item.name}
                  layout="fill"
                  objectFit='fill'
                />
              </div>
            </SplideSlide>
          ))}
        </SplideTrack>
      </Splide>
      <ul className="absolute bottom-[20px] w-full justify-center flex space-x-[-1px]">
        {slider_imgs?.map((item, i) => (
          <li
            key={item.image}
            onClick={() => splideRef.current?.go(i)}
          >
            <button
              className={`px-[40px] py-[15px]  border-2 border-white ${activeIdx === i ? "text-black bg-white " : "text-white bg-blue hover:bg-[#3bb4ff]"}`}
              type="button"
            >
              {{
                people: <FaUsers className='mx-auto w-full text-[42px]' />,
                student: <FaGraduationCap className='mx-auto w-full text-[42px]' />,
                person: <FaUser className='mx-auto w-full text-[42px]' />,
                chemistry: <FaFlask className='mx-auto w-full text-[42px]' />
              }[item.icon]}
              <span className='font-serif mt-2 block'>{item.name}</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
