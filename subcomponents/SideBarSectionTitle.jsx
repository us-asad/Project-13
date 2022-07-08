import React from 'react'

export default function SideBarSectionTitle({ title1, title2 }) {
  return (
    <h4 className='-ml-1 mb-[20px] py-[12px] px-4 bg-white text-[17px] uppercase font-oswald font-normal lg:shadow-3 shadow-2'>{title1} <span className='text-blue'>{title2}</span></h4>
  );
}
