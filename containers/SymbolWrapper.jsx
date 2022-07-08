import React from 'react'
import PageWrapper from './PageWrapper'
import parser from "html-react-parser";

export default function SymbolWrapper({ title, children, text }) {
  return (
    <PageWrapper title={title}>
      {children}
      <p className='text-[16px] text-[#333] mt-5 font-mono'>{parser(text)}</p>
    </PageWrapper>
  )
}
