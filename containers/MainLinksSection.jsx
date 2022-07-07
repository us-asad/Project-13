import { links } from 'data/main'
import Image from 'next/image'
import React from 'react'
import { SectionTitle } from 'subcomponents'

export default function MainLinksSection() {
  return (
    <section className='hidden lg:block py-20 custom-container'>
      <SectionTitle title1="HA" title2="Volalar" noTitleSpace subtitle="O`zbekiston Respublikasi hukumat portali" />
      <ul className='flex'>
        {links.map(link => (
          <li key={link.url} className="m-[10px] p-[10px] bg-[#e8e1e1] border-2 border-[#b9b6b6] text-center">
            <Image
              src={link.image}
              alt={link.name}
              width={56}
              height={58}
            />
            <a
              href={link.url}
              target="_blank"
              rel="noreferrer"
              className='block text-[14px] hover:text-blue duration-200'
            >{link.name}</a>
          </li>
        ))}
      </ul>
    </section>
  )
}
