import { useLoaderData } from "react-router-dom";
import FollowUs from "../Components/Home/FollowUs";
import Hero from "../Components/Home/Hero";
import Quality from "../Components/Home/Quality";
import Products from "../Components/Home/Products";


const Home = () => {
    const coffes = useLoaderData();
    return (
        <div>
            <Hero/>
            <Quality/>
            <Products loadedCoffe={coffes}/>
            <FollowUs/>
        </div>
    );
};

export default Home;