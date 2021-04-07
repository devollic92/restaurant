import Head from 'next/head';

import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import DefaultLayout from '../components/layout/DefaultLayout';

import { LayoutTree } from '@moxy/next-layout';

const App = ({ Component, pageProps }) => (
  <>
    <Head>
      <link rel="shortcut icon" href="/favicon.ico" />
    </Head>
    <LayoutTree
      Component={ Component }
      pageProps={ pageProps }
      defaultLayout={ <DefaultLayout /> } 
    />
  </>  
);

export default App;




