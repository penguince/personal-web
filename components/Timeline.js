import { Box, Flex, Text, VStack, useColorModeValue } from '@chakra-ui/react';
import { useState, useEffect } from 'react';

const timelineData = [
  {
    year: "2005",
    title: "Born",
    description: "Born in Brooklyn, New York.",
    color: "orange.400"
  },
  {
    year: "2023",
    title: "High School Graduation",
    description: "Graduated from Curtis High School International Baccalaureate Program.",
    color: "red.400"
  },
  {
    year: "2024",
    title: "Software Engineering Fellow",
    description: "Software Engineering Fellow at Headstarter AI.",
    color: "green.400"
  },
  {
    year: "2027",
    title: "College Graduation",
    description: "Expected to graduate with a degree in Computer Science.",
    color: "blue.400"
  },
];

const TimelineItem = ({ year, title, description, color, position }) => {
  const borderColor = useColorModeValue('gray.200', 'gray.700');
  const bgColor = useColorModeValue('white', 'gray.800');
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById(`timeline-item-${year}`);
      if (element) {
        const itemPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (itemPosition < windowHeight - 100) {
          setVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on mount

    return () => window.removeEventListener('scroll', handleScroll);
  }, [year]);

  return (
    <Flex
      id={`timeline-item-${year}`}
      direction="column"
      alignItems={position === 'left' ? 'flex-start' : 'flex-end'}
      mb={10}
      position="relative"
      width="100%"
      opacity={visible ? 1 : 0}
      transform={visible ? 'translateX(0)' : 'translateX(50%)'}
      transition="all 0.6s ease-out"
    >
      <Flex
        direction={position === 'left' ? 'row' : 'row-reverse'}
        alignItems="center"
        mb={4}
        width="100%"
      >
        <Box
          w={4}
          h={4}
          bg={color}
          borderRadius="full"
          boxShadow="md"
          position="relative"
          zIndex={1}
        />
        <Box
          ml={position === 'left' ? 4 : 0}
          mr={position === 'right' ? 4 : 0}
          width={{ base: 'full', md: '80%' }}
        >
          <Box
            bg={bgColor}
            p={4}
            borderRadius="md"
            textAlign="center"
            boxShadow="md"
            borderWidth="1px"
            borderColor={borderColor}
          >
            <Text fontWeight="bold" fontSize={{ base: 'md', md: 'lg' }}>{year}</Text>
            <Text fontWeight="bold" fontSize={{ base: 'sm', md: 'md' }} mb={2}>{title}</Text>
            <Text fontSize={{ base: 'sm', md: 'md' }}>{description}</Text>
          </Box>
        </Box>
      </Flex>
    </Flex>
  );
};

const Timeline = () => {
  const borderColor = useColorModeValue('black', 'gray.700');
  
  return (
    <Box position="relative" px={4}>
      <Box
        w="2px"
        h="full"
        bg={borderColor}
        position="absolute"
        left="50%"
        transform="translateX(-50%)"
        zIndex={0}
      />
      <VStack spacing={0} position="relative" zIndex={1}>
        {timelineData.map((item, index) => (
          <TimelineItem
            key={index}
            year={item.year}
            title={item.title}
            description={item.description}
            color={item.color}
            position={index % 2 === 0 ? 'left' : 'right'}
          />
        ))}
      </VStack>
    </Box>
  );
};

export default Timeline;
