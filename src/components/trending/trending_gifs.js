import { useEffect, useState } from 'react';
import { getTrendingGifs } from '../../services/gif_service';
import Carousel from '../carousel/carousel';
import classes from './trending_gifs.module.css';


const TrendingGIFS = () => {
    let incTermCnt = 0;
    const tempTrendingData = [];
    const [trendingTerm, setTrendingTerm] = useState([]);
    const [trendingData, setTrendingData] = useState([]);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        
        getTrendingGifs('/trending_terms?&limit=50').then((resp) => {
            setTrendingTerm(resp.results);
        }).catch((err) => {
            setLoading(false)
        });
    }, []);

    useEffect(() => {
        if(trendingTerm.length) {
            getThumbnailOfTrending();
        }
    }, [trendingTerm]);

    const getThumbnailOfTrending = () => {
        if (incTermCnt < trendingTerm.length) {
            getTrendingGifs(`/search?q=${trendingTerm[incTermCnt]}&limit=1`).then((resp) => {
                resp.results[0].trendingTerm = trendingTerm[incTermCnt];
                tempTrendingData.push(resp.results[0]);
                incTermCnt++;
                getThumbnailOfTrending();
            }).catch((err) => {
               setLoading(false)
            });
        } else {
            setLoading(false)
            setTrendingData(tempTrendingData);
        }
    }

    return (
        <div className={classes.trending__container}>
            <h2>Trending Tenor Searches</h2>
            <Carousel isLoading={isLoading} gifTrendingList={trendingData} />
        </div>
    );
};

export default TrendingGIFS;