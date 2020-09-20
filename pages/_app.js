import '../styles/globals.css';
import { ApolloProvider } from '@apollo/react-hooks';
// import withData from '../util/apollo-client';
import { Provider } from 'react-redux'
import { useStore } from '../store'

const MyApp = ({ Component, pageProps, apollo }) => {
  const store = useStore(pageProps.initialReduxState)
  return (

    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
