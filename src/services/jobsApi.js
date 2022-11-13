import axios from 'axios';

const KEY = 'wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu';
axios.defaults.baseURL =
  'https://api.json-generator.com/templates/ZM1r0eic3XEy/data';

export const getJobs = async () => {
  const response = await axios(`?access_token=${KEY}`);
  return response.data;
};
