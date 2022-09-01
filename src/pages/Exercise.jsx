import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Typography } from "@mui/material";

import { Data } from "../data/data"

import Details from '../components/exercicePage/Details'
import ExerciseVideo from '../components/exercicePage/ExerciseVideos'
import SimilarExercises from '../components/exercicePage/SimilarExercises'

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
            <h1>{exercise.name}</h1>
            <Details />
            <ExerciseVideo />
            <SimilarExercises />
        </div>
    );
};

export default Exercise;