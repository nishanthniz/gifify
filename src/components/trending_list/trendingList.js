import Skeleton from 'react-loading-skeleton';
import TrendingItem from '../trending_items/trendingItem';
import classes from './trendingList.module.css';

const TrendingList = ({ gifTrendingList,isLoading }) => {
    return (
        <div className={classes.trending__list__container}>
            {isLoading && [...Array(5).keys()].map((s) => <Skeleton width="206px" height="100px" />)}
            {gifTrendingList.map((eachGifData) => !isLoading && <TrendingItem key={eachGifData.id} gifData={eachGifData} />)}
        </div>
    );
};

export default TrendingList;