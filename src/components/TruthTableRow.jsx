import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  Stack,
} from "@chakra-ui/react";

export const TruthTableRow = ({ tableRow, expressionSolution }) => {
  return (
    <Tr>
      {tableRow.map((tableData, i) => {
        return tableData ? (
          <Td color={"green"} key={i}>
            T
          </Td>
        ) : (
          <Td color={"red"} key={i}>
            F
          </Td>
        );
      })}

      {expressionSolution ? (
        <Td color={"green"}>T</Td>
      ) : (
        <Td color={"red"}>F</Td>
      )}
    </Tr>
  );
};
