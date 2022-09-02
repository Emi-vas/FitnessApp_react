
import { useEffect, useState } from "react";
import { youtubeOptions } from "../../utils/fetchData";
import axios from "axios";
import { Box, Stack, Typography } from "@mui/material"
import { colors } from "../../utils/constants";

const ExerciseVideos = ({ exercise }) => {
    const [videosUrl, setVideosUrl] = useState([])

    useEffect(() => {
        const BASE_URL = "https://youtube-v31.p.rapidapi.com"
        axios.get(`${BASE_URL}/search?part=snippet&q=${exercise.name}`, youtubeOptions)
            .then((res) => {
                setVideosUrl(res.data.items.slice(0, 3))
            })
        
    }, [])

    return (
        <Box 
            sx={{
                marginTop: {xs: "20px", lg: "200px"},
                p: "20px"
            }}
        >
            <Typography variant="h4" mb="33px">
                Watch <span style={{ fontWeight: "bold", color: colors.purple, textTransform: "capitalize" }}>{exercise.name}</span> exercise Videos
            </Typography>
            <Stack
                justifyContent="center"
                direction="row"
                flexWrap="wrap"
                alignItems="center"
                sx={{
                    gap: {xs: "0", lg: "110px"}
                }}
            >
                {
                    videosUrl && videosUrl.map((video, index) => (
                        <a href={"https://www.youtube.com/watch?v=" + video.id.videoId} key={index} target="blank" style={{ margin: "10px",  width: "300px"}}>
                            <img 
                                src={video.snippet.thumbnails.high.url} alt="youtube video" 
                                style={{
                                    width: "100%",
                                    height: "170px",
                                    objectFit: "cover",
                                    borderBottomLeftRadius: "30px"
                                }}
                            />
                            <Box>
                                <Typography
                                    maxWidth="100%"
                                    textAlign="center"
                                    color="black"
                                >
                                    {video.snippet.title}
                                </Typography>
                            </Box>
                        </a>
                    ))
                }
            </Stack>
        </Box>
    );
};

export default ExerciseVideos;