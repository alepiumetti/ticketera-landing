import React from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  VStack,
  HStack,
  Icon,
} from "@chakra-ui/react";
import {
  FaRocket,
  FaDesktop,
} from "react-icons/fa";

const BenefitCard = ({ icon, title, description }) => (
  <HStack spacing={4} p={6} bg="white" borderRadius="lg" boxShadow="sm">
    <Box color="teal.500" flexShrink={0}>
      <Icon as={icon} w={8} h={8} />
    </Box>
    <VStack align="start" spacing={1}>
      <Heading as="h4" size="md">
        {title}
      </Heading>
      <Text color="gray.600" fontSize="sm">
        {description}
      </Text>
    </VStack>
  </HStack>
);

const Benefits = () => {
  const benefits = [
    // {
    //   icon: FaMoneyBillWave,
    //   title: "100% Gratis",
    //   description: "Open source, sin costo de licencia. Siempre tuyo.",
    // },
    {
      icon: FaRocket,
      title: "Ultra Rápido",
      description: "Rendimiento optimizado para ventas sin interrupciones.",
    },
    // {
    //   icon: FaHeartbeat,
    //   title: "Confiable",
    //   description: "Millones de transacciones procesadas sin errores.",
    // },
    {
      icon: FaDesktop,
      title: "Fácil de Usar",
      description: "Interfaz intuitiva que requiere 0 capacitación.",
    },
    // {
    //   icon: FaGithubAlt,
    //   title: "Open Source",
    //   description: "Código abierto. Personaliza según tus necesidades.",
    // },
    // {
    //   icon: FaHeartbeat,
    //   title: "Soporte Comunitario",
    //   description: "Comunidad activa y actualización continua.",
    // },
  ];

  return (
    <Box bg="gray.50" py={16}>
      <Container maxW="6cl">
        <VStack spacing={12}>
          <VStack textAlign="center" spacing={3}>
            <Heading as="h2" size="xl">
              ¿Por qué elegir Ticketera?
            </Heading>
            <Text color="gray.600" fontSize="lg">
              Beneficios que te harán confiar en Ticketera
            </Text>
          </VStack>

          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6} w="100%">
            {benefits.map((benefit, idx) => (
              <BenefitCard key={idx} {...benefit} />
            ))}
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  );
};

export default Benefits;
