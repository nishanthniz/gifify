import GifItem from '../gifItem/gifItem';
import classes from './gifList.module.css';

const GifList = ({ gifDataList }) => {
    return (
        <div className={classes.featured__list__container}>
            {gifDataList.length ? gifDataList.map((eachData) => {
                return <GifItem key={eachData.id} gifUrl={eachData.media_formats.gif.url} gifDesc={eachData.content_description} />
            }) : <h3 className='empty__data'>No Data Available</h3>}
        </div>
    );
};

export default GifList;