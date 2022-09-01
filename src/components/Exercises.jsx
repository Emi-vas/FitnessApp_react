import Pagination from "@mui/material/Pagination"
import { Box, Stack, Typography } from "@mui/material"

import { Data } from "../data/data"
import { useSelector } from "react-redux";
import { useEffect } from "react";

const Exercises = () => {
    const allExercices = Data
    let exercisesFilter = useSelector(state => state.listeExercises)
    let categorieFilter = useSelector(state => state.categorieSelected)

    useEffect(() => {
        console.log(categorieFilter)
    }, [categorieFilter])

    return (
        <Box id="exercises"
            mt="50px"
            p="20px"
            sx={{
                mt: {lg: "100px"}
            }}
        >
            <Typography variant="h3" mb="46px">
                Showing Result
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
                    exercisesFilter[0] ?
                        exercisesFilter
                        .filter((exercice) => exercice.bodyPart.includes(categorieFilter) || categorieFilter == "all")
                        .map((exercise, index) => (
                            <p key={index}>{exercise.name}</p>
                        ))
                    :
                        allExercices
                        .filter((exercice) => exercice.bodyPart.includes(categorieFilter) || categorieFilter == "all")
                        .map((exercise, index) => (
                            <p key={index}>{exercise.name}</p>
                        ))
                }
            </Stack>
        </Box>
    );
};

export default Exercises;