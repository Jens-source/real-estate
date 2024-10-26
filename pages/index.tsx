import { getProperties } from '@/features/common/API/getProperties';
import FeaturedProperties from '@/features/Home/components/FeaturedProperties';
import HeroBanner from '@/features/Home/components/HeroBanner';
import WhatWeOffer from '@/features/Home/components/WhatWeOffer';
import DefaultLayout from '@/features/Layout/DefaultLayout';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import PropertyTypeCarousel from '@/features/Home/components/PropertyTypeCarousel';

export default function Home({
  featuredProperties,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <DefaultLayout
      title="Miror Properties"
      description='Find your dream home with our real estate website. Browse through thousands of listings, connect with expert agents, and discover the perfect property for your lifestyle. Start your search today and make your homeownership dreams a reality.'
    >
      <HeroBanner />
      <FeaturedProperties featuredProperties={featuredProperties} />
      <WhatWeOffer />
      <PropertyTypeCarousel />
    </DefaultLayout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const properties = await getProperties(3);
  return {
    props: { featuredProperties: properties },
  };
};
