import { Box, Flex, Heading, Text, VStack, Link, Image } from "@chakra-ui/react";
import { FaInstagram, FaTwitter, FaFacebookF, FaSpotify } from "react-icons/fa";

const Index = () => {
  return (
    <Box maxW="100%" overflow="hidden">
      <Flex direction="column" align="center" justify="center" bg="brand.900" color="white" p={4}>
        <Heading as="h1" size="2xl" mb={2}>The Rockers</Heading>
        <Text fontSize="lg">Catch us live on tour!</Text>
      </Flex>
      <Flex direction={{ base: "column", md: "row" }} justify="space-around" p={4} bg="gray.100">
        <VStack spacing={4}>
          <Heading as="h2" size="lg">Tour Dates</Heading>
          <Text>Coming to a city near you!</Text>
          {/* Tour dates would be dynamically listed here */}
        </VStack>
        <VStack spacing={4}>
          <Heading as="h2" size="lg">About the Band</Heading>
          <Text>Learn more about our journey and music.</Text>
          {/* Band information would be dynamically listed here */}
        </VStack>
        <VStack spacing={4}>
          <Heading as="h2" size="lg">Media</Heading>
          <Text>Check out our latest tracks and videos!</Text>
          {/* Media links or embedded content would go here */}
        </VStack>
      </Flex>
      <Flex as="footer" p={4} bg="brand.800" color="white" justify="center">
        <Link href="https://instagram.com" isExternal mx={2}><FaInstagram /></Link>
        <Link href="https://twitter.com" isExternal mx={2}><FaTwitter /></Link>
        <Link href="https://facebook.com" isExternal mx={2}><FaFacebookF /></Link>
        <Link href="https://spotify.com" isExternal mx={2}><FaSpotify /></Link>
      </Flex>
    </Box>
  );
};

export default Index;