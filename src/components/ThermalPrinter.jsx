import React from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  Icon,
  Badge,
  List,
  ListItem,
  ListIcon,
  Grid,
} from "@chakra-ui/react";
import {
  FaBox,
  FaCheckCircle,
  FaPlug,
  FaNetworkWired,
  FaUsb,
} from "react-icons/fa";

const ThermalPrinter = () => {
  const connections = [
    {
      icon: FaUsb,
      title: "USB Directo",
      description: "Conexión USB plug & play con impresoras modernas",
    },
    {
      icon: FaPlug,
      title: "Puerto Serial",
      description: "Soporte para impresoras térmicas legacy",
    },
    {
      icon: FaNetworkWired,
      title: "Red (Ethernet)",
      description: "Conexión por IP para impresoras en red",
    },
  ];

  return (
    <Box py={16} bg="white">
      <Container maxW="6xl">
        <VStack spacing={12}>
          <VStack textAlign="center" spacing={3}>
            <Badge colorScheme="teal" fontSize="md" px={4} py={2}>
              Integración Térmica
            </Badge>
            <Heading as="h2" size="xl">
              Impresoras Térmicas Completamente Integradas
            </Heading>
            <Text color="gray.600" fontSize="lg" maxW="2xl">
              Ticketera está diseñado para trabajar perfecto con impresoras
              térmicas. Soporta múltiples tipos de conexión sin complicaciones.
            </Text>
          </VStack>

          <Grid
            templateColumns={{ base: "1fr", md: "1fr 1fr" }}
            gap={8}
            w="100%"
          >
            <Box
              bg="teal.50"
              p={8}
              borderRadius="lg"
              borderLeft="4px solid"
              borderColor="teal.500"
            >
              <VStack align="start" spacing={6}>
                <HStack spacing={3}>
                  <Icon as={FaBox} w={8} h={8} color="teal.500" />
                  <Heading as="h3" size="md">
                    Características
                  </Heading>
                </HStack>

                <List spacing={3}>
                  <ListItem display="flex" alignItems="start" gap={3}>
                    <ListIcon as={FaCheckCircle} color="teal.500" mt={1} />
                    <VStack align="start" spacing={0}>
                      <Text fontWeight="bold">Impresión Rápida</Text>
                      <Text fontSize="sm" color="gray.600">
                        Tickets en menos de 1 segundo
                      </Text>
                    </VStack>
                  </ListItem>
                  <ListItem display="flex" alignItems="start" gap={3}>
                    <ListIcon as={FaCheckCircle} color="teal.500" mt={1} />
                    <VStack align="start" spacing={0}>
                      <Text fontWeight="bold">Corte Automático</Text>
                      <Text fontSize="sm" color="gray.600">
                        Control total de la impresora
                      </Text>
                    </VStack>
                  </ListItem>
                  <ListItem display="flex" alignItems="start" gap={3}>
                    <ListIcon as={FaCheckCircle} color="teal.500" mt={1} />
                    <VStack align="start" spacing={0}>
                      <Text fontWeight="bold">Múltiples Resoluciones</Text>
                      <Text fontSize="sm" color="gray.600">
                        80mm, 58mm y otros formatos
                      </Text>
                    </VStack>
                  </ListItem>
                  <ListItem display="flex" alignItems="start" gap={3}>
                    <ListIcon as={FaCheckCircle} color="teal.500" mt={1} />
                    <VStack align="start" spacing={0}>
                      <Text fontWeight="bold">Sin Configuración Compleja</Text>
                      <Text fontSize="sm" color="gray.600">
                        Setup automático del sistema
                      </Text>
                    </VStack>
                  </ListItem>
                </List>
              </VStack>
            </Box>

            <VStack spacing={4} align="stretch">
              <Heading as="h4" size="sm" color="gray.700">
                Tipos de Conexión Soportados
              </Heading>
              {connections.map((conn, idx) => (
                <Box key={idx} p={4} bg="gray.50" borderRadius="md">
                  <HStack spacing={3} mb={2}>
                    <Icon as={conn.icon} w={5} h={5} color="teal.500" />
                    <Text fontWeight="bold">{conn.title}</Text>
                  </HStack>
                  <Text fontSize="sm" color="gray.600" ml={8}>
                    {conn.description}
                  </Text>
                </Box>
              ))}
            </VStack>
          </Grid>
        </VStack>
      </Container>
    </Box>
  );
};

export default ThermalPrinter;
