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

export const TruthTableHeader = ({ tableHeader }) => {
  return (
    <Th fontSize={{ base: "2xl", md: "2xl", lg: "3xl" }}>{tableHeader}</Th>
  );
};
