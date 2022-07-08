import React from 'react'
import { CategoryBox } from 'subcomponents'
import { PageWrapper } from 'containers';

export default function CategoryWrapper({ categories, boxLink }) {
  return (
    <PageWrapper title="yuklamalar" showRegions>
      <ul className='flex flex-wrap justify-center lg:justify-start'>
        {categories?.map((category, i) => (
          <li key={i}>
            <CategoryBox {...category} boxLink={boxLink} />
          </li>
        ))}
      </ul>
    </PageWrapper>
  )
}
