
import { useContext } from 'react';
import SearchContext from '../../store/search_context';
import classes from './trendingItem.module.css';

const TrendingItem = ({ gifData }) => {
    const searchCtx = useContext(SearchContext);
    return (
        <div className={classes.trending__item__wrapper} onClick={() => searchCtx.changeSearchValue(gifData.trendingTerm)}>
            <figure className={classes.trending__img}>
                <img src={gifData.media_formats.gif.url} alt="Thumbnail" />
            </figure>
            <div className={classes.trending__term}>{gifData.trendingTerm}</div>
        </div>
    );
};

export default TrendingItem;