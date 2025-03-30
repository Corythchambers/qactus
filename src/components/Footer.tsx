import React from "react";
import {
  Box,
  Text,
  Container,
  Flex,
  Link,
  useColorModeValue,
  Icon,
} from "@chakra-ui/react";
import { FaGithub, FaTwitter } from "react-icons/fa";
import { BiHappy } from "react-icons/bi";

const Footer = () => {
  const bgColor = useColorModeValue("sand.100", "gray.900");
  const textColor = useColorModeValue("cactus.700", "gray.400");
  const borderColor = useColorModeValue("sand.200", "gray.700");
  const iconColor = useColorModeValue("cactus.500", "cactus.300");
  const currentYear = new Date().getFullYear();

  return (
    <Box
      as="footer"
      bg={bgColor}
      color={textColor}
      py={8}
      borderTopWidth={1}
      borderColor={borderColor}
      position="relative"
      overflow="hidden"
    >
      {/* Decorative cactus */}
      <Box position="absolute" bottom="0" right="5%" opacity={0.05} zIndex={0}>
        <Icon as={BiHappy} w={24} h={24} color="cactus.500" />
      </Box>

      <Container maxW="container.lg" position="relative" zIndex={1}>
        <Flex
          direction={{ base: "column", md: "row" }}
          justify="space-between"
          align="center"
          textAlign={{ base: "center", md: "left" }}
        >
          <Flex align="center">
            <Icon as={BiHappy} mr={2} fontSize="18px" color={iconColor} />
            <Text>
              © {currentYear} Cory's QA Automation Portfolio. All rights
              reserved.
            </Text>
          </Flex>

          <Flex mt={{ base: 4, md: 0 }} gap={4}>
            <Link
              href="https://github.com/your-username"
              isExternal
              color={textColor}
              _hover={{ color: iconColor }}
              aria-label="GitHub Profile"
              transition="all 0.2s"
            >
              <Box as={FaGithub} fontSize="24px" />
            </Link>
            <Link
              href="https://twitter.com/your-handle"
              isExternal
              color={textColor}
              _hover={{ color: iconColor }}
              aria-label="Twitter Profile"
              transition="all 0.2s"
            >
              <Box as={FaTwitter} fontSize="24px" />
            </Link>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default Footer;
