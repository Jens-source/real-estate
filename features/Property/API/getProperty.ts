import { axios } from '@/lib/axios';

export const getProperty = async (id: string | string[]) => {
  const { data } = await axios.get(`574/${id}/`, {
    params: { user_field_names: true },
  });

  return data;
};