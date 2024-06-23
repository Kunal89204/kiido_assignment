// Home.jsx
import React, { useEffect } from 'react';
import { Box, Flex, Image, VStack, Text, SkeletonCircle, SkeletonText, Alert, AlertIcon } from '@chakra-ui/react';
import { fetchData } from '../redux/slices/fetch';
import { addBookmark, removeBookmark } from '../redux/slices/bookmark';
import { useDispatch, useSelector } from 'react-redux';
import { FaRegBookmark, FaBookmark } from 'react-icons/fa';

const Home = () => {
    const dispatch = useDispatch();
    const state = useSelector((state) => state);
    const bookmarks = useSelector((state) => state.bookmark.items);

    useEffect(() => {
        dispatch(fetchData());
    }, [dispatch]);

    const handleBookmark = (dat) => {
        if (bookmarks.some((item) => item.id === dat.id)) {
            dispatch(removeBookmark(dat));
        } else {
            dispatch(addBookmark(dat));
        }
    };


    // A skeleton pre loader 
    if (state.fetch.isLoading) {
        return (
            <Box p={4} bg="gray.900" minH="100vh">
                <Flex wrap="wrap" justify="center">
                    {[...Array(5)].map((_, i) => (
                        <Box
                            key={i}
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
                            className="relative"
                        >
                            <Flex align="center" mb={4}>
                                <SkeletonCircle size="50px" borderRadius={'10px'}  w={'100px'} />
                                <VStack align="start" ml={4} spacing={2}>
                                    <SkeletonText noOfLines={1} skeletonHeight="4" width="150px" />
                                    <SkeletonText noOfLines={1} skeletonHeight="4" width="100px" />
                                </VStack>
                                <FaRegBookmark className="absolute right-5 top-5" />
                            </Flex>
                            <VStack align="start" spacing={2}>
                                <SkeletonText noOfLines={1} skeletonHeight="4" width="200px" />
                                <SkeletonText noOfLines={1} skeletonHeight="4" width="250px" />
                                <SkeletonText noOfLines={1} skeletonHeight="4" width="150px" />
                                <SkeletonText noOfLines={1} skeletonHeight="4" width="100px" />
                                <SkeletonText noOfLines={1} skeletonHeight="4" width="180px" />
                                <SkeletonText noOfLines={1} skeletonHeight="4" width="220px" />
                            </VStack>
                        </Box>
                    ))}
                </Flex>
            </Box>
        );
    }

    return (
        <Box p={4} bg="gray.900" minH="100vh">
            {state.fetch.isError && (
                <Alert status="error" bg={'gray.700'} borderRadius={'5px'} color={'white'} mb={4}>
                    <AlertIcon />
                    {state.fetch.errorMessage}
                </Alert>
            )}
            <Flex wrap="wrap" justify="center">
                {state.fetch.data && state.fetch.data.map((dat) => (
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
                        className="relative"
                    >
                        <Flex align="center" mb={4}>
                            <Image
                          
                                w={'100px'}
                                src={dat.association.logo}
                                alt={`${dat.association.name} logo`}
                                mr={4}
                                borderRadius={'3px'}
                            />
                            <VStack align="start">
                                <Text fontWeight="bold" fontSize="xl">
                                    {dat.association.name}
                                </Text>
                                <Text fontSize="sm" color="gray.400">
                                    {dat.association.address}
                                </Text>
                            </VStack>
                            <Box
                                as="button"
                                className="absolute right-5 top-5"
                                onClick={() => handleBookmark(dat)}
                            >
                                {bookmarks.some((item) => item.id === dat.id) ? <FaBookmark /> : <FaRegBookmark />}
                            </Box>
                        </Flex>
                        <VStack align="start" spacing={2}>
                            <Text>
                                <Text as="span" fontWeight="bold">
                                    Name:
                                </Text>{' '}
                                {dat.first_name} {dat.last_name}
                            </Text>
                            <Text wordBreak={'break-word'}>
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
                ))}
            </Flex>
        </Box>
    );
};

export default Home;
