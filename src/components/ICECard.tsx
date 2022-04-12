import React from "react";
import {
  chakra,
  Box,
  useColorModeValue,
  Stack,
  Image,
  Flex,
} from "@chakra-ui/react";

const ICECard = () => {
  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      bg={useColorModeValue("#4e579c", "black")}
      px={8}
      py={24}
      mx="auto"
    >
      <Box
        w={{ base: "full", md: 11 / 12, xl: 9 / 12 }}
        mx="auto"
        pr={{ md: 20 }}
      >
        <chakra.h2
          fontSize={{ base: "3xl", sm: "4xl" }}
          fontWeight="extrabold"
          lineHeight="shorter"
          color={useColorModeValue("white", "gray.100")}
          mb={6}
        >
          <chakra.span display="block">Onde entramos?</chakra.span>
          <chakra.span
            display="block"
            color={useColorModeValue("white", "gray.500")}
          >
            Facilitamos a implementação na escola.
          </chakra.span>
        </chakra.h2>
        <chakra.p
          mb={6}
          fontSize={{ base: "lg", md: "xl" }}
          color={useColorModeValue("gray.100", "gray.300")}
        >
          Disponibilizamos uma plataforma completa com cursos modernos que integram a carga horária do Novo Ensino Médio, tudo de forma remota,
          dispensando a necessidade da contratação de novos professores, aumento de carga horária presencial e possibilitando o aluno aprender os assuntos que mais o interessa.
          <br/>Tudo isso oferecendo uma economia de até 50% para a escola!
        </chakra.p>
        <Stack
          direction={{ base: "column", sm: "row" }}
          mb={{ base: 4, md: 8 }}
          spacing={2}
        >
          <Box display="inline-flex" rounded="md" shadow="md">
            <chakra.a
              href={`https://api.whatsapp.com/send?phone=5531992322747&text=Ol%C3%A1!%20Gostaria%20de%20contratar%20a%20ICEPlay%20para%20a%20minha%20escola`}
              target="_blank"
              display="inline-flex"
              alignItems="center"
              justifyContent="center"
              px={5}
              py={3}
              border="solid transparent"
              fontWeight="bold"
              w="full"
              rounded="md"
              color={useColorModeValue("#4e579c", "black")}
              bg={useColorModeValue("white", "brand.500")}
              _hover={{
                bg: useColorModeValue("brand.700", "brand.600"),
              }}
            >
              Quero contratar!
            </chakra.a>
          </Box>
        </Stack>
      </Box>
      <Box w={{ base: "full", md: 10 / 12 }} mx="auto" textAlign="center">
        <video autoPlay loop muted>
          <source src="videosite.mp4" type='video/mp4'/>
        </video>
      </Box>
    </Flex>
  );
};

export default ICECard;