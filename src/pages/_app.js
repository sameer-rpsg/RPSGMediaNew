import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import SmoothScroll from "@/components/SmoothScroll";
import "@/styles/globals.css";
import "@/styles/hero.css"
import "@/styles/home.css"
import "@/styles/advertising.css"
import "@/styles/newsroom.css"

export default function App({ Component, pageProps }) {

  return(

    <>
    <SmoothScroll />
    <Navbar/>
    <Component {...pageProps} />
    <Footer/>
  </>
  )
}
