import React from 'react';
import { Button, ButtonGroup, Box } from '@chakra-ui/react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  return (
    <Box display="flex" justifyContent="center" mt={6}>
      <ButtonGroup isAttached>
        {pages.map((page) => (
          <Button
            key={page}
            mx={1}
            px={3}
            py={1}
            borderRadius="md"
            colorScheme={currentPage === page ? 'blue' : 'gray'}
            onClick={() => onPageChange(page)}
          >
            {page}
          </Button>
        ))}
      </ButtonGroup>
    </Box>
  );
};

export default Pagination;
