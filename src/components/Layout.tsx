import { Container, ContainerProps } from "@chakra-ui/react";

const Layout: React.FC<ContainerProps> = ({ children, ...props }) => {
  return (
    <Container maxW="3xl" px={4} w="100%" tabIndex={-1} as="main" {...props}>
      {children}
    </Container>
  );
};

export default Layout;
