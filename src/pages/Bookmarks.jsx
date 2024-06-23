// Bookmarks.jsx
import React from 'react';
import { Box, Flex, Image, VStack, Text } from '@chakra-ui/react';
import { useSelector } from 'react-redux';

const Bookmarks = () => {
    const bookmarks = useSelector((state) => state.bookmark.items);

    return (
        <Box p={4} bg="gray.900" minH="100vh">
            <Flex wrap="wrap" justify="center">
                {bookmarks.length > 0 ? (
                   
                    bookmarks.map((dat) => (
                        <Box
                            key={dat.id}
                            bg="gray.800"
                            color="white"
                            maxW="sm"
                            borderWidth="1px"
                        borderColor={'gray.700'}
                            borderRadius="lg"
                            overflow="hidden"
                            m={4}
                            p={6}
                            boxShadow="lg"
                        >
                            <Flex align="center" mb={4}>
                                <Image
                                    w={'100px'}
                                    src={dat.association.logo}
                                    alt={`${dat.association.name} logo`}
                                    mr={4}
                                />
                                <VStack align="start">
                                    <Text fontWeight="bold" fontSize="xl">
                                        {dat.association.name}
                                    </Text>
                                    <Text fontSize="sm" color="gray.400">
                                        {dat.association.address}
                                    </Text>
                                </VStack>
                            </Flex>
                            <VStack align="start" spacing={2}>
                                <Text>
                                    <Text as="span" fontWeight="bold">
                                        Name:
                                    </Text>{' '}
                                    {dat.first_name} {dat.last_name}
                                </Text>
                                <Text>
                                    <Text as="span" fontWeight="bold">
                                        Email:
                                    </Text>{' '}
                                    {dat.email}
                                </Text>
                                <Text>
                                    <Text as="span" fontWeight="bold">
                                        Language:
                                    </Text>{' '}
                                    {dat.preferred_language}
                                </Text>
                                <Text>
                                    <Text as="span" fontWeight="bold">
                                        Active:
                                    </Text>{' '}
                                    {dat.is_active ? 'Yes' : 'No'}
                                </Text>
                                <Text>
                                    <Text as="span" fontWeight="bold">
                                        Consultation Duration:
                                    </Text>{' '}
                                    {dat.average_consultation_duration} mins
                                </Text>
                                <Text>
                                    <Text as="span" fontWeight="bold">
                                        Consultation Possible:
                                    </Text>{' '}
                                    {dat.is_consultation_possible ? 'Yes' : 'No'}
                                </Text>
                            </VStack>
                        </Box>
                    ))
                ) : (
                    <Text color="white">No bookmarks yet.</Text>
                )}
            </Flex>
        </Box>
    );
};

export default Bookmarks;
