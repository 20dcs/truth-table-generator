import React from "react";
import { TruthTableHeader } from "./TruthTableHeader";
import { TruthTableRow } from "./TruthTableRow";
import { Table, Thead, Tbody, Tr, Th, Box } from "@chakra-ui/react";

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
    <Box
      mt={4}
      alignSelf="center"
      overflowX="auto"
      minW={{ base: "sm", md: "sm", lg: "lg" }}
      maxW={{ base: "60%", md: "80%", lg: "100%" }}
    >
      <Table
        size="lg"
        fontSize={{ base: "1xl", md: "2xl", lg: "2xl" }}
        colorScheme="teal"
      >
        <Thead>
          <Tr>
            {tableHeaders.map((tableHeader, i) => {
              return <TruthTableHeader key={i} tableHeader={tableHeader} />;
            })}
            <Th
              color={"white"}
              fontSize={{ base: "1xl", md: "2xl", lg: "3xl" }}
            >
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
    </Box>
  );
}

export default TruthTable;
