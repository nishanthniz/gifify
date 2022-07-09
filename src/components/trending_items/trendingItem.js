
import { useContext, useState } from 'react';
import SearchContext from '../../store/search_context';
import classes from './trendingItem.module.css';
import Skeleton from 'react-loading-skeleton';


const TrendingItem = ({ gifData }) => {
    const searchCtx = useContext(SearchContext);
    const [isLoading, setLoading] = useState(true);

    const onLoad = () => {
        setLoading(false);
    }


    return (
        <div className={classes.trending__item__wrapper} onClick={() => searchCtx.changeSearchValue(gifData.trendingTerm)}>
            <figure className={classes.trending__img}>
            <img src={gifData.media_formats.gif.url} alt="Thumbnail" onLoad={onLoad} style={{ display: isLoading ? "none" : "block" }} />
            <div style={{ display: isLoading ? "block" : "none" }}>
                <Skeleton width="206px" height="100px" />
            </div>
            
            </figure>
            <div className={classes.trending__term}>{gifData.trendingTerm}</div>
        </div>
    );
};

export default TrendingItem;