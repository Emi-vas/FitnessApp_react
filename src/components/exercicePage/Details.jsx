import { Stack, Button, Typography, Box} from "@mui/material"

import BodyPartImage from "../../assets/icons/body-part.png"
import TargetImage from "../../assets/icons/target.png"
import EquipmentImage from "../../assets/icons/equipment.png"

import { colors } from "../../utils/constants"
import { margin } from "@mui/system"

const Details = ({ exercise }) => {

    const extraDetail = [
        {
            icon: BodyPartImage,
            name: exercise.name
        },
        {
            icon: TargetImage,
            name: exercise.target
        },
        {
            icon: EquipmentImage,
            name: exercise.equipment
        }
    ]

    return (
        <Stack
            gap="60px"
            sx={{
                flexDirection: {lg: "row"},
                p: "20px",
                alignItems: "center"
            }}
        >
            <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" className="detail-image" />
            <Stack sx={{ gap: {lg: "35px", xs: "20px"} }}>
                <Typography variant="h3">
                    {exercise.name}
                </Typography>
                <Typography fontSize="1.1em">
                    Exercises keep you strong. {exercise.name} is one of the best exercises to target your {exercise.target}. It will help you improve your mood and gain energy
                </Typography>
                {
                    extraDetail.map((elem) => (
                        <Stack key={elem.name} direction="row" gap="24px" alignItems="center">
                            <Box
                                sx={{
                                    borderRadius: "50%",
                                    p: "20px",
                                    background: colors.yellow,
                                    justifyContent: "center",
                                    alignItems: "center"
                                }}
                            >
                                <img src={elem.icon} alt="icon" style={{ width: "50px" }}/>
                            </Box>
                            <Typography variant="h6" textTransform="capitalize" color="#5b5b5b" ml="10px">
                                {elem.name}
                            </Typography>
                        </Stack>
                    ))
                }
            </Stack>
        </Stack>
    );
};

export default Details;