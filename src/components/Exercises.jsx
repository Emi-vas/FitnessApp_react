import Pagination from "@mui/material/Pagination"
import { Box, Stack, Typography } from "@mui/material"

import { Data } from "../data/data"
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import ExerciseCard from "./ExerciseCard";

const Exercises = () => {
    const allExercices = Data
    let exercisesFilter = useSelector(state => state.listeExercises)
    let categorieFilter = useSelector(state => state.categorieSelected)

    //Tab with the exercices filter by search and filter
    const [showExercises, setShowExercises] = useState([])

    //Pagination
    const [currentPage, setcurrentPage] = useState(1)
    const exercisesPerPage = 9
    const indexOfLastExercise = currentPage * exercisesPerPage
    const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage
    const currentExercises = showExercises.slice(indexOfFirstExercise, indexOfLastExercise)

    const paginate = (e, value) => {
        setcurrentPage(value)

        //go to exercises section
        document.getElementById("exercises").scrollIntoView({behavior: 'smooth'}, true);
    }
    //--- end Pagination

    useEffect(() => {
        let tempTab = []
        if(exercisesFilter[0]){
            tempTab = exercisesFilter.filter((exercice) => exercice.bodyPart.includes(categorieFilter) || categorieFilter == "all")
        } else {
            tempTab = allExercices.filter((exercice) => exercice.bodyPart.includes(categorieFilter) || categorieFilter == "all")
        }

        setcurrentPage(1)
        setShowExercises(tempTab)
    }, [categorieFilter, exercisesFilter])

    return (
        <Box id="exercises"
            mt="50px"
            p="20px"
            sx={{
                mt: {lg: "100px"}
            }}
        >
            <Typography variant="h3" mb="46px">
                Showing Result ({showExercises.length})
            </Typography>
            <Stack
                direction="row"
                flexWrap="wrap"
                justifyContent="center"
                sx={{
                    gap: {xs: "50px", lg: "100px"}
                }}
            >
                {
                    currentExercises ?
                    currentExercises
                        .map((exercise, index) => (
                            <ExerciseCard exercise={exercise} key={index} />
                        ))
                    : 
                    <Typography variant="h5">
                        No Result
                    </Typography>
                }
            </Stack>
            <Stack mt="70px" alignItems="center">
                <Pagination
                    color="standard"
                    shape="rounded"
                    count={Math.ceil(showExercises.length / exercisesPerPage)}
                    page={currentPage}
                    onChange={paginate}
                    size="large"
                />
            </Stack>
        </Box>
    );
};

export default Exercises;