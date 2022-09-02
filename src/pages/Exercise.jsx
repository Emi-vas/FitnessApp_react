import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Typography } from "@mui/material";

import { Data } from "../data/data"

import Details from '../components/exercicePage/Details'
import ExerciseVideo from '../components/exercicePage/ExerciseVideos'
import Navbar from "../components/Navbar";

const Exercise = () => {
    const { id } = useParams()
    const [exercise, setExercise] = useState(null)

    useEffect(() => {
        const exe = Data.filter((elem) => elem.id.includes(id))
        setExercise(exe[0])
    }, [])

    if(!exercise) {
        return("loading...")
    }

    return (
        <div>
            <Navbar page="exercise" />
            <Details exercise={exercise} />
            <ExerciseVideo exercise={exercise} />
        </div>
    );
};

export default Exercise;