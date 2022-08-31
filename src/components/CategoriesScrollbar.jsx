import { categories } from '../data/categories';
import { Box, Stack, Typography } from "@mui/material"
import { useDispatch } from 'react-redux';
import { useSelector } from "react-redux"
import { selectCategorie } from '../redux/actions/categorie.action';

import Icon from "../assets/icons/gym.png"
import { colors } from '../utils/constants';

const CategoriesScrollbar = () => {
    const dispatch = useDispatch()
    const selectedCategorie = useSelector(state => state.categorieSelected)

    const styleCategorie = {
        backgroundColor: "#fff",
        borderBottomLeftRadius: "20px",
        width: "140px",
        height: "120px",
        cursor: "pointer",
        gap: "47px"
    }

    return (
        <Stack
            direction="row"
            sx={{
                overflowX: {xs: "scroll", sm: "hidden"},
                padding: "10px 0",
                flexWrap: {xs: "no-wrap", sm:"wrap"},
                justifyContent: {xs: "flex-start", sm: "center"}
            }}
        >
            {
                categories.map((categorie) => (
                    <Box 
                        key={categorie}
                        itemID={categorie}
                        title={categorie}
                        m="20px"
                        onClick={() => dispatch(selectCategorie(categorie))}
                    >
                        <Stack
                            type="button"
                            alignItems='center'
                            justifyContent="center"
                            className='bodyPart-card'
                            sx={
                                selectedCategorie === categorie ? {
                                    border: `1px solid ${colors.purple}`,
                                    borderTop: `4px solid #ff2625`,
                                    ...styleCategorie
                                }
                                    
                                : styleCategorie
                            }
                        >
                            <img src={Icon} alt="dumbbell" style={{ width: "30px", height: "30px" }} />
                            <Typography position="absolute" bottom={0} color={colors.purple} fontWeight={600} textTransform="capitalize"
                            >
                                {categorie}
                            </Typography>
                        </Stack>
                    </Box>
                ))
            }
            
        </Stack>
    );
};

export default CategoriesScrollbar;