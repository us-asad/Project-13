import React from 'react'
import { PageTitle, SideBarSectionTitle } from 'subcomponents'
import { SideBar, RegionsAndSchools } from 'containers'

export default function PageWrapper({ children, title, showRegions }) {
  return (
    <section className='grid grid-cols-4 custom-container'>
      <div className='col-span-4 lg:col-span-3 lg:px-[15px] px-1 pt-[20px]'>
        <PageTitle title={title} />
        {children}
      </div>
      <div className='col-span-4 lg:col-span-1'>
        <SideBar>
          {showRegions && (
            <>
              <SideBarSectionTitle title1="Bo'limlar" title2="bo'yicha" />
              <RegionsAndSchools />
            </>
          )}
        </SideBar>
      </div>
    </section>
  )
}
