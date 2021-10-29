import React from "react";
import Home from "./components/Home";
import { Box } from "@chakra-ui/react";

function App() {
  return (
    <Box minH={"100vh"} minW={"100vh"} className="App" bg={"cyan.100"}>
      <Home />
    </Box>
  );
}

export default App;
