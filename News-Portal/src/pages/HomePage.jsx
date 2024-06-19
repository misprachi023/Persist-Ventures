import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Select, Container, CircularProgress, Heading } from '@chakra-ui/react';
import { fetchNews } from '../store/newsSlice';
import ArticalCard from '../components/ArticalCard';
import Pagination from '../components/Pagination';

const HomePage = () => {
  const dispatch = useDispatch();
  const articles = useSelector((state) => state.news.articles);
  const status = useSelector((state) => state.news.status);
  const error = useSelector((state) => state.news.error);

  const [category, setCategory] = useState('general');
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 10;

  useEffect(() => {
    dispatch(fetchNews(category));
  }, [dispatch, category]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const filteredArticles = articles.slice(
    (currentPage - 1) * articlesPerPage,
    currentPage * articlesPerPage
  );

  if (status === 'loading') {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
        <CircularProgress isIndeterminate color="blue.500" />
      </Box>
    );
  }

  if (status === 'failed') {
    return (
      <Box textAlign="center" mt={10}>
        Error: {error}
      </Box>
    );
  }

  return (
    <Box>
        <Heading as="h1" size="xl" mb={4} textAlign="center" mt={10} color="blue.500">News Portal</Heading>
    <Container maxW="container.lg" mt={6}>
      <Box mb={6} textAlign="center">
        <Select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          width={{ base: '100%', md: 'auto' }}
          mb={4}
          colorScheme="blue"
          variant="filled"
        >
          <option value="general">General</option>
          <option value="business">Business</option>
          <option value="technology">Technology</option>
          <option value="entertainment">Entertainment</option>
        </Select>
      </Box>

      <Box display="flex" flexWrap="wrap" justifyContent="center">
        {filteredArticles.map((article) => (
          <ArticalCard key={article.title} article={article} />
        ))}
      </Box>

      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(articles.length / articlesPerPage)}
        onPageChange={handlePageChange}
        mt={4}
      />
    </Container>
    </Box>
  );
};

export default HomePage;
