import '../styles/globals.css'
import dynamic from 'next/dynamic';
const Layout = dynamic(() => import('../components/Layout'))
import Script from 'next/script';

function MyApp({ Component, pageProps }) {
  return( 
      <Layout>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-T1T5JR1FCF"
          strategy="worker"
        />
        <Script id="google-analytics" strategy="worker">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-T1T5JR1FCF');
          `}
        </Script>
        <Component {...pageProps} />
      </Layout>
    )
}

export default MyApp
