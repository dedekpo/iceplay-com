import {
    Container,
    Grid,
    GridItem,
    Flex,
    Box,
    Text,
    Heading,
  } from "@chakra-ui/react";
  
  export default function Statistics() {
    return (
      <Container py={10} mt={10} maxW={"container.lg"}>
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            sm: "repeat(2, 1fr)",
            md: "repeat(4, 1fr)",
          }}
          gap={6}>
          <GridItem w="100%" colSpan={{ base: 1, sm: 2, md: 2 }}>
            <Heading as={"h2"} pt={6}>Qualidade comprovada pelos nossos alunos</Heading>
          </GridItem>
          <GridItem w="100%">
            <Flex flexDirection={"column"}>
              <Text fontSize={"7xl"} fontWeight={"bold"}>
                81%
              </Text>
              <Box fontSize={"sm"}>
                Taxa de aprendizado.
              </Box>
            </Flex>
          </GridItem>
          <GridItem w="100%">
            <Flex flexDirection={"column"}>
              <Text fontSize={"7xl"} fontWeight={"bold"}>
                4,4
              </Text>
              <Box fontSize={"sm"}>
                Avaliação média em 5.
              </Box>
            </Flex>
          </GridItem>
        </Grid>
      </Container>
    );
  }