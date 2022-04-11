import { ReactNode } from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Container,
  Avatar,
  Image,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";

const Testimonial = ({ children }: { children: ReactNode }) => {
  return <Box>{children}</Box>;
};

const TestimonialContent = ({ children }: { children: ReactNode }) => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      boxShadow={"lg"}
      p={8}
      rounded={"xl"}
      align={"center"}
      pos={"relative"}
      _after={{
        content: `""`,
        w: 0,
        h: 0,
        borderLeft: "solid transparent",
        borderLeftWidth: 16,
        borderRight: "solid transparent",
        borderRightWidth: 16,
        borderTop: "solid",
        borderTopWidth: 16,
        borderTopColor: useColorModeValue("white", "gray.800"),
        pos: "absolute",
        bottom: "-16px",
        left: "50%",
        transform: "translateX(-50%)",
      }}>
      {children}
    </Stack>
  );
};

const TestimonialHeading = ({ children }: { children: ReactNode }) => {
  return (
    <Heading as={"h3"} fontSize={"2xl"}>
      {children}
    </Heading>
  );
};

const TestimonialText = ({ children }: { children: ReactNode }) => {
  return (
    <Text
      textAlign={"center"}
      color={useColorModeValue("gray.600", "gray.400")}
      fontSize={"lg"}>
      {children}
    </Text>
  );
};

export default function WithSpeechBubbles() {
  return (
    <Box bg={useColorModeValue("#F9FAFB", "gray.700")} py={10}>
      <Container maxW={"7xl"} py={16} as={Stack} spacing={12}>
        <Stack spacing={0} align={"center"}>
          <Heading>ICEPlay na mídia</Heading>
          <Text pt={2}>Não paramos de fazer história transformando o Ensino Médio, e também, a educação brasileira. Confira o que os maiores canais de comunicação estão falando sobre a gente.</Text>
        </Stack>
        <Stack
          direction={{ base: "column", md: "row" }}
          spacing={{ base: 10, md: 4, lg: 10 }}>
          <Box
            as="a"
            href="https://www.em.com.br/app/noticia/educacao/2022/03/04/internas_educacao,1350069/professor-de-mg-cria-plataforma-para-ajudar-a-formar-alunos-do-ensino-medio.shtml"
            target="_blank"
          >
            <VStack>
              <Testimonial>
                <TestimonialContent>
                  <TestimonialHeading>Inovação</TestimonialHeading>
                  <TestimonialText>
                    &quot;Professor de MG cria plataforma para ajudar a formar alunos do ensino médio&quot;
                  </TestimonialText>
                </TestimonialContent>
              </Testimonial>
              <Image
                pt={5}
                h="80px"
                src={useColorModeValue("estado_de_minas.png", "estado_de_minas_branco.png")}
                alt="Estado de Minas"
              />
            </VStack>
          </Box>
          <Box
            as="a"
            href="https://startups.com.br/alem-da-faria-lima/alem-da-faria-lima-ice-play-facilita-adocao-do-novo-ensino-medio-nas-escolas-do-pais/"
            target="_blank"
          >
            <VStack>
              <Testimonial>
                <TestimonialContent>
                  <TestimonialHeading>Criatividade</TestimonialHeading>
                  <TestimonialText>
                    &quot;Além da Faria Lima: ICE Play facilita adoção do Novo Ensino Médio nas escolas do país&quot;
                  </TestimonialText>
                </TestimonialContent>
              </Testimonial>
              <Image
                alignSelf="center"
                pt={5}
                h="90px"
                src={useColorModeValue("startups.png", "startups_branco.png")}
                alt="Startups"
              />
            </VStack>
          </Box>
          <Box
            as="a"
            href="https://diariodocomercio.com.br/negocios/plataforma-ice-play-reduz-custos-da-escola-em-25/"
            target="_blank"
          >
            <VStack>
              <Testimonial>
                <TestimonialContent>
                  <TestimonialHeading>Empreendedorismo</TestimonialHeading>
                  <TestimonialText>
                    &quot;Plataforma Ice Play reduz custos da escola em 25%&quot;
                  </TestimonialText>
                </TestimonialContent>
              </Testimonial>
              <Image
                alignSelf="center"
                pt={5}
                h="92px"
                src="diario_do_comercio.png"
                alt="Diário do Comércio"
              />
            </VStack>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}