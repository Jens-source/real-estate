import React from 'react';
import { Box, Text, Button } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper';
import { propertyTypes } from './PropertyTypeConst';

const PropertyTypeCarousel = () => {
  return (
    <Box maxWidth="1280px" margin="0 auto" paddingY="3rem" paddingX={{ base: '1rem', lg: '2rem' }}>
      <Text
        fontSize={{ base: '3xl', sm: '4xl', lg: '5xl' }}
        fontWeight="light"
        textAlign="center"
        marginBottom="1rem"
      >
        Discover Your Ideal Space
      </Text>
      <Text
        fontSize={{ base: 'md', lg: 'lg' }}
        fontWeight="light"
        textAlign="center"
        color="gray.500"
        marginBottom="2rem"
        maxWidth="800px"
        marginX="auto"
      >
        From modern apartments to luxurious villas, explore the perfect property type to match your lifestyle and investment goals.
      </Text>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
      >
        {propertyTypes.map((property, index) => (
          <SwiperSlide key={index}>
            <Box
              backgroundImage={`url(${property.image})`}
              backgroundSize="cover"
              backgroundPosition="center"
              height={{ base: '300px', md: '400px' }}
              maxWidth={{ base: '100%', md: '80%', lg: '60%' }}
              margin="0 auto"
              borderRadius="md"
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              color="white"
              textAlign="center"
              padding="2rem"
              position="relative"
              boxShadow="lg"
            >
              <Box backgroundColor="rgba(0, 0, 0, 0.6)" padding="1.5rem" borderRadius="md">
                <Text fontSize={{ base: '2xl', lg: '3xl' }} fontWeight="bold" marginBottom="1rem">
                  {property.title}
                </Text>
                <Text fontSize={{ base: 'md', lg: 'lg' }} marginBottom="1.5rem">
                  {property.description}
                </Text>
                <Button colorScheme="teal" variant="outline">
                  Learn More
                </Button>
              </Box>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default PropertyTypeCarousel;