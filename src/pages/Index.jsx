import { Container, Text, VStack, Input, Button, SimpleGrid, Box, IconButton } from "@chakra-ui/react";
import { FaPen } from "react-icons/fa";

const categories = [
  "Todo",
  "Personal website",
  "Notes",
  "Band website",
  "Chat",
  "Dashboard",
  "Blog",
  "SaaS"
];

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center" bg="black" color="white">
      <VStack spacing={4} width="100%">
        <Text fontSize="3xl" fontWeight="bold">What do you want to build?</Text>
        <Box width="100%" position="relative">
          <Input placeholder="e.g., A personal blog about my life" size="lg" bg="gray.800" border="none" borderRadius="md" paddingLeft="3rem" />
          <IconButton
            aria-label="Pen icon"
            icon={<FaPen />}
            size="lg"
            position="absolute"
            left="1rem"
            top="50%"
            transform="translateY(-50%)"
            bg="transparent"
            color="gray.500"
            _hover={{ bg: "transparent", color: "white" }}
          />
        </Box>
        <SimpleGrid columns={[2, null, 4]} spacing={4} width="100%">
          {categories.map((category) => (
            <Button key={category} size="lg" bg="gray.800" borderRadius="md" _hover={{ bg: "gray.700" }}>
              {category}
            </Button>
          ))}
        </SimpleGrid>
        <Button size="lg" bg="white" color="black" borderRadius="md" _hover={{ bg: "gray.200" }}>
          Create
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;