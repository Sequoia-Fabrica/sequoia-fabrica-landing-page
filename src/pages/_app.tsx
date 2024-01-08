import Footer from '@/src/components/Footer/Footer'
import '@/src/styles/globals.css'
import type { AppProps } from 'next/app'
import Script from 'next/script'
import NavigationBar from '../components/NavigationBar/NavigationBar'

export default function App({ Component, pageProps }: AppProps) {
  return (
      <div className="flex flex-col min-h-screen">
      <Script data-goatcounter="https://sequoiafabrica.goatcounter.com/count"
        async src="//gc.zgo.at/count.js"></Script>
      <NavigationBar />
      <main className='flex-grow'>
      <Component {...pageProps} />
      </main>
      <Footer />
      </div>
  )
}
