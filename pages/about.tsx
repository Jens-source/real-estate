import TextContentBox from '@/features/common/modules/TextContentBox';
import DefaultLayout from '@/features/Layout/DefaultLayout';
import { Box, Grid, GridItem, Text, Image, Stack, Heading } from '@chakra-ui/react';
import React from 'react';

const AboutUs = () => {
  return (
    <DefaultLayout
      title="About Us"
      description="Discover the passion, expertise, and values that drive Miror Properties to help you find your dream home."
    >
      <Box backgroundColor="#f7f8f9" paddingY="4rem" paddingX={{ base: '1rem', md: '3rem' }}>
        <Grid templateColumns="repeat(6, 1fr)" gap="5" maxWidth="1280px" margin="0 auto">
          
          {/* Featured Image */}
          <GridItem colSpan={{ base: 6, md: 3 }}>
            <Image
              src="/images/about-us.jpg"
              alt="Miror Properties Office"
              borderRadius="md"
              objectFit="cover"
              width="100%"
              height="100%"
            />
          </GridItem>
          
          {/* Intro Section */}
          <GridItem colSpan={{ base: 6, md: 3 }}>
            <Stack spacing={4}>
              <Heading as="h2" size="lg" color="blue.600">
                Welcome to Miror Properties
              </Heading>
              <Text fontSize="lg" color="gray.700" fontWeight="medium">
                Our team at Miror Properties is committed to connecting you with the places you’ll love to call home.
              </Text>
              <Text fontSize="md" color="gray.600">
                Founded with a mission to redefine real estate, we blend expertise with passion, creating seamless experiences for our clients. Every property we represent holds the promise of quality and value, making your search as rewarding as finding the perfect home.
              </Text>
            </Stack>
          </GridItem>
          
          {/* Mission Statement */}
          <GridItem colSpan={6} mt={{ base: 8, md: 12 }}>
            <TextContentBox title="Our Mission & Values">
              <Text fontSize="md" color="gray.600" lineHeight="1.8">
                At Miror Properties, we believe in more than just transactions; we believe in creating lasting connections. Integrity, transparency, and excellence are at the core of everything we do. Our mission is to empower every client, whether buying or selling, with expert advice and exceptional service, turning aspirations into addresses.
              </Text>
              <Text fontSize="md" color="gray.600" lineHeight="1.8" marginTop="1rem">
                Guided by our passion for real estate and commitment to excellence, we’re dedicated to making your journey smooth, informed, and exciting. Step into the world of Miror Properties, where dreams find their foundation.
              </Text>
            </TextContentBox>
          </GridItem>

          {/* Team Highlight */}
          <GridItem colSpan={6} mt="10">
            <TextContentBox title="Meet Our Team">
              <Text fontSize="md" color="gray.600" lineHeight="1.8">
                Our team comprises industry experts who are dedicated to providing a tailored experience. With diverse backgrounds and a shared passion, each team member brings unique skills to guide you through the complexities of real estate with ease and confidence.
              </Text>
              <Text fontSize="md" color="gray.600" lineHeight="1.8" marginTop="1rem">
                We listen, understand, and work tirelessly to achieve your real estate goals. Come meet the team that is ready to welcome you into the next chapter of your life.
              </Text>
            </TextContentBox>
          </GridItem>
        </Grid>
      </Box>
    </DefaultLayout>
  );
};

export default AboutUs;