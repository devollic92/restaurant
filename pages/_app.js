import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import DefaultLayout from './layout/DefaultLayout';

import { LayoutTree } from '@moxy/next-layout';

const App = ({ Component, pageProps }) => (
  <LayoutTree
    Component={ Component }
    pageProps={ pageProps }
    defaultLayout={ <DefaultLayout /> } 
  />
);

export default App;




