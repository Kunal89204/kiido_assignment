import React from 'react';
import { Box, Flex, Link, Text, Badge } from '@chakra-ui/react';
import { FaHome, FaBookmark } from 'react-icons/fa';
import { Link as RouterLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const bookmarks = useSelector((state) => state.bookmark.items);

  return (
    <Box bg="gray.800" color="white" py={4} px={8} boxShadow="lg">
      <Flex justify="space-between" align="center">
        <Text fontSize="xl" fontWeight="bold">MyApp</Text>
        <Flex>
          <Link as={RouterLink} to="/" mx={2} display="flex" alignItems="center">
            <FaHome />
            <Text ml={2}>Home</Text>
          </Link>
          <Link as={RouterLink} to="/bookmarks" mx={2} display="flex" alignItems="center" position="relative">
            <FaBookmark />
            {bookmarks.length > -1 && (
              <Badge
                position="absolute"
                top="-1"
                right="-1"
                fontSize="0.8em"
                colorScheme="red"
                borderRadius="full"
                px={2}
              >
                {bookmarks.length}
              </Badge>
            )}
            <Text ml={2}>Bookmarks</Text>
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
