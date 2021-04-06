// layout persistent library
import { withLayout } from '@moxy/next-layout';

// importing components
import Introduction from './components/Introduction';
import Offer from './components/Offer';
import Reservation from './components/Reservation';

// importing default layout
import DefaultLayout from './layout/DefaultLayout';

const Index = () => {
    return (
        <div className="home">            
            <div className="herbs"></div>
            <Introduction />
            <Offer />
            <Reservation />
        </div>
    );
}

export default withLayout(<DefaultLayout />)(Index);