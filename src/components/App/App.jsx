import axios from 'axios';

const URL = 'https://pixabay.com/api/';
const KEY = '32421967-eb2d2235d3afe06fa165bc348';

export const per_page = 12;

export default function apiSerrvice(searchQuery, page) {
  return axios
    .get(
      `${URL}?q=${searchQuery}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=${per_page}`
    )
    .then(response => {
      return response.data;
    })
    .catch(err => console.log(err));
}
