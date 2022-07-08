import { PageWrapper, RegionsAndSchools } from 'containers'
import { regions } from 'data/main';
import { useRouter } from 'next/router';
import React from 'react'

export default function Region() {
  const router = useRouter()
  const regionId = router.query.region_id;
  const title = regionId ? `${regions.find(({ id }) => id === +regionId).name} maktablari` : "TUMANLAR";

  return (
    <PageWrapper title={title}>
      <RegionsAndSchools />
    </PageWrapper>
  )
}
