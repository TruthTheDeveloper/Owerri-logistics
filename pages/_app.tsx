import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {Provider} from 'react-redux';
import {store} from '../store';
import {wrapper} from '../store';
// import { faCoffee } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function MyApp({ Component, pageProps }: AppProps) {
  return <Provider store={store}>
    <Component {...pageProps} />
  </Provider>
}

export default wrapper.withRedux(MyApp)
