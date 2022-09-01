import { Link } from "react-router-dom";
import {Stack, Typography, Button } from "@mui/material"
import { colors } from "../utils/constants"
import { selectCategorie } from '../redux/actions/categorie.action';
import { useDispatch } from 'react-redux'


const ExerciseCard = ({ exercise }) => {
    const dispatch = useDispatch()

    const handleClickFilter = (e, categorie) => {
        e.preventDefault()
        dispatch(selectCategorie(categorie))
    }

    return (
        <Link className="exercise-card" to={`/exercise/${exercise.id}`} >
            <img src={exercise.gifUrl} alt={exercise.name} loading="lazy"/>
            <Stack direction="row" alignItems="center">
                <Button
                    variant="contained"
                    color="error"
                    sx={{
                        borderRadius: "30px",
                        ml: "17px"
                    }}
                    onClick={(e) => handleClickFilter(e, exercise.bodyPart)}
                >
                    {exercise.bodyPart}
                </Button>
                <Typography ml="15px">
                    {exercise.target}
                </Typography>
            </Stack>
        </Link>
    );
};

export default ExerciseCard;