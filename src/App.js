import React from "react";
import Home from "./components/Home";
import { Box } from "@chakra-ui/react";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Box
        minH={"100vh"}
        className="App"
        bgGradient="linear(to bottom right, #904e95, #e96443)"
      >
        <Home />
      </Box>
      <Footer />
    </>
  );
}

export default App;
