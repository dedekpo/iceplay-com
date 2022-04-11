import React from "react";
import {
  chakra,
  Box,
  Flex,
  useColorModeValue,
  Stack,
  Link,
} from "@chakra-ui/react";

export default function CallToAction() {
  return (
    <Flex
      bgGradient={useColorModeValue("#F9FAFB", "linear(to-b, gray.800, gray.900)")}
      p={50}
      w="full"
      alignItems="center"
      justifyContent="center"
    >
      <Box bg={useColorModeValue("gray.50", "gray.800")}>
        <Box
          maxW="7xl"
          w={{ md: "3xl", lg: "4xl" }}
          mx="auto"
          py={{ base: 12, lg: 16 }}
          px={{ base: 4, lg: 8 }}
          display={{ lg: "flex" }}
          alignItems={{ lg: "center" }}
          justifyContent={{ lg: "space-between" }}
        >
          <chakra.h2
            fontSize={{ base: "3xl", sm: "4xl" }}
            fontWeight="extrabold"
            letterSpacing="tight"
            lineHeight="shorter"
            color={useColorModeValue("gray.900", "gray.100")}
          >
            <chakra.span display="block">Gostou né?</chakra.span>
            <chakra.span
              display="block"
              color={useColorModeValue("brand.600", "gray.500")}
            >
              Embarque nessa jornada hoje.
            </chakra.span>
          </chakra.h2>
          <Stack
            direction={{ base: "column", sm: "row" }}
            mt={{ base: 8, lg: 0 }}
            shrink={{ lg: 0 }}
          >
            <Link
              href={`https://api.whatsapp.com/send?phone=5531992322747&text=Ol%C3%A1!%20Gostaria%20de%20contratar%20a%20ICEPlay%20para%20a%20minha%20escola`}
              target='_blank'
              w={["full", , "auto"]}
              display="inline-flex"
              alignItems="center"
              justifyContent="center"
              px={5}
              py={3}
              border="solid transparent"
              fontWeight="bold"
              rounded="md"
              shadow="md"
              color={useColorModeValue("white", 'black')}
              bg={useColorModeValue('#4e579c', 'white')} 
              _hover={{
                bg: useColorModeValue("brand.700", "brand.600"),
              }}
            >
              Contrate
            </Link>
            <Link
              href='/saiba-mais'
              w={["full", , "auto"]}
              display="inline-flex"
              alignItems="center"
              justifyContent="center"
              px={5}
              py={3}
              border="solid transparent"
              fontWeight="bold"
              rounded="md"
              shadow="md"
              color="brand.600"
              bg={useColorModeValue('white', 'gray.700')} 
              _hover={{
                bg: "brand.50",
              }}
            >
              Saiba mais
            </Link>
          </Stack>
        </Box>
      </Box>
    </Flex>
  );
}