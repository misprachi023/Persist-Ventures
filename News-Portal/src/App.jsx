import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ChakraProvider, Container } from '@chakra-ui/react'; // Import Chakra UI components
import HomePage from './pages/HomePage';
import DetailPage from './pages/DetailPage';

const App = () => {
  return (
    <ChakraProvider>
      <Router>
        <Container maxW="container.lg" mt={10}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/article/:title" element={<DetailPage />} />
          </Routes>
        </Container>
      </Router>
    </ChakraProvider>
  );
};

export default App;
