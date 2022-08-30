import { useState } from 'react';
import { Box, Typography, TextField, Button, Stack } from '@mui/material'

const SearchExercises = () => {
    const [search, setSearch] = useState("")

    const handleSearch = async() => {

    }

    return (
        <Stack alignItems="center" justifyContent="center" p="20px" mt="37px" >
            <Typography
                sx={{
                    fontWeight: "700",
                    fontSize: { lg: "44px", sm: "30px" },
                    textAlign: "center"
                }}
            >
                Awesome Exercices You <br />
                Should Know
            </Typography>

            <Box position="relative" mb="72px" mt="20px">
                <TextField 
                    height="76px"
                    value={search}
                    onChange={(e) => setSearch(e.target.value.toLocaleLowerCase())}
                    //placeholder="Search Exercices"
                    label="Search"
                    type="text"
                    color="error"
                    sx={{
                        input: {
                            fontWeight: "700",
                            border: "none",
                        },
                        width: {xs: "350px", lg: "1170px"},
                        background: "white",
                        borderRadius: "40px",
                    }}
                />

                <Button 
                    //className="search-btn"
                    color="error"
                    variant="contained"
                    sx={{
                        position: "absolute",
                        right: 0,
                        height: "100%",
                        width: {xs: "70px", lg: "175px"},
                        fontSize: {xs: "0.8em", lg: "1em"}
                    }}
                    onClick={handleSearch}
                >Search</Button>
            </Box>
        </Stack>
    );
};

export default SearchExercises;