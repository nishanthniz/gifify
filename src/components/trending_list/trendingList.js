import TrendingItem from '../trending_items/trendingItem';
import classes from './trendingList.module.css';

const TrendingList = ({ gifTrendingList }) => {
    return (
        <div className={classes.trending__list__container}>
            {gifTrendingList.map((eachGifData) => <TrendingItem key={eachGifData.id} gifData={eachGifData} />)}
        </div>
    );
};

export default TrendingList;