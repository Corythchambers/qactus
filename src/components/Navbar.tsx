import React from "react";
import {
  Box,
  Flex,
  Text,
  Stack,
  IconButton,
  Button,
  useDisclosure,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import { BiHappy } from "react-icons/bi";

interface NavItemProps {
  children: React.ReactNode;
  href: string;
}

const NavItem: React.FC<NavItemProps> = ({ children, href }) => {
  const linkColor = useColorModeValue("cactus.700", "cactus.300");
  const linkHoverColor = useColorModeValue("cactus.600", "cactus.200");

  return (
    <Box
      as="a"
      px={3}
      py={2}
      rounded={"full"}
      href={href}
      fontSize={"md"}
      fontWeight={"medium"}
      color={linkColor}
      _hover={{
        textDecoration: "none",
        color: linkHoverColor,
        bg: useColorModeValue("cactus.50", "cactus.800"),
      }}
      transition="all 0.2s"
    >
      {children}
    </Box>
  );
};

const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue("sand.100", "gray.800");
  const borderColor = useColorModeValue("sand.200", "gray.700");

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      zIndex={1000}
      boxShadow="md"
      width="100%"
    >
      <Flex
        bg={bgColor}
        color={useColorModeValue("cactus.700", "white")}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4, md: 8 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={borderColor}
        align={"center"}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>

        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
          <Text
            as={"a"}
            href={"#hero"}
            textAlign={{ base: "center", md: "left" }}
            fontFamily={"heading"}
            fontWeight="bold"
            fontSize="xl"
            color={useColorModeValue("cactus.700", "cactus.300")}
            display="flex"
            alignItems="center"
          >
            <Box as={BiHappy} mr={2} color="cactus.500" fontSize="1.7rem" />
            Cory's Portfolio
          </Text>

          <Flex display={{ base: "none", md: "flex" }} ml={10}>
            <Stack direction={"row"} spacing={4}>
              <NavItem href="#about">About</NavItem>
              <NavItem href="#projects">Projects</NavItem>
              <NavItem href="#blog">Blog</NavItem>
              <NavItem href="#contact">Contact</NavItem>
            </Stack>
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={6}
        >
          <Button onClick={toggleColorMode} variant="ghost" borderRadius="full">
            {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
          </Button>
        </Stack>
      </Flex>

      {/* Mobile menu */}
      <Box
        display={{ base: isOpen ? "block" : "none", md: "none" }}
        bg={bgColor}
        p={4}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={borderColor}
        shadow="md"
      >
        <Stack as={"nav"} spacing={4}>
          <NavItem href="#about">About</NavItem>
          <NavItem href="#projects">Projects</NavItem>
          <NavItem href="#blog">Blog</NavItem>
          <NavItem href="#contact">Contact</NavItem>
        </Stack>
      </Box>
    </Box>
  );
};

export default Navbar;
