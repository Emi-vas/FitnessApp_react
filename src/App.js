import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Box } from "@mui/material";
import Home from "./pages/Home";
import Exercise from "./pages/Exercise";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {

  return (
    <>
    <Box sx={{ width: {xl: "1488px"}}} m="auto" >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/exercise/:id" element={<Exercise />} />
          </Routes>
        </BrowserRouter>
    </Box>
    <Footer />
    </>
  );
};

export default App;