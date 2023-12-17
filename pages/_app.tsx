import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Script from 'next/script'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script data-goatcounter="https://sequoiafabrica.goatcounter.com/count"
        async src="//gc.zgo.at/count.js"></Script>
      <Component {...pageProps} />
    </>
  )
}
