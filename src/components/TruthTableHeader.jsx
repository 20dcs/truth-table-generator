import React from "react";
import { Th } from "@chakra-ui/react";

export const TruthTableHeader = ({ tableHeader }) => {
  return (
    <Th color={"white"} fontSize={{ base: "1xl", md: "2xl", lg: "3xl" }}>
      {tableHeader}
    </Th>
  );
};
