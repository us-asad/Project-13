import '@splidejs/react-splide/css';
import { Footer, Header } from 'containers';
import Head from 'next/head';
import 'styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <main className='overflow-x-hidden'>
      <Head>
        <title>Working Well</title>
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </main>
  )
}

export default MyApp
