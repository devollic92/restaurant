// importing components - default layout
import Copyright from "../components/Copyright";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Slider from "../components/Slider";

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