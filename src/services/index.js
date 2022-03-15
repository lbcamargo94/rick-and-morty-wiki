import axios from 'axios';

export async function getCharacters(request) {
  const response = await axios.get(`https://rickandmortyapi.com/api/${request}`);
  return response;
}

export async function getLocations(request) {
  const response = await axios.get(`https://rickandmortyapi.com/api/${request}`);
  return response;
}

export async function getEpisodes(request) {
  const response = await axios.get(`https://rickandmortyapi.com/api/${request}`);
  return response;
}

export async function getSearch(request) {
  const response = await axios.get(`https://rickandmortyapi.com/api/${request}`);
  return response;
}

