import React from "react";
import {
  chakra,
  Box,
  Flex,
  useColorModeValue,
  Icon,
  Stack,
} from "@chakra-ui/react";

export default function EnsinoMedio() {
  const Feature = (props: any) => {
    return (
      <Flex>
        <Flex shrink={0}>
          <Flex
            alignItems="center"
            justifyContent="center"
            h={12}
            w={12}
            rounded="md"
            bg={useColorModeValue("#4e579c", "black")}
            color="white"
          >
            <Icon
              boxSize={6}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              {props.icon}
            </Icon>
          </Flex>
        </Flex>
        <Box ml={4}>
          <chakra.dt
            fontSize="lg"
            fontWeight="medium"
            lineHeight="6"
            color={useColorModeValue("gray.900", "gray.100")}
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
      bgGradient={useColorModeValue("linear(to-b, white, #F9FAFB)", "gray.600")}
      p={20}
      w="auto"
      justifyContent="center"
      alignItems="center"
    > 
      <Box py={12} bg={useColorModeValue("white", "gray.700")} rounded="xl" shadow={'lg'}>
        <Box maxW="7xl" mx="auto" px={{ base: 4, lg: 8 }}>
          <Box textAlign={{ lg: "center" }}>
            <chakra.h2
              color={useColorModeValue("brand.600", "gray.100")}
              fontWeight="semibold"
              textTransform="uppercase"
              letterSpacing="wide"
            >
              Saiba mais
            </chakra.h2>
            <chakra.p
              mt={2}
              fontSize={{ base: "3xl", sm: "4xl" }}
              lineHeight="8"
              fontWeight="extrabold"
              letterSpacing="tight"
              color={useColorModeValue("gray.900", "gray.100")}
            >
              O que muda no Novo Ensino Médio
            </chakra.p>
            <chakra.p
              mt={4}
              maxW="2xl"
              fontSize="xl"
              mx={{ lg: "auto" }}
              color={useColorModeValue("gray.500", "gray.400")}
            >
              Anunciada em 2017 a reformulação do Ensino Médio é um novo modelo de ensino nas escolas públicas e particulares de todo o país.
              Confira as mudanças.
            </chakra.p>
          </Box>

          <Box mt={10}>
            <Stack
              spacing={{ base: 10, md: 0 }}
              display={{ md: "grid" }}
              gridTemplateColumns={{ md: "repeat(3,1fr)" }}
              gridColumnGap={{ md: 8 }}
              gridRowGap={{ md: 10 }}
            >
              <Feature
                title="Carga horária"
                icon={
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                  />
                }
              >
                Haverá um aumento de 25% na carga horária dos alunos, sendo 60% do currículo para as matérias tradicionais e 40% para os itinerários formativos.
              </Feature>

              <Feature
                title="Conteúdos"
                icon={
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                  />
                }
              >
                Também, haverá uma mudança nos itinerários formativos com a adição de novos conteúdos. Os chamados "STEM" (Ciência, Tecnologia, Engenharia e Matemática)
              </Feature>

              <Feature
                title="Escolha do aluno"
                icon={
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                }
              >
                Estudantes podem escolher caminhos de formação distintos e adequados aos seus projetos de vida, além de poder optar por uma formação técnica profissional.
              </Feature>
              
            </Stack>
          </Box>
        </Box>
      </Box>
    </Flex>
  );
}