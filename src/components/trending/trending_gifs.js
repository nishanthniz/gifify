import { useEffect, useState } from 'react';
import { getTrendingGifs } from '../../services/gif_service';
import Carousel from '../carousel/carousel';
import classes from './trending_gifs.module.css';


const TrendingGIFS = () => {
    let incTermCnt = 0;
    const tempTrendingData = [];
    const [trendingTerm, setTrendingTerm] = useState([]);
    const [trendingData, setTrendingData] = useState([]);

    useEffect(() => {
        getTrendingGifs('/trending_terms?&limit=50').then((resp) => {
            document.body.classList.add('loading__indicator');
            setTrendingTerm(resp.results);
        });
    }, []);

    useEffect(() => {
        getThumbnailOfTrending();
    }, [trendingTerm]);

    const getThumbnailOfTrending = () => {
        if (incTermCnt < trendingTerm.length) {
            getTrendingGifs(`/search?q=${trendingTerm[incTermCnt]}&limit=1`).then((resp) => {
                resp.results[0].trendingTerm = trendingTerm[incTermCnt];
                tempTrendingData.push(resp.results[0]);
                incTermCnt++;
                getThumbnailOfTrending();
            });
        } else {
            document.body.classList.remove('loading__indicator');
            setTrendingData(tempTrendingData);
        }
    }

    return (
        <div className={classes.trending__container}>
            <h2>Trending Tenor Searches</h2>
            <Carousel gifTrendingList={trendingData} />
        </div>
    );
};

export default TrendingGIFS;