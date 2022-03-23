import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Provider from '../store/hoc/Provider'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function MyApp({ Component, pageProps }: AppProps) {
  return <Provider>
    <Component {...pageProps} />
  </Provider>
}

export default MyApp
