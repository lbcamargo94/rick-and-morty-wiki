export async function getCharacters() {
  const request = await fetch( 'https://rickandmortyapi.com/api/character');
  const requestJson = await request.json();
  return requestJson;
}

export async function getLocations() {
  const request = await fetch( 'https://rickandmortyapi.com/api/location');
  const requestJson = await request.json();
  return requestJson;
}

export async function getEpisodes() {
  const request = await fetch( 'https://rickandmortyapi.com/api/episode');
  const requestJson = await request.json();
  return requestJson;
}