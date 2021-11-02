import React from "react";
import {
  Input,
  Stack,
  Text,
  Button,
  InputRightElement,
  InputGroup,
} from "@chakra-ui/react";
import TruthTable from "./TruthTable";

function Home() {
  return (
    <Stack spacing={3} alignItems="center">
      <Text
        m={4}
        bgGradient="linear(to-r, #FF3CAC, #FFFF00)"
        bgClip="text"
        fontSize="6xl"
        fontWeight="extrabold"
      >
        Truth Table Generator
      </Text>
      <InputGroup maxW={"100vh"} size="md">
        <Input
          // mt={16}
          variant="filled"
          placeholder="Enter boolean operations"
          colorScheme="white"
        />
        <InputRightElement width="5.0rem">
          <Button bgColor="teal.300" size="md">
            Submit
          </Button>
        </InputRightElement>
      </InputGroup>

      <TruthTable />
    </Stack>
  );
}

export default Home;
