import { Footer, Header, MainAppsSection, MainLinksSection, MainPostsSection, MainSlider } from 'containers';
import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Working Well</title>
      </Head>
      <Header />
      <MainSlider />
      <MainPostsSection />
      <MainAppsSection />
      <MainLinksSection />
      <Footer />
    </div>
  )
}
