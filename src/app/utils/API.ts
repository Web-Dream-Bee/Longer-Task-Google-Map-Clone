import axios from 'axios';
const API_KEY = '6n0Cz2f1r1DiZ6PursPcslINickNdkbt32PPtutR0p3M_9EE0r9wRIkYDUSvCXhHw-d0BA4CReNw9737XyJW4gZsDgd9jp-DAKW1o9ZWz7r7P8VXR5J_xFTLYRGPXHYx';
export function getRestaurant(lat: number, lng: number) {
  const config = {
    headers: {'Authorization': `Bearer ${API_KEY}`,
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'Access-Control-Allow-Headers': '*',
              'Access-Control-Allow-Origin': 'http://localhost:3000',},
    params: {
      latitude: lat,
      longitude: lng
    }
  };
  return axios.get('https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search', config)
  .then(response => { return response.data.businesses })
}