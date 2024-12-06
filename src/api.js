import axios from "axios";

// Amadeus API base URL
const AMADEUS_BASE_URL = "https://test.api.amadeus.com/v1";

// Function to fetch an access token
export const getAccessToken = async () => {
  const clientId = process.env.REACT_APP_AMADEUS_API_KEY;
  const clientSecret = process.env.REACT_APP_AMADEUS_API_SECRET;

  try {
    const response = await axios.post(
      "https://test.api.amadeus.com/v1/security/oauth2/token",
      new URLSearchParams({
        grant_type: "client_credentials",
        client_id: clientId,
        client_secret: clientSecret,
      })
    );
    return response.data.access_token; // Return the token
  } catch (error) {
    console.error("Error fetching access token:", error);
    throw error;
  }
};

// Function to search for flights
export const searchFlights = async (origin, destination, departureDate) => {
  try {
    const token = await getAccessToken();
    const response = await axios.get(
      `${AMADEUS_BASE_URL}/shopping/flight-offers`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: {
          originLocationCode: origin,
          destinationLocationCode: destination,
          departureDate,
          adults: 1,
        },
      }
    );
    return response.data; // Return flight data
  } catch (error) {
    console.error("Error searching flights:", error);
    throw error;
  }
};

// Function to search for hotels
export const searchHotels = async (cityCode, checkInDate, checkOutDate) => {
  try {
    const token = await getAccessToken();
    const response = await axios.get(
      `${AMADEUS_BASE_URL}/shopping/hotel-offers`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: {
          cityCode,
          checkInDate,
          checkOutDate,
        },
      }
    );
    return response.data; // Return hotel data
  } catch (error) {
    console.error("Error searching hotels:", error);
    throw error;
  }
};
