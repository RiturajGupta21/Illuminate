import Theme from '../styles/theme';
import Head from 'next/head'
import Script from 'next/script'

export default function App({ Component, pageProps }) {
  return (
    <>

      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=G-X66YG1J8HQ`}
      />

      <Script strategy="lazyOnload">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-X66YG1J8HQ', {
              page_path: window.location.pathname,
            });
        `}
      </Script>

      <Head>
        <title>Illuminate -By CODEX</title>
      </Head>
      <Script src='./analytics.js' strategy="lazyOnload"></Script>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </>
  );
}
