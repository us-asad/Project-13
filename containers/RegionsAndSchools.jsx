import { regions } from 'data/main';
import Link from 'next/link'
import { useRouter } from 'next/router';
import React from 'react'

export default function RegionsAndSchools() {
  const router = useRouter();
  const regionId = router.query.region_id;
  const additionalSectionData = regionId ? regions.find(({ id }) => id === +regionId)?.schools : regions;

  return (
    <ol className='px-[20px]'>
      {additionalSectionData?.map(region => (
        <li key={region.id}>
          <Link href={{
            pathname: router.route,
            query: { ...router.query, region_id: region.id }
          }}>
            <a className={`hover:bg-[#ffbb5b0d] hover:border-[#383838] duration-300 flex justify-between text-[12.6px] my-[5px] px-[5px] py-[10px] border-l-[3px] border-[#ffbb5b] ${regionId && "pointer-events-none"}`}>
              <span>{region.name}</span>
              <span className='font-bold py-0.5 px-[5px] bg-[#ffbb5b]'>{region.num}</span>
            </a>
          </Link>
        </li>
      ))}
    </ol>
  )
}
