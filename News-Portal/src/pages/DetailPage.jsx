import React from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@chakra-ui/react';
import ArticalDetail from '../components/ArticalDetail';

const DetailPage = () => {
  const { title } = useParams();

  return (
    <Box maxW="4xl" mx="auto" p={6} mt={6}>
      <ArticalDetail title={title} />
    </Box>
  );
};

export default DetailPage;
