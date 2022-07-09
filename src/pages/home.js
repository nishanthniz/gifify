import { useContext } from "react";
import GifContainer from "../components/gifContainer/gifContainer";
import SearchContext from "../store/search_context";
import TrendingGIFS from "../components/trending/trending_gifs";

const Home = () => {
    const { searchValue } = useContext(SearchContext);

    return (
        <div style={{ marginTop: '7.4rem' }}>
            {!searchValue && <TrendingGIFS />}
            <GifContainer searchValue={searchValue} />
        </div>
    );
};

export default Home;