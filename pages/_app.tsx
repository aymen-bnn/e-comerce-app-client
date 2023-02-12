import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {TopNavBar , NavBar } from "../components/index"
import {AuthContextProvider} from "../context/authContext"

export default function App({ Component, pageProps }: AppProps) {
  return (
  <>

    <AuthContextProvider>
    {/* //topnav bar */}
      <TopNavBar/>
      {/* //navbar */}
      <NavBar/>
      <Component {...pageProps} />
    </AuthContextProvider>
  </>
  )
}
