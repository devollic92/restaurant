// importing components - default layout
import Copyright from "../Copyright";
import Footer from "../Footer";
import Header from "../Header";
import Slider from "../Slider";

const Layout = ({ children }) => {
    return (
        <div>
            <Header />
            <Slider />
            { children }
            <Footer />
            <Copyright />
        </div>
    );
}
 
export default Layout;