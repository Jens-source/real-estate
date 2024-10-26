import { Box, Flex, Grid, GridItem, Text, Icon } from '@chakra-ui/react';
import React from 'react';
import { offerings } from './offeringsConst';

const WhatWeOffer = () => {
  return (
    <Box maxWidth="1280px" margin="0 auto" paddingY={{ base: '3rem', sm: '6rem' }}>
      <Text fontSize={{ base: '4xl', sm: '5xl' }} lineHeight="shorter" fontWeight="light" paddingX="2rem" textAlign="center">
        What We Offer
      </Text>
      <Text fontSize="2xl" fontWeight="light" marginTop="1rem" marginBottom="3rem" paddingX="2rem" textAlign="center">
        Discover the benefits of choosing Miror Properties
      </Text>
      <Grid templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }} gap="1.5rem">
        {offerings.map((offer, index) => (
          <GridItem key={index} padding="1.5rem" borderRadius="md" boxShadow="md" backgroundColor="white">
            <Flex direction="column" alignItems="center" textAlign="center" padding="1rem">
              <Icon as={offer.icon} boxSize="2.5rem" color="blue.600" marginBottom="1rem" />
              <Text fontSize="xl" fontWeight="semibold" marginBottom="0.5rem">
                {offer.title}
              </Text>
              <Text fontSize="md" color="gray.600" lineHeight="1.6">
                {offer.description}
              </Text>
            </Flex>
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
};

export default WhatWeOffer;