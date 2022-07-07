import '@splidejs/react-splide/css';
import 'styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <main className='overflow-x-hidden'>
      <Component {...pageProps} />
    </main>
  )
}

export default MyApp
