import Head from 'next/head';
import ScrollToTop from "react-scroll-to-top";
import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import DefaultLayout from '../components/layout/DefaultLayout';

import { LayoutTree } from '@moxy/next-layout';

const App = ({ Component, pageProps }) => (
  <>
    <Head>
      <link rel="shortcut icon" href="/favicon.ico" />
    </Head>
    <ScrollToTop smooth style={{ background: '#fff', right: '25px', bottom: '25px', boxShadow: 'none', width: '30px', height: '30px', borderRadius: '2px' }} svgPath="M260.485,160.384L135.686,19.409c-2.42-2.73-6.331-2.736-8.757-0.011L1.33,160.389   c-2.426,2.73-1.441,4.928,2.203,4.928h79.144v72.546c0,3.644,2.953,6.587,6.592,6.587h83.267c3.639,0,6.592-2.948,6.592-6.587   v-72.546h79.138C261.91,165.317,262.906,163.114,260.485,160.384z" color="#7E017D" />
    <LayoutTree
      Component={ Component }
      pageProps={ pageProps }
      defaultLayout={ <DefaultLayout /> } 
    />
  </>  
);

export default App;




