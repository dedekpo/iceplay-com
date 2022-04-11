import React from "react";
import {
  chakra,
  Box,
  Stack,
  Flex,
  useColorModeValue,
  Link,
} from "@chakra-ui/react";

export default function CallToActionMore() {
  return (
    <Flex
      bg={useColorModeValue("#F9FAFB", "gray.600")}
      p={50}
      w="full"
      alignItems="center"
      justifyContent="center"
    >
      <Flex
        justify="center"
        bg={useColorModeValue("white", "gray.800")}
        w="full"
      >
        <Box
          w={{ base: "full", md: "75%", lg: "50%" }}
          px={4}
          py={20}
          textAlign={{ base: "left", md: "center" }}
        >
          <chakra.span
            fontSize={{ base: "3xl", sm: "4xl" }}
            fontWeight="extrabold"
            letterSpacing="tight"
            lineHeight="shorter"
            color={useColorModeValue("gray.900", "gray.100")}
            mb={6}
          >
            <chakra.span display="block">Pra quê dor de cabeça?</chakra.span>
            <chakra.span
              display="block"
              color={useColorModeValue("#4e579c", "gray.500")}
            >
              Deixe que nós cuidamos de todos os detalhes pra você.
            </chakra.span>
          </chakra.span>
          <Stack
            justifyContent={{ base: "left", md: "center" }}
            direction={{ base: "column", sm: "row" }}
            spacing={2}
            mt={2}
          >
            <Box display="inline-flex" rounded="md" shadow="md">
              <Link
                href={`https://api.whatsapp.com/send?phone=5531992322747&text=Ol%C3%A1!%20Gostaria%20de%20contratar%20a%20ICEPlay%20para%20a%20minha%20escola`}
                target='_blank'
                w="full"
                display="inline-flex"
                alignItems="center"
                justifyContent="center"
                px={5}
                py={3}
                mt={3}
                border="solid transparent"
                fontWeight="bold"
                rounded="md"
                color={useColorModeValue("white", "black")}
                bg={useColorModeValue("#4e579c", "white")}
                _hover={{
                  bg: useColorModeValue("brand.700", "white"),
                }}
              >
                Contratar
              </Link>
            </Box>
          </Stack>
        </Box>
      </Flex>
    </Flex>
  );
}