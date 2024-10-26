import { axios } from '@/lib/axios';

export const getProperties = async (page = 1, size = 50) => {
  const filters = {
    filter_type: "AND",
    filters: [
      {
        type: "boolean",
        field: "Presentable",
        value: "1"
      }
    ],
    groups: []
  };

  try {
    const { data } = await axios.get(`/574/`, {
      params: {
        page: 1,            // Explicitly set to 1 for testing
        size: Math.min(size, 100),  // Set size within a reasonable range, if unsure
        user_field_names: true,
        filters: JSON.stringify(filters),
      },
    });
    return data.results;
  } catch (error) {
    console.error("Error fetching properties:", error);
    throw error;
  }
};