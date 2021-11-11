import React from "react";
import {
  Box,
  Container,
  Stack,
  Text,
  useColorModeValue,
  Link,
  IconButton,
  useDisclosure,
} from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";

export default function Footer() {
  const { onOpen } = useDisclosure();

  return (
    <Box
      bg={useColorModeValue("gray.200", "gray.800")}
      color={useColorModeValue("gray.800", "gray.200")}
      bottom={0}
      width={"100%"}
      position={"relative"}
    >
      <Container
        as={Stack}
        maxW={"2xl"}
        py={2}
        spacing={2}
        direction={{ base: "column", md: "row" }}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        <Text
          justify={{ base: "center", md: "space-between" }}
          align={{ base: "center", md: "center" }}
        >
          {"Created by "}
          <Link href="https://github.com/kartikp36" isExternal>
            20DCS078
          </Link>
          {" & "}
          <Link href="https://github.com/naitikp2002" isExternal>
            20DCS083
          </Link>
        </Text>
        <Stack direction={"row"} spacing={6}>
          <Link
            href="https://github.com/20dcs/truth-table-generator"
            isExternal
            _hover={{
              textDecoration: "none",
            }}
          >
            <IconButton
              variant="unstyled"
              size="sm"
              isRound
              onClick={onOpen}
              icon={<FaGithub size={32} />}
            />
          </Link>
        </Stack>
      </Container>
    </Box>
  );
}
