import {  SymbolWrapper } from 'containers';
import React from 'react';

const title = "O`ZBEKISTON RESPUBLIKASINING DAVLAT MADHIYASI";
const text = `
  O'zbekiston Respublikasi Davlat madhiyasining matni va musiqasi O'zbekiston Respublikasining 1992 yil 10 dekabrdagi 768-XII-sonli «O'zbekiston Respublikasining Davlat madhiyasi to'g'risida»gi Qonuni bilan tasdiqlangan.<br/>
  O'zbekiston Respublikasining Davlat madhiyasi O'zbekiston Respublikasi Davlat suverenitetining ramzidir.<br/>
  O'zbekiston Respublikasining Davlat madhiyasiga zo'r ehtirom bilan qarash O'zbekiston Respublikasi har bir fuqarosining vatanparvarlik burchidir.<br/><br/>

  Mutal Burhonov musiqasi<br/>
  Abdulla Oripov so'zi<br/><br/><br/>


  Serquyosh hur o'lkam, elga baxt, najot,<br/>
  Sen o'zing do 'stlarga yo'ldosh, mehribon!<br/>
  Yashnagay to abad ilmu fan, ijod,<br/>
  Shuhrating porlasin toki bor jahon!<br/><br/>

  Naqarot:<br/>
  Oltin bu vodiylar - jon O'zbekiston,<br/>
  Ajdodlar mardona ruhi senga yor!<br/>
  Ulug' xalq qudrati jo'sh urgan zamon,<br/>
  Olamni mahliyo aylagan diyor!<br/><br/>

  Bag'ri keng o'zbekning o'chmas iymoni,<br/>
  Erkin, yosh avlodlar senga zo'r qanot!<br/>
  Istiqlol mash'ali tinchlik posboni,<br/>
  Xaqsevar, ona yurt, mangu bo'l obod!<br/><br/><br/>

  Naqarot:<br/>
  Oltin bu vodiylar - jon O'zbekiston,<br/>
  Ajdodlar mardona ruhi senga yor!<br/>
  Ulug' xalq qudrati jo'sh urgan zamon,<br/>
  Olamni mahliyo aylagan diyor!<br/><br/>
`;

export default function Hymn() {
  return (
    <SymbolWrapper text={text} title={title}>
      <div className='iframe-container'>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/rdOw_VSXbU4"
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </SymbolWrapper>
  );
}
