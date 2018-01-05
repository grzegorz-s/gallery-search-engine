import axios from 'axios';

const FLICKR_API_KEY = 'eee268dcec60204a9c8f21bb9a2b1093';
const FLICKR_API_URL = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${FLICKR_API_KEY}&format=json&nojsoncallback=1&per_page=10`;


export function fetchFlickr(tag) {
  return axios.get(`${FLICKR_API_URL}&text=${tag}`)
  .then(response => response.data.photos.photo.map(({ farm, server, id, secret, title }) => ({
    id,
    title,
    mediaUrl: `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`
  })))
}