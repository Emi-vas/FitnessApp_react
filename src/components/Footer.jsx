import { Box, Stack, Typography } from "@mui/material"
import Logo from "../assets/images/Logo-1.png"
import { colors } from "../utils/constants";


const Footer = () => {
    return (
        <Stack mt="80px" bgcolor={colors.yellow} py="30px" alignItems="center">
            <img src={Logo} alt="" width="200px" heignt="400px" />
        </Stack>
    );
};

export default Footer;