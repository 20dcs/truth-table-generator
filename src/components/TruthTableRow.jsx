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
        return tableData ? <Td key={i}>T</Td> : <Td key={i}>F</Td>;
      })}

      {expressionSolution ? <Td>T</Td> : <Td>F</Td>}
    </Tr>
  );
};
