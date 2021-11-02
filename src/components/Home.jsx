import React, { useState } from "react";
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
  const [expression, setExpression] = useState();
  const [expressionArray, setExpressionArray] = useState([]);

  const handleChange = (event) => {
    setExpression(event.target.value);
  };
  const generateTable = () => {
    const temp = expression.split(" ");
    setExpressionArray(temp);
    console.log(expressionArray);
    if (expressionArray.length < 3) {
      console.error("Invalid expression");
    }
    switch (expressionArray[1]) {
      case "and":
        console.log("and");
        break;
      case "or":
        console.log("or");
        break;
      case "implies":
        console.log("implies");
        break;
      case "<=>":
        console.log("double implies");
        break;
      default:
        console.error(`Invalid operation`);
    }
  };

  return (
    <Stack spacing={3} alignItems="center">
      <Text
        m={4}
        bgGradient="linear(to-br, #c31432, #421166)"
        bgClip="text"
        fontSize="6xl"
        fontWeight="extrabold"
      >
        Truth Table Generator
      </Text>
      <InputGroup maxW={"100vh"} size="md">
        <Input
          value={expression}
          onChange={handleChange}
          variant="filled"
          placeholder="Enter boolean operations"
          colorScheme="white"
        />
        <InputRightElement width="5.0rem">
          <Button bgColor="teal.300" size="md" onClick={() => generateTable()}>
            Submit
          </Button>
        </InputRightElement>
      </InputGroup>
      {expressionArray.length > 2 ? (
        <TruthTable expressionArray={expressionArray} />
      ) : null}
    </Stack>
  );
}

export default Home;
