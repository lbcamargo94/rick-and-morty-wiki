import axios from 'axios';

export async function getCharacters() {
  const response = await axios.get('https://rickandmortyapi.com/api/character');
  return response;
}

export async function getLocations() {
  const response = await axios.get('https://rickandmortyapi.com/api/location');
  return response;
}

export async function getEpisodes() {
  const response = await axios.get('https://rickandmortyapi.com/api/episode');
  return response;
}
