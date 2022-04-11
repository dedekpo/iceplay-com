import {
    Box,
    chakra,
    Flex,
    SimpleGrid,
    Stat,
    StatLabel,
    StatNumber,
    useColorModeValue,
  } from '@chakra-ui/react';
  import { ReactNode } from 'react';
  import { BsPerson } from 'react-icons/bs';
  import { TiMediaFastForwardOutline } from 'react-icons/ti';
  import { FaPhotoVideo } from 'react-icons/fa';
  
  interface StatsCardProps {
    title: string;
    stat: string;
    icon: ReactNode;
  }
  function StatsCard(props: StatsCardProps) {
    const { title, stat, icon } = props;
    return (
      <Stat
        px={{ base: 2, md: 4 }}
        py={'5'}
        shadow={'xl'}
        border={'1px solid'}
        borderColor={useColorModeValue('gray.800', 'gray.500')}
        rounded={'lg'}>
        <Flex justifyContent={'space-between'}>
          <Box pl={{ base: 2, md: 4 }}>
            <StatLabel fontWeight={'medium'} isTruncated>
              {title}
            </StatLabel>
            <StatNumber fontSize={'2xl'} fontWeight={'medium'}>
              {stat}
            </StatNumber>
          </Box>
          <Box
            my={'auto'}
            color={useColorModeValue('gray.800', 'gray.200')}
            alignContent={'center'}>
            {icon}
          </Box>
        </Flex>
      </Stat>
    );
  }
  
  export default function Expansion() {
    return (
      <Box maxW="7xl" mx={'auto'} py={5} px={{ base: 2, sm: 12, md: 17 }} my={10}>
        <chakra.h1
          textAlign={'center'}
          fontSize={'4xl'}
          py={10}
          fontWeight={'extrabold'}
          bgClip="text"
          bgGradient="linear(to-r, purple.500, green.400)"
        >
          Estamos crescendo a cada dia, venha fazer parte dessa inovação!
        </chakra.h1>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
          <StatsCard
            title={'Professores'}
            stat={'20'}
            icon={<BsPerson size={'3em'} />}
          />
          <StatsCard
            title={'Conteúdo'}
            stat={'360 horas'}
            icon={<TiMediaFastForwardOutline size={'3em'} />}
          />
          <StatsCard
            title={'Cursos'}
            stat={'10'}
            icon={<FaPhotoVideo size={'3em'} />}
          />
        </SimpleGrid>
      </Box>
    );
  }