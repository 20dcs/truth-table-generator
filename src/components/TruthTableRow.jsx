import React from "react";
import {
  Tr,
  Td,
} from "@chakra-ui/react";

export const TruthTableRow = ({ tableRow, expressionSolution }) => {
  return (
    <Tr>
      {tableRow.map((tableData, i) => {
        return tableData ? (
          <Td color={"green.200"} key={i}>
            T
          </Td>
        ) : (
          <Td color={"blue.200"} key={i}>
            F
          </Td>
        );
      })}

      {expressionSolution ? (
        <Td textAlign="center" color={"green.100"}>
          T
        </Td>
      ) : (
        <Td textAlign="center" color={"blue.100"}>
          F
        </Td>
      )}
    </Tr>
  );
};
