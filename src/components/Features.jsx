import React from "react";
import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  VStack,
  Icon,
  Text,
} from "@chakra-ui/react";
import {
  FaBox,
  FaReceipt,
  FaCashRegister,
  FaChartBar,
  FaLock,
  FaCog,
} from "react-icons/fa";

const Feature = ({ icon, title, description }) => (
  <VStack
    align="start"
    spacing={3}
    p={6}
    bg="white"
    borderRadius="lg"
    boxShadow="md"
    _hover={{ boxShadow: "lg", transform: "translateY(-4px)" }}
    transition="all 0.3s"
  >
    <Box color="teal.500">
      <Icon as={icon} w={8} h={8} />
    </Box>
    <Heading as="h3" size="md">
      {title}
    </Heading>
    <Text color="gray.600" fontSize="sm" lineHeight="1.6">
      {description}
    </Text>
  </VStack>
);

const Features = () => {
  const features = [
    {
      icon: FaBox,
      title: "Gestión de Productos",
      description:
        "Administra tu catálogo de productos de forma sencilla. Añade, edita y elimina productos con precios en tiempo real.",
    },
    {
      icon: FaReceipt,
      title: "Tickets Automáticos",
      description:
        "Genera tickets automáticos e impríme en tiempo real con tus impresoras térmicas sin configuracion compleja.",
    },
    {
      icon: FaCashRegister,
      title: "Métodos de Pago",
      description:
        "Soporta Efectivo, Tarjeta y Transferencias. Registra cada transacción con su método de pago.",
    },
    {
      icon: FaChartBar,
      title: "Reportes Detallados",
      description:
        "Obtén reportes completos de ventas, productos más vendidos y análisis por método de pago.",
    },
    {
      icon: FaLock,
      title: "Seguro y Confiable",
      description:
        "Datos persistentes en SQLite. Backup automático de todas tus transacciones.",
    },
    {
      icon: FaCog,
      title: "Múltiples Conexiones",
      description:
        "Conecta tu impresora térmica por USB, puerto Serial o Red. Total flexibilidad.",
    },
  ];

  return (
    <Box bg="gray.50" py={16}>
      <Container maxW="6xl">
        <VStack spacing={12}>
          <VStack textAlign="center" spacing={3}>
            <Heading as="h2" size="xl">
              Características Principales
            </Heading>
            <Text color="gray.600" fontSize="lg">
              Ticketera incluye todo lo que necesitas para un POS profesional
            </Text>
          </VStack>

          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6} w="100%">
            {features.map((feature, idx) => (
              <Feature key={idx} {...feature} />
            ))}
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  );
};

export default Features;
