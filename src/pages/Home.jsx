import { Box } from "@mui/material"
import Exercises from "../components/Exercises";
import HeroBanner from "../components/HeroBanner";
import Navbar from "../components/Navbar";
import SearchExercises from "../components/SearchExercises";

const Home = () => {
    return (
        <>
        <Navbar page="home" />
        <Box>
            <HeroBanner />
            <SearchExercises />
            <Exercises />
        </Box>
        </>
    );
};

export default Home;