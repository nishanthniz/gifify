import Header from "./headers/header";
import classes from "./layout.module.css"

const Layout = ({ children }) => {
    return (
        <div>
            <Header />
            <main className={`container ${classes.page__spacing}`}>{children}</main>
        </div>
    );
};

export default Layout;