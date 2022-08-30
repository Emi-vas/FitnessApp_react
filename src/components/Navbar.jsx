import { Link } from "react-router-dom"
import { Stack } from "@mui/material"

import Logo from "../assets/images/Logo.png"

const Navbar = () => {
    return (
        <Stack 
            direction="row"
            justifyContent="space-around"
            sx={{
                gap: {sm: "122px", xs: "40px"},
                mt : {sm: "32px", xs: "12px"},
                px: "20px",
                justifyContent: "flex-start"
            }}
        >
            <Link to="/">
                <img src={Logo} alt="logo" width="48px" height="48px" style={{
                    margin: "0 20px"
                }}/>
            </Link>
            <Stack
                direction="row"
                gap="40px"
                fontSize="1.3em"
                alignItems="flex-end"
            >
                <Link to="/" style={{ borderBottom: "3px solid #a23b3b" }}>Home</Link>               
                <a href="#exercises">Exercicses</a>
            </Stack>
        </Stack>
    );
};

export default Navbar;<h2>Nav</h2>