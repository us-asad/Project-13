import React from 'react'

export default function SectionTitle({title1, title2, subtitle, noTitleSpace}) {
  return (
    <div className='my-[30px] hidden lg:flex flex-col items-center'>
      <h3 className='text-[30px] font-oswald mb-[20px] text-[#333] uppercase'>{title1} <span className={`text-blue ${noTitleSpace && "-ml-2"}`}>{title2}</span></h3>
      <p className='text-[15px] font-medium  text-[#555]'>{subtitle}</p>
    </div>
  )
}
