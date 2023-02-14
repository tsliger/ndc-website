import '../styles/globals.css'
import dynamic from 'next/dynamic';
import { GoogleAnalytics } from "nextjs-google-analytics";
import {
  RecoilRoot
} from 'recoil';
const Layout = dynamic(() => import('../components/Layout'))

function MyApp({ Component, pageProps }) {
  return( 
    <>
      <GoogleAnalytics strategy="afterInteractive" />
      <RecoilRoot>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </RecoilRoot>
    </>
    )
}

export default MyApp
