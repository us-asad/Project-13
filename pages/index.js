import { Header } from 'containers';
import Head from 'next/head'

export default function Home() {
  return (
    <div className='custom-container mx-auto'>
      <Head>
        <title>Working Well</title>
      </Head>
      <Header />
    </div>
  )
}
