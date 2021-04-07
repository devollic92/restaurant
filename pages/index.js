import Head from 'next/head';
import { withLayout } from '@moxy/next-layout';
import Introduction from '../components/Introduction';
import Offer from '../components/Offer';
import Reservation from '../components/Reservation';
import DefaultLayout from '../components/layout/DefaultLayout';

const Index = () => {
    return (
        <>
        <Head>
            <title>Indian Lounge | Indian Restaurant &amp; Takeaway in Kings Cross, London</title>           
            <meta name="description" content="Best Indian Restaurant &amp; Takeaway in Kings Cross, London. Order authentic Indian food, covering Clerkenwell, Finsbury, Islington, Euston and nearby areas."></meta>
        </Head>
        <div className="home">            
            <div className="herbs"></div>
            <Introduction />
            <Offer />
            <Reservation />
        </div>
        </>    
    );
}

export default withLayout(<DefaultLayout />)(Index);