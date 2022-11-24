import axios from "axios";

const API_URL = `${process.env.BASE_SERVER_URL}/api/club`;

// Create a club
const createClub = async (clubData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(`${API_URL}/create`, clubData, config);
  return response.data;
};

// Check in a club
const checkIn = async (clubId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.patch(
    `${API_URL}/checkIn/${clubId}`,
    null,
    config
  );

  return response.data;
};

const clubService = {
  createClub,
  checkIn,
};

export default clubService;
