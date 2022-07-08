import { SymbolWrapper } from 'containers'
import Image from 'next/image'
import React from 'react'

const title = "O`ZBEKISTON RESPUBLIKASINING DAVLAT BAYROG`I";
const text = "Davlat bayrog`i O`zbekiston Respublikasining 1991 yil 18 noyabrdagi 407-XII-sonli «O`zbekiston Respublikasining Davlat bayrog`i to`g`risida»gi Qonuni bilan tasdiqlangan. O`zbekiston Respublikаsining Dаvlаt bаyrog`i O`zbekiston Respublikаsi dаvlаt suverenitetining rаmzidir. O`zbekiston Respublikаsining Dаvlаt bаyrog`i xаlqаro munosаbаtlаrdа O`zbekiston Respublikаsining timsoli bo`lаdi. O`zbekiston Respublikаsining Dаvlаt bаyrog`i — bаyroqning butun uzunligi bo`ylаb o`tgаn to`q moviy rаng, oq rаng vа to`q yashil rаngli uchtа endаn tаrkib topgаn to`g`ri to`rtburchаk shаklidаgi mаtodir.";

export default function Flag() {
  return (
    <SymbolWrapper text={text} title={title}>
      <div className='w-[80%] mx-auto h-[350px] relative'>
        <Image
          src="/flag.png"
          alt={title}
          layout="fill"
        />
      </div>
    </SymbolWrapper>
  )
}
