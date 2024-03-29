// import { Inter } from 'next/font/google'
import './globals.css';
import 'bootstrap/dist/css/bootstrap.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { 
  GoogleAnalytics 
} from '@next/third-parties/google'
import {
  Row,
  Col
} from 'react-bootstrap'
import Container from 'react-bootstrap/Container'
import HeaderMain from './shared/Header';
import FooterMain from './shared/Footer';
import MobileFooterMenu from './shared/Header/Mobile/MobileFooterMenu';
import BodyContainer from './BodyContainer';
import FlatButton from './FlatButton';

// const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Korean Shop Bangladesh - Korean Cosmetics and Skin Care Products.',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.png" sizes="any" />
        <script src="https://unpkg.com/isotope-layout@3/dist/isotope.pkgd.min.js" async ></script>
        <script dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-TZ2KQCGH');`
        }}></script>
        {/* <link
          rel="stylesheet"
          href="https://video-react.github.io/assets/video-react.css"
        /> */}

      </head>
      <body >
        <noscript dangerouslySetInnerHTML={{
          __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TZ2KQCGH"
          height="0" width="0" style="display:none;visibility:hidden"></iframe>`
        }}></noscript>
        {/* <noscript>
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TZ2KQCGH"
          height="0" width="0" style="display:none;visibility:hidden">
          </iframe>
        </noscript> */}

        {/* <FlatButton/> */}
          <BodyContainer>
            {children}
          </BodyContainer>
      </body>
      <GoogleAnalytics gaId="G-FH78GGXT8Z" />
    </html>
  )
}
