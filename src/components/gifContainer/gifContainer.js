import { useEffect, useState } from 'react';
import { getGifsData } from '../../services/gif_service';
import classes from './gifContainer.module.css';
import GifList from '../gifList/gifList';

const GifContainer = ({ searchValue }) => {
    let nextKey = "";
    const [gifData, setGifData] = useState([]);

    useEffect(() => {
        window.addEventListener('scroll', infiniteScroll);
        clearValues();
        fetchGifsData();
        scrollToTop();
    }, [searchValue]);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const infiniteScroll = () => {
        if ((window.innerHeight + document.documentElement.scrollTop) === (document.documentElement.offsetHeight)) {
            fetchGifsData();
        }
    }

    const fetchGifsData = () => {
        const apiEndPt = searchValue ? '/search' : '/featured';
        getGifsData(apiEndPt, searchValue, nextKey).then((resp) => {
            nextKey = resp.next;
            setGifData(prevValues => [...prevValues, ...resp.results]);
        });
    };

    const clearValues = () => {
        nextKey = "";
        setGifData([]);
    }

    return (
        <div className={classes.featured__container}>
            <h2>{searchValue ? 'GIFs' : 'Featured GIFs'}</h2>
            <GifList gifDataList={gifData} />
        </div>
    );
};

export default GifContainer;