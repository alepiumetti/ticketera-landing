import React from "react";
import {
  Box,
  Container,
  Text,
  VStack,
  HStack,
  Link,
  Divider,
  Icon,
} from "@chakra-ui/react";
import { FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <Box bg="gray.800" color="white" py={12}>
      <Container maxW="6cl">
        <VStack spacing={8}>
          <HStack spacing={6} justify="center">
            <Link
              // href="mailto:contact@example.com"
              _hover={{ color: "teal.300" }}
            >
              <HStack spacing={2}>
                <Icon as={FaEnvelope} />
                <Text>Contacto</Text>
              </HStack>
            </Link>
          </HStack>

          <Divider borderColor="gray.600" />

          <VStack spacing={2} textAlign="center">
            <Text fontSize="sm">
              © 2026 Ticketera • Sistema de Punto de Venta con Impresoras
              Térmicas
            </Text>
            <Text fontSize="xs" opacity={0.7}>
              Desarrollado por Alejandro Piumetti
            </Text>
          </VStack>
        </VStack>
      </Container>
    </Box>
  );
};

export default Footer;
