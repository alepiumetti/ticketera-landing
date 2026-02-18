import React from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  Button,
  VStack,
  HStack,
  Icon,
  Grid,
} from "@chakra-ui/react";
import { FaTerminal } from "react-icons/fa";

const Hero = () => {
  return (
    <Box
      bg="linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
      color="white"
      py={{ base: 20, md: 32 }}
    >
      <Container maxW="6xl">
        <Grid
          templateColumns={{ base: "1fr", md: "1fr 1fr" }}
          gap={8}
          alignItems="center"
        >
          <VStack align="start" spacing={6}>
            <Heading as="h1" size="2xl" fontWeight="bold" lineHeight="1.2">
              La Solución Perfecta para{" "}
              <Box as="span" color="teal.200">
                Punto de Venta
              </Box>
            </Heading>

            <Text fontSize="lg" opacity={0.95} lineHeight="1.8">
              Ticketera es un sistema de POS moderno, confiable y con
              integración completa de{" "}
              <Box as="span" fontWeight="bold" color="teal.200">
                impresoras térmicas
              </Box>{" "}
              para maximizar tu productividad.
            </Text>

            <HStack spacing={4} pt={4}>
              <Button
                size="lg"
                bg="teal.400"
                _hover={{ bg: "teal.300" }}
                color="white"
              >
                Contactanos
              </Button>
              {/* <Button
                size="lg"
                variant="outline"
                borderColor="white"
                color="white"
                _hover={{ bg: "whiteAlpha.100" }}
              >
                Ver Demo
              </Button> */}
            </HStack>

            <HStack spacing={8} pt={8} w="100%">
              <VStack spacing={1}>
                <Text fontSize="2xl" fontWeight="bold">
                  100%
                </Text>
                <Text fontSize="sm" opacity={0.8}>
                  Gratis
                </Text>
              </VStack>
              <VStack spacing={1}>
                <Text fontSize="2xl" fontWeight="bold">
                  USB/Serial/Red
                </Text>
                <Text fontSize="sm" opacity={0.8}>
                  Conexiones
                </Text>
              </VStack>
              <VStack spacing={1}>
                <Text fontSize="2xl" fontWeight="bold">
                  Rápido
                </Text>
                <Text fontSize="sm" opacity={0.8}>
                  Impresión Térmica
                </Text>
              </VStack>
            </HStack>
          </VStack>

          <VStack spacing={4} align="center">
            <Box
              w="100%"
              h="300px"
              bg="whiteAlpha.10"
              borderRadius="lg"
              display="flex"
              alignItems="center"
              justifyContent="center"
              backdropFilter="blur(10px)"
              border="2px solid whiteAlpha.20"
            >
              <VStack spacing={4}>
                <Icon as={FaTerminal} w={20} h={20} />
                <Text fontSize="lg" fontWeight="bold">
                  Integración Completa
                </Text>
                <Text fontSize="sm" opacity={0.8} textAlign="center">
                  Con impresoras térmicas
                </Text>
              </VStack>
            </Box>
          </VStack>
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero;
