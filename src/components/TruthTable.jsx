import React from "react";
import { TruthTableHeader } from "./TruthTableHeader";
import { TruthTableRow } from "./TruthTableRow";
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

function TruthTable({
  tableHeaders,
  tableRows,
  expression,
  expressionSolutions,
}) {
  const rowLength = [];
  for (let i = 0; i < Math.pow(2, tableHeaders.length); ++i) {
    rowLength.push("F");
  }

  return (
    <Stack mt={4}>
      <Table
        size="lg"
        fontSize={{ base: "2xl", md: "2xl", lg: "2xl" }}
        colorScheme="teal"
        alignSelf="center"
      >
        <Thead>
          <Tr>
            {tableHeaders.map((tableHeader, i) => {
              return <TruthTableHeader key={i} tableHeader={tableHeader} />;
            })}
            <Th fontSize={{ base: "2xl", md: "2xl", lg: "3xl" }}>
              {expression}
            </Th>
          </Tr>
        </Thead>

        <Tbody>
          {tableRows.map((tableRow, i) => {
            return (
              <TruthTableRow
                key={i}
                tableRow={tableRow}
                expressionSolution={expressionSolutions[i]}
              />
            );
          })}
        </Tbody>
      </Table>
    </Stack>
  );
}

export default TruthTable;
