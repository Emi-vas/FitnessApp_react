
import { useEffect } from "react";
import { fetchData, youtubeOptions } from "../../utils/fetchData";

const ExerciseVideos = () => {

    useEffect(() => {
        const fetchVideoExercises = async () => {
            const baseUrl = "https://youtube-search-and-download.p.rapidapi.com"
           // const videos = await fetchData(`${baseUrl}`, youtubeOptions)
        }

        fetchVideoExercises()
    }, [])

    return (
        <div>
            Video
        </div>
    );
};

export default ExerciseVideos;