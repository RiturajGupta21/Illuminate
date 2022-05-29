import Theme from '../styles/theme';
import Head from 'next/head'
import Script from 'next/script'

export default function App({ Component, pageProps }) {
  return (
    <>
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
