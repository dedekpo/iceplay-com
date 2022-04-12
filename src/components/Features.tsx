import React from "react";

import {
  chakra,
  Box,
  Flex,
  useColorModeValue,
  Icon,
  SimpleGrid,
  Stack,
  GridItem,
  useMediaQuery,
} from "@chakra-ui/react";
export default function Features() {
  const Feature = (props: any) => {
    return (
      <Flex>
        <Flex shrink={0}>
          <Icon
            boxSize={5}
            mt={1}
            mr={2}
            color={useColorModeValue("brand.500", "brand.300")}
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            ></path>
          </Icon>
        </Flex>
        <Box ml={4}>
          <chakra.dt
            fontSize="lg"
            fontWeight="bold"
            lineHeight="6"
            color={useColorModeValue("black", "gray.100")}
          >
            {props.title}
          </chakra.dt>
          <chakra.dd mt={2} color={useColorModeValue("gray.500", "gray.400")}>
            {props.children}
          </chakra.dd>
        </Box>
      </Flex>
    );
  };

  return (
    
    <Flex
      bg={useColorModeValue("#F9FAFB", "gray.700")}
      p={{ base: 0, sm: 20 }}
      w="auto"
      justifyContent="center"
      alignItems="center"
    >
      <Box
        shadow="xl"
        bg={useColorModeValue("white", "gray.800")}
        px={8}
        py={20}
        mx="auto"
      >
        <SimpleGrid
          alignItems="center"
          columns={{ base: 1, lg: 3 }}
          spacingY={{ base: 10, lg: 32 }}
          spacingX={{ base: 10, lg: 24 }}
        >
          <Box alignSelf="start">
            <chakra.h2
              color="brand.500"
              fontWeight="semibold"
              textTransform="uppercase"
              letterSpacing="wide"
              textAlign={ {base: 'center', md: 'inherit'} }
            >
              Tudo que você precisa
            </chakra.h2>
            <chakra.h2
              mb={3}
              fontSize={{ base: "3xl", md: "4xl" }}
              fontWeight="extrabold"
              textAlign={{ base: "center", sm: "left" }}
              color={useColorModeValue("black", "gray.100")}
              lineHeight="shorter"
            >
              Plataforma Completa
            </chakra.h2>
            <chakra.p
              mb={6}
              fontSize={{ base: "lg", md: "xl" }}
              textAlign={{ base: "center", sm: "left" }}
              color={useColorModeValue("gray.600", "gray.500")}
            >
              Na ICEPlay você tem tudo que precisa para a implementação do Novo Ensino Médio. 
              Chega de burocracia para contratar novos professores, aumento na carga horária presencial e limite de orçamento. Aqui você não tem dor de cabeça. 
            </chakra.p>
          </Box>
          <GridItem colSpan={2}>
            <Stack
              spacing={{ base: 10, md: 0 }}
              display={{ md: "grid" }}
              gridTemplateColumns={{ md: "repeat(2,1fr)" }}
              gridColumnGap={{ md: 8 }}
              gridRowGap={{ md: 10 }}
            >
              <Feature title="Opção de escolha para os alunos">
                O aluno pode escolher o conteúdo que deseja aprender, alinhado ao seu projeto de vida.{" "}
              </Feature>
              <Feature title="Alunos engajados">
                {" "}
                Utilizamos metodologias ativas para tornar o aluno mais engajado no seu aprendizado.
              </Feature>
              <Feature title="Os melhores professores">
                {" "}
                Contamos com professores renomados como o Head de Educação Financeira na XP Investimentos, Fundador do Instituto Brasileiro de Oratória.{" "}
              </Feature>
              <Feature title="Mais matrículas para a escola">
                Como oferecemos os melhores cursos, com a melhor metodologia de ensino, fica muito mais fácil atrair novos talentos para a escola.
              </Feature>
              <Feature title="Cursos modernos">
                {" "}
                Nossos cursos não poderiam ser mais modernos, o aluno pode aprender habilidades STEM, Ciência, Tecnologia, Engenharia e Matemática.
              </Feature>
              <Feature title="Alinhado à BNCC e ao CNE">
                {" "}
                Conteúdo totalmente alinhado e preparado para atender as necessidades da escola.{" "}
              </Feature>
            </Stack>
          </GridItem>
        </SimpleGrid>
      </Box>
    </Flex>
  );
}