import React from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  SimpleGrid,
  Image,
  Badge,
} from "@chakra-ui/react";

// ========================================================================
// MÓDULO DE IMÁGENES - DESCOMENTA PARA AGREGAR IMÁGENES
// ========================================================================
const SHOWCASE_IMAGES = [
  // Ejemplo de cómo descomentar:
  // {
  //   src: '/images/app-screenshot-1.png',
  //   alt: 'Panel de ventas',
  //   title: 'Panel de Ventas',
  //   description: 'Interfaz limpia y eficiente para registrar ventas'
  // },
  // {
  //   src: '/images/app-screenshot-2.png',
  //   alt: 'Gestión de productos',
  //   title: 'Gestión de Productos',
  //   description: 'Administra tu catálogo con facilidad'
  // },
  // {
  //   src: '/images/thermal-printer.png',
  //   alt: 'Impresora térmica',
  //   title: 'Impresoras Térmicas',
  //   description: 'Integración completa con impresoras térmicas'
  // },
];
// ========================================================================

const ShowcaseCard = ({ title, description }) => (
  <VStack
    spacing={3}
    p={6}
    bg="white"
    borderRadius="lg"
    h="100%"
    justify="center"
    align="center"
    textAlign="center"
    boxShadow="md"
  >
    <Badge colorScheme="teal">Próximamente</Badge>
    <Heading as="h4" size="md">
      {title}
    </Heading>
    <Text color="gray.600" fontSize="sm">
      {description}
    </Text>
  </VStack>
);

const Showcase = () => {
  const hasImages = SHOWCASE_IMAGES.length > 0;

  return (
    <Box bg="white" py={16}>
      <Container maxW="6cl">
        <VStack spacing={12}>
          <VStack textAlign="center" spacing={3}>
            <Heading as="h2" size="xl">
              Interfaz Moderna
            </Heading>
            <Text color="gray.600" fontSize="lg">
              Diseñado para ser intuitivo y profesional
            </Text>
          </VStack>

          {hasImages ? (
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6} w="100%">
              {SHOWCASE_IMAGES.map((image, idx) => (
                <VStack key={idx} spacing={3} align="center">
                  <Box
                    borderRadius="lg"
                    overflow="hidden"
                    boxShadow="lg"
                    w="100%"
                    h="250px"
                    bg="gray.100"
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      w="100%"
                      h="100%"
                      objectFit="cover"
                    />
                  </Box>
                  <VStack spacing={1} align="start" w="100%">
                    <Heading as="h4" size="sm">
                      {image.title}
                    </Heading>
                    <Text color="gray.600" fontSize="sm">
                      {image.description}
                    </Text>
                  </VStack>
                </VStack>
              ))}
            </SimpleGrid>
          ) : (
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6} w="100%">
              <ShowcaseCard
                title="Panel de Ventas"
                description="Interfaz limpia y eficiente para registrar ventas"
              />
              <ShowcaseCard
                title="Gestión de Productos"
                description="Administra tu catálogo con facilidad"
              />
              <ShowcaseCard
                title="Control de Caja"
                description="Reportes detallados en tiempo real"
              />
            </SimpleGrid>
          )}

          <Box p={6} bg="teal.50" borderRadius="lg" textAlign="center" w="100%">
            <Text color="gray.700" fontSize="sm">
              📸{" "}
              {hasImages
                ? "Conoce la interfaz de Ticketera"
                : "¿Tienes screenshots? Comparte con nosotros"}
            </Text>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
};

export default Showcase;
