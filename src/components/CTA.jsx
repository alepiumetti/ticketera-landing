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
} from "@chakra-ui/react";
import { FaDownload } from "react-icons/fa";

const CTA = () => {
  return (
    <Box
      bg="linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
      color="white"
      py={16}
    >
      <Container maxW="4cl">
        <VStack spacing={8} textAlign="center">
          <Heading as="h2" size="xl">
            Comienza Ahora con Ticketera
          </Heading>
          <Text fontSize="lg" opacity={0.95}>
            Instala Ticketera en minutos y empieza a gestionar tus ventas de
            forma profesional con integración completa de impresoras térmicas.
          </Text>

          <HStack spacing={4} pt={4} flexWrap="wrap" justify="center">
            <Button
              size="lg"
              bg="teal.300"
              _hover={{ bg: "teal.200" }}
              color="black"
              fontWeight="bold"
              leftIcon={<Icon as={FaDownload} />}
              disabled
            >
              Descargar v1.0.0
            </Button>
            {/* <Button
              size="lg"
              variant="outline"
              borderColor="white"
              color="white"
              fontWeight="bold"
              leftIcon={<Icon as={FaGithub} />}
              _hover={{ bg: "whiteAlpha.100" }}
            >
              Ver en GitHub
            </Button> */}
            {/* <Button
              size="lg"
              variant="outline"
              borderColor="white"
              color="white"
              fontWeight="bold"
              leftIcon={<Icon as={FaBook} />}
              _hover={{ bg: "whiteAlpha.100" }}
            >
              Documentación
            </Button> */}
          </HStack>

          <Box pt={4} opacity={0.8} fontSize="sm">
            <Text>Windows • Linux • macOS</Text>
            {/* <Text>Licencia: ISC (Open Source)</Text> */}
          </Box>
        </VStack>
      </Container>
    </Box>
  );
};

export default CTA;
