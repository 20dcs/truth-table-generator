import React from "react";
import Home from "./components/Home";
import { Box } from "@chakra-ui/react";

function App() {
  return (
    <Box
      minH={"100vh"}
      className="App"
      bgGradient="linear(to top right, #80D0C7, #0093E9)"
    >
      <Home />
    </Box>
  );
}

export default App;
