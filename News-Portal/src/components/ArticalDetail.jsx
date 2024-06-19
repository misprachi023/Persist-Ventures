import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Box, Heading, Image, Text, Container } from '@chakra-ui/react';

const ArticleDetail = () => {
  const { title } = useParams();
  const article = useSelector((state) =>
    state.news.articles.find((article) => article.title === title)
  );

  if (!article) return <Box textAlign="center" mt={10}>Article not found</Box>;

  return (
    <Container maxW="container.md" p={6} bg="white" rounded="md" shadow="md" mt={6}>
      <Heading as="h1" size="xl" mb={4}>{article.title}</Heading>
      <Image src={article.urlToImage} alt={article.title} mb={4} />
      <Text color="gray.500" mb={2}>{article.description}</Text>
      <Text color="gray.700" fontSize="lg">{article.content}</Text>
      <Text color="gray.500" mb={2}>{article.source.name}</Text>
    </Container>
  );
};

export default ArticleDetail;
