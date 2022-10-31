import '../styles/globals.css'
import Layout from '../components/Layout'
import { GoogleAnalytics } from "nextjs-google-analytics";

function MyApp({ Component, pageProps }) {
  return( 
      <Layout>
        <GoogleAnalytics trackPageViews />
        <Component {...pageProps} />
      </Layout>
    )
}

export default MyApp
