// Use different API endpoints based on environment
const isDevelopment = import.meta.env.MODE === 'development';
const API_BASE_URL = isDevelopment 
  ? '/api/v1/user'  // Use proxy in development
  : 'https://sagarminor.onrender.com/api/v1/user';

export const API_END_POINT = API_BASE_URL;



export  const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2ZTczNWUxN2QzNjQxNjE1YTdmYzE5ZSIsImlhdCI6MTcyNjQ3MTYyMiwiZXhwIjoxNzI2NDc1MjIyfQ.pT-uEgNTP6y-Jjq77RfPIHHdpL9KnHpevDLHfWY2QJc'
      }
    };
 
