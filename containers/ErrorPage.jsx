import { PageWrapper } from 'containers'
import Link from 'next/link'
import React from 'react'

export default function ErrorPage({ error_code, text }) {
  return (
    <PageWrapper title="Kechirasiz">
      <div className='w-[80%] mx-auto text-[#666] text-center'>
        <h1 className='border-b-2 border-[#666] text-[150px] mb-5'>{error_code}</h1>
        <p className='text-[36px]'>{text}</p>
        <Link href="/">
          <a className='px-5 py-2 bg-blue text-white hover:bg-[#2295dc] duration-200 mx-auto inline-block mt-5'>
            Bosh sahifaga qaytish
          </a>
        </Link>
      </div>
    </PageWrapper>
  )
}
