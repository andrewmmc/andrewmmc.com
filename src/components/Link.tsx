import NextLink from "next/link";
import { Link as ChakraLink, LinkProps } from "@chakra-ui/react";

const Link: React.FC<LinkProps> = ({ children, ...props }) => {
  return (
    <ChakraLink as={NextLink} {...props}>
      {children}
    </ChakraLink>
  );
};

export default Link;
