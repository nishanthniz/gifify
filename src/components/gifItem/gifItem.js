import classes from './gifItem.module.css';

const GifItem = ({ gifUrl, gifDesc }) => {
    return (
        <figure className={classes.featuredItem__container}>
            <img src={gifUrl} alt={gifDesc} />
        </figure>
    );
};

export default GifItem;