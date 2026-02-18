import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import Hero from './components/Hero';
import Features from './components/Features';
import ThermalPrinter from './components/ThermalPrinter';
import Benefits from './components/Benefits';
import Showcase from './components/Showcase';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Hero />
      <Features />
      <ThermalPrinter />
      <Benefits />
      <Showcase />
      <CTA />
      <Footer />
    </ChakraProvider>
  );
}

export default App;
