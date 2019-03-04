
import Document, { Head, Main, NextScript } from 'next/document';

export default class Layout extends Document {

  render() {
    return (
      <html>
        <Head>
        <meta name="robots" content="noindex, nofollow" />

          {/* <link rel="preconnect" href="https://467-kxi-123.mktoresp.com"   crossOrigin="true" />
          <link rel="preconnect" href="https://sjrtp6.marketo.com"   crossOrigin="true" />
          <link rel="preconnect" href="https://m.exactag.com"  crossOrigin="true" />
          <link rel="preconnect" href="https://cdn.segment.com"  crossOrigin="true" />
          <link rel="preconnect" href="https://cdn.optimizely.com"  crossOrigin="true" />
          <link rel="icon" href="https://d3u83zxt44sgkz.cloudfront.net/static/favicon.ico" type="image/x-icon" />
          <meta name="robots" conent="noindex, nofollow" />
          <script src="//cdn.optimizely.com/js/72168671.js" type="text/javascript" />
          <script type="text/javascript" async src="https://cdn.segment.com/analytics.js/v1/1CjnBNPybWzyv10ssZRxdwmb8vrYF4yj/analytics.min.js" />
          <script
            async
            dangerouslySetInnerHTML={{
__html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-PQC59L');`,
 }}
          /> */}
          <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
