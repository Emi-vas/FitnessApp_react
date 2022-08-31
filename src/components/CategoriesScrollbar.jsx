import { categories } from '../data/categories';
import { Box } from "@mui/material"
import { useDispatch } from 'react-redux';
import { selectCategorie } from '../redux/actions/categorie.action';

const CategoriesScrollbar = ({ bodyPartSelected, setBodyPartSelected }) => {
    const dispatch = useDispatch()

    return (
        <div>
            {
                categories.map((categorie) => (
                    <Box 
                        key={categorie}
                        itemId={categorie}
                        title={categorie}
                        m="0 40px"

                        onClick={() => dispatch(selectCategorie(categorie))}
                    >
                        {categorie}
                    </Box>
                ))
            }
        </div>
    );
};

export default CategoriesScrollbar;