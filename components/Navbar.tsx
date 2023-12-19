import NextLink from "next/link";
import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue,
} from "@chakra-ui/react";
import DarkToggle from "./DarkToggle";

interface LinkItemProps {
  href:string,
  path: unknown,
  children: React.ReactNode,
}

interface NavbarProps {
  path: string
}

const LinkItem = ({ href, path, children }:LinkItemProps) => {
  const active = path === href;
  const inactiveColor = useColorModeValue("gray200", "whiteAlpha.900");
  return (
    <NextLink href={href}>
      <Link
        p={2}
        bg={active ? "grassteal" : undefined}
        color={active ? "teal.300" : inactiveColor}
        href={href}
      >
        {children}
      </Link>
    </NextLink>
  );
};

const Navbar = (props:NavbarProps) => {
  const { path } = props;
  return (
    <Box
      position="relative" // todo check postion
      w="100%"
      bg={useColorModeValue("gray.200", 'gray.800')}
      zIndex={1}
      {...props}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.md"
        justifyContent="right"
      >
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={"tight"}>
            <Link href="/">Kenneth Lee</Link>
          </Heading>
        </Flex>
        <Stack direction="row" flexGrow={1} justify="flex-end">
          <LinkItem href="/works" path={path}>
            Works
          </LinkItem>
          <LinkItem href="https://github.com/Leeoku" path={path}>
            Github
          </LinkItem>
          <DarkToggle/>
        </Stack>
      </Container>
    </Box>
  );
};

export default Navbar;
