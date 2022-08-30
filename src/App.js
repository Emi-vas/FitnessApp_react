import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Box } from "@mui/material";
import Home from "./pages/Home";
import Exercise from "./pages/Exercise";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
   <Box width="400px">
      <Navbar />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/exercise/:id" element={<Exercise />} />
        </Routes>
      </BrowserRouter>

      <Footer />
   </Box>
  );
};

export default App;