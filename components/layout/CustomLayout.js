import Copyright from "../Copyright";
import Footer from "../Footer";
import Header from "../Header";

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