import { Box, Typography, Stack, Button } from "@mui/material"
import { colors } from "../utils/constants";

import HeroBannerImage from "../assets/images/banner.png"

const HeroBanner = () => {
    return (
        <Box 
            sx={{
                mt: {lg: "212px", xs: "70px"},
                ml: {sm: "50px"}
            }}
            //position="relative"
            p="20px"
        >
            <Typography color={colors.purple} fontSize="1.3em">
                Fitness Club
            </Typography>
            <Typography 
                fontWeight={700} 
                my={3}
                sx={{
                    fontSize: {lg: "3em", sm:"2.7em", xs: "1.9em"}
                }}
            >
                Sweat, Smile <br /> and Reapeat
            </Typography>
            <Typography my="20px">
                Check out the most effective exercises
            </Typography>

            <Button
                variant="contained"
                color="error"
                href="#exercises"
            >Explore Exercices</Button>

            <Typography
                fontWeight={600}
                color={colors.purple}
                fontSize="8em"
                sx={{
                    opacity: "0.1",
                    display: {xs: "none", md: "block"}
                }}
            >
                Exercices
            </Typography>

            <img src={HeroBannerImage} alt="banner" className="hero-banner-img" />
        </Box>
    );
};

export default HeroBanner;