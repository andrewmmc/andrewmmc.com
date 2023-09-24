import React from "react";
import { Text, Flex, Stack, Heading } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
// import styled from "@emotion/styled";
import Link from "../components/Link";

interface Props {
  title: string;
  subtitle: string;
  avatar?: string;
  githubId?: string;
}

const Header: React.FC<Props> = ({ title, subtitle, githubId, ...props }) => {
  return (
    <Flex
      as="header"
      // maxW="3xl"
      // m="0 auto"
      // px="4"
      py={[8, 12]}
      flexDirection="column"
      justifyContent="space-between"
      {...props}
    >
      <Flex alignSelf="flex-start" pb={[2, 6]}>
        <Link href="/">
          {/* <StyledAvatar fixed={avatar.fixed} alt={title} /> */}
        </Link>
      </Flex>
      <Flex
        flexDirection="column"
        justifyContent="center"
        alignItems="flex-start"
      >
        <Heading as="h1" size="lg" fontWeight="500" mb={2} color="gray.800">
          <Link href="/">{title}</Link>
        </Heading>
        {subtitle ? (
          <Text color="gray.600" fontSize="lg" mb={4}>
            {subtitle}
          </Text>
        ) : null}
        <Stack direction="row" spacing={8}>
          <Link href="/about" color="primary.500">
            About
            <ChevronRightIcon ml="1" />
          </Link>
          {githubId ? (
            <Link href={`https://github.com/${githubId}`} color="primary.500">
              GitHub
              <ChevronRightIcon ml="1" />
            </Link>
          ) : null}
        </Stack>
      </Flex>
    </Flex>
  );
};

// const StyledAvatar = styled(Image)`
//   border-radius: 50%;
// `;

export default Header;
