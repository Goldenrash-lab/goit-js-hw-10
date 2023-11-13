import axios from 'axios';

axios.defaults.headers.common['x-api-key'] =
  'live_4nxdgfH7nCJT7P5UamLwnNNsrnsOM4csEvTAOagsbdikRBnzO1jECEVOpygARfWF';

export function fetchBreeds() {
  const BASE_URL = 'https://api.thecatapi.com';
  const END_POINT = '/v1/breeds';
  const url = BASE_URL + END_POINT;

  return axios.get(url).then(res => res.data);
}

export function fetchCatByBreed(breedId) {
  const BASE_URL = 'https://api.thecatapi.com';
  const END_POINT = '/v1/images/search';
  const PARAMS = `?breed_ids=${breedId}`;
  const url = BASE_URL + END_POINT + PARAMS;

  return axios.get(url).then(res => res.data);
}
