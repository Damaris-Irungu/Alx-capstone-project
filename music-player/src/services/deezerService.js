import axios from 'axios';

const API_BASE_URL = 'https://api.deezer.com/search?q=chris%20brown';

export const fetchMusicData = async (query) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/search`, {
      params: { q: query },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching music data:', error);
    throw error;
  }
};