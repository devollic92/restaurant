// importing components - custom layout
import Copyright from "../components/Copyright";
import Footer from "../components/Footer";
import Header from "../components/Header";

const CustomLayout = ({ children }) => {
    return (
        <div>
            <Header />
            { children }
            <Footer />
            <Copyright />
        </div>
    );
}
 
export default CustomLayout;