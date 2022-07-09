import Search from '../../components/search/search';
import classes from './header.module.css';

const Header = () => {
    return (
        <div className={classes.navbar__bg}>
            <div className='container'>
                <div className={classes.navbar__content}>
                    <Search />
                </div>
            </div>
        </div>
    );
}

export default Header;