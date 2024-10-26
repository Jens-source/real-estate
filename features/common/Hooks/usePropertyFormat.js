export const usePropertyFormat = (property) => {
  const address = property?.Address || 'No address available';
  const coverPhoto = property?.Images?.[0]?.url || 'default-cover-photo-url'; // Fallback cover photo URL if none available
  const propertyType = property?.['Property Type']?.value || 'Property type unavailable';
  const price = property?.['Sell Price'] || property?.['Rent Price'] || 'Price unavailable';
  const title = property?.Project || 'Untitled';
  const rooms = property?.Bedrooms || 'N/A';
  const baths = property?.Bathrooms || 'N/A';
  const purpose = property?.['Transaction Type']?.value || 'N/A';
  const sqSize = property?.Size || 'Size unavailable';
  const externalID = property?.id || 'ID unavailable';

  const photos = property?.Images?.map((image) => image?.url) || [];
  const description = property?.Description || 'No description available';
  const coverVideo = property?.['coverVideo']?.url ? property['coverVideo'].url.slice(-11) : null;
  const panorama = property?.['panoramas']?.length ? property.panoramas[0]?.url : null;

  const amenities = property?.['Amenities']?.map((item) => item.text) || [];
  const furnished = property?.['Furnishing Status'] || 'Not specified';

  return {
    address,
    coverPhoto,
    propertyType,
    price,
    title,
    rooms,
    baths,
    purpose,
    sqSize,
    externalID,
    photos,
    description,
    coverVideo,
    panorama,
    amenities,
    furnished,
  };
};