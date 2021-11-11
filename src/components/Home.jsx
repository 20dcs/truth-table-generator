import React, { useState, useEffect } from "react";
import {
  Input,
  Stack,
  Text,
  UnorderedList,
  ListItem,
  Divider,
  IconButton,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { FaInfoCircle } from "react-icons/fa";
import TruthTable from "./TruthTable";
import { permute, remove, parse, replaceHTML } from "../components/helper";
import { ErrorMessage } from "./ErrorMessage";

function Home() {
  const [value, setValue] = useState("");
  const [emptyValue, setEmptyValue] = useState();
  const [invalidValue, setInvalidValue] = useState();
  const [tableHeaders, setTableHeaders] = useState([]);
  const [tableRows, setTableRows] = useState([]);
  const [expressionSolutions, setExpressionSolutions] = useState([]);
  const [errorObject, setErrorObject] = useState({
    error: "1",
    value: "1",
    index: -1,
  });

  const onValueChange = (e) => {
    let htmlValue = e.target.value;
    htmlValue = replaceHTML(htmlValue);
    setValue(htmlValue);
    e.target.value = htmlValue;
  };
  useEffect(() => {
    if (value.length === 0) {
      setEmptyValue(false);
      return;
    }
    setEmptyValue(true);
    try {
      if (/(∧|∨|¬)$|^(∧|∨|¬)/g.test(value)) {
        console.error("The operator is missing an operand.");
      }

      if (/[/|]/g.test(value)) {
        console.error("The character | shouldn't be here.");
      }

      if (/[&]/g.test(value)) {
        console.error("The character & shouldn't be here.");
      }
    } catch (e) {
      if (e === "The operator is missing an operand.") {
        const index = value.search(/(∧|∨|¬)$|^(∧|∨|¬)/g);
        setErrorObject({ error: e, value: value, index: index });
      } else if (e === "The character | shouldn't be here.") {
        setErrorObject({ error: e, value: value, index: value.indexOf("|") });
      } else if (e === "The character & shouldn't be here.") {
        setErrorObject({ error: e, value: value, index: value.indexOf("&") });
      }
      setInvalidValue(true);
      return;
    }

    let operandArray = [];
    let operand = "";
    for (const c of value) {
      if (c === "|" || c === "&" || c === "¬" || c === "(" || c === ")") {
        // pass;
      } else if (c === "∨" || c === "∧") {
        operand = "";
      } else {
        operand += c;

        if (operand.length > 1) {
          operandArray.pop();
        }

        if (operandArray.includes(operand)) {
          operandArray.push("");
        } else {
          operandArray.push(operand);
        }
      }
    }

    operandArray = remove(operandArray, "");
    const tableRows = permute(operandArray.length);

    const expressionSolutionArray = [];
    for (const boolArray of tableRows) {
      let boolStr;
      let bool;
      let evalString = value;

      evalString = evalString.replaceAll("∨", "||");
      evalString = evalString.replaceAll("∧", "&&");
      evalString = evalString.replaceAll("¬", "!");

      for (let i = 0; i < operandArray.length; ++i) {
        bool = boolArray[i];
        if (bool) {
          boolStr = "1";
        } else {
          boolStr = "0";
        }
        evalString = evalString.replaceAll(
          new RegExp("\\b" + operandArray[i] + "\\b", "g"),
          boolStr
        );
      }
      try {
        if (/[^10|&!()]/.test(evalString)) {
          throw SyntaxError;
        }
        const expression = parse(evalString);
        if (expression === 1 || expression) {
          expressionSolutionArray.push(true);
        } else if (expression === 0 || expression) {
          expressionSolutionArray.push(false);
        }
        setInvalidValue(false);
      } catch (e) {
        setErrorObject({ error: "Invalid syntax.", value: value, index: -1 });
        setInvalidValue(true);
      }
    }
    setTableHeaders(operandArray);
    setTableRows(tableRows);
    setExpressionSolutions(expressionSolutionArray);
  }, [value]);

  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Stack spacing={3} alignItems="center">
      <Text
        m={4}
        bgGradient="linear(to-r, #80D0C7, #0093E9)"
        bgClip="text"
        fontSize={{ base: "4xl", md: "4xl", lg: "6xl" }}
        fontWeight="extrabold"
      >
        Truth Table Generator
      </Text>

      <Stack display="inline" isInline>
        <Input
          isInvalid={invalidValue}
          width={{ base: "1xl", md: "4xl", lg: "6xl" }}
          value={value}
          onChange={onValueChange}
          variant="filled"
          fontSize={{ base: "large", md: "large", lg: "larger" }}
          size="lg"
          placeholder="Enter boolean operations"
          colorScheme="white"
        />

        <IconButton
          size={"sm"}
          variant="unstyled"
          isRound
          onClick={onOpen}
          icon={<FaInfoCircle size={32} color="white" />}
        />

        <Modal
          colorScheme={"gray"}
          isCentered
          onClose={onClose}
          isOpen={isOpen}
          motionPreset="slideInBottom"
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader fontSize={"24"}>Instructions</ModalHeader>
            <Divider width={"90%"} alignSelf="center" />
            <ModalCloseButton />
            <ModalBody fontSize={"20"}>
              This app generates a Truth Table for logical or boolean
              expressions. <br />
              For example, the formula p∧q could be written as p∨q. Enter an
              expression in the input box to get started. Valid operators:
              <UnorderedList>
                <ListItem>And: && </ListItem>
                <ListItem>Or: || </ListItem>
                <ListItem>Negation: !</ListItem>
              </UnorderedList>
            </ModalBody>
          </ModalContent>
        </Modal>
      </Stack>

      {!emptyValue ? (
        ""
      ) : invalidValue ? (
        <ErrorMessage errorObject={errorObject} />
      ) : (
        <Stack className="truth-table-container" maxW="-webkit-fill-available">
          <TruthTable
            tableHeaders={tableHeaders}
            tableRows={tableRows}
            expression={value}
            expressionSolutions={expressionSolutions}
          />
        </Stack>
      )}
    </Stack>
  );
}

export default Home;
