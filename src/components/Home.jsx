import React from "react";
import { Input, Stack } from "@chakra-ui/react";
import TruthTable from "./TruthTable";

function Home() {
  return (
    <Stack spacing={3}>
      <Input
        mx={"auto"}
        mt={16}
        maxW={"100vh"}
        variant="outline"
        placeholder="Outline"
        borderColor="black"
      />
      <TruthTable />
    </Stack>
  );
}

export default Home;
