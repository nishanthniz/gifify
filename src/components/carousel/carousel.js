import { useEffect, useState } from 'react';
import TrendingList from '../trending_list/trendingList';
import classes from './carousel.module.css';

const Carousel = ({ gifTrendingList }) => {
    const [pageCnt, setPageCnt] = useState(1);
    const [tempTrendingList, setTempTrendingList] = useState([]);

    useEffect(() => {
        console.log(gifTrendingList);
        setTempTrendingList(gifTrendingList.slice(0, 5));
    }, [gifTrendingList])

    useEffect(() => {
        setTempTrendingList(gifTrendingList.slice((pageCnt - 1) * 5, pageCnt * 5));
    }, [pageCnt])

    const splitTrendingList = (direction) => {
        if (direction === 'right' && (gifTrendingList.length > 5 && (pageCnt * 5) < gifTrendingList.length)) {
            setPageCnt(pageCnt + 1);
        }
        if (direction === 'left' && (pageCnt > 1)) {
            setPageCnt(pageCnt - 1);
        }
    }

    return (
        <div className={classes.carousel__container}>
            {pageCnt > 1 ? <div className={`${classes.carousel__arrow} ${classes.left}`} onClick={() => splitTrendingList('left')}>
                <i className="fa fa-chevron-left" aria-hidden="true"></i>
            </div> : null}
            {gifTrendingList.length ? <TrendingList gifTrendingList={tempTrendingList} /> : <h3 className='empty__data'>No Data Available</h3>}
            {!(pageCnt >= (gifTrendingList.length / 5)) ? <div className={`${classes.carousel__arrow} ${classes.right}`} onClick={() => splitTrendingList('right')}>
                <i className="fa fa-chevron-right" aria-hidden="true"></i>
            </div> : null}
        </div>
    );
}

export default Carousel;