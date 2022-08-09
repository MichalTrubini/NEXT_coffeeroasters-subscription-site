import '../styles/globals.css';
import '../styles/normalize.css';
import '../styles/css/home.css';
import '../styles/css/steps.css';
import '../styles/css/button.css';
import '../styles/css/hero.css';
import '../styles/css/header.css';
import '../styles/css/footer.css';
import '../styles/css/about.css';
import '../styles/css/subscription.css';
import '../styles/css/orderSummary.css';
import '../styles/css/mobileMenu.css';

import { Provider } from 'react-redux';
import store from '../store';

function MyApp({ Component, pageProps }) {
  return (
  <Provider store={store}>
    <Component {...pageProps} />
  </Provider>
  )
}

export default MyApp
