import axios from 'axios';
import { API_URL, API_KEY } from './common';

const queryCreator = (path, queries = []) => {
  let url = `${API_URL}${path}?api_key=${API_KEY}`;
  queries.forEach(item => {
    url += `&${item}`;
  });
  return url;
};

export default async function fetchData(path, queries = []) {
  const requestUrl = queryCreator(path, queries);
  const responseData = await axios
    .get(requestUrl)
    .then(result => {
      return JSON.parse(result.request.response);
    })
    .catch(error => {
      console.error(error);
      // return error;
    });
  return responseData;
}
