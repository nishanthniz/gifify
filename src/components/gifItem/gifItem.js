import { useState } from 'react';
import classes from './gifItem.module.css';
import Skeleton from 'react-loading-skeleton';

const GifItem = ({ gifUrl, gifDesc }) => {
    const [isLoading, setLoading] = useState(true);

    const onLoad = () => {
        setLoading(false)
    }
    return (
        <figure className={classes.featuredItem__container}>
            <img src={gifUrl} alt={gifDesc}  onLoad={onLoad} style={{ display: isLoading ? "none" : "block" }} />
            <div style={{ display: isLoading ? "block" : "none" }}>
                <Skeleton width="270px" height="420px"/>
            </div>
        </figure>
    );
};

export default GifItem;