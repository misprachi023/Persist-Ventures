import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Image, Heading, Text, Link, Tag } from '@chakra-ui/react';

const ArticalCard = ({ article }) => {
  return (
    <Box maxW={{ base: '100%', sm: 'sm', md: 'md' }} borderWidth="1px" borderRadius="lg" overflow="hidden" boxShadow="lg" m={4}>
      <Box p={4} textAlign="right">
        <Tag size="sm" colorScheme="gray">{new Date(article.publishedAt).toLocaleDateString()}</Tag>
      </Box>
      <Image src={article.urlToImage} alt={article.title} objectFit="cover" />
      
      <Box p={6}>
        <Heading as="h3" size="md" mb={2}>
          {article.title}
        </Heading>
        <Text color="gray.500" mb={2}>
          {article.source.name} 
        </Text>
        <Text color="gray.700" noOfLines={{ base: 3, md: 2 }}>
          {article.description}
        </Text>
        <Text color="gray.700" mt={2} noOfLines={{ base: 5, md: 3 }}>
          {article.content}
        </Text>
      </Box>
      <Box px={6} pt={4} pb={6}>
        <Link as={RouterLink} to={`/article/${encodeURIComponent(article.title)}`} color="blue.500" _hover={{ color: "blue.700" }}>
          Read More
        </Link>
      </Box>
    </Box>
  );
};

export default ArticalCard;
