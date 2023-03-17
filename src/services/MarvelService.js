import { useHttp } from "../hooks/http.hook";

const useMarvelService = () => {
  const {loading, error, request, clearError} = useHttp();

  const _apiBase = 'https://gateway.marvel.com:443/v1/public/';
  const _apiKey = `apikey=${process.env.REACT_APP_API_KEY}`;
  const _baseOffset = 210;

  const getAllCharacters = async (offset = _baseOffset) => {
    const res = await request(`${_apiBase}characters?limit=9&offset=${offset}&${_apiKey}`);
    return res.data.results.map(_transformCharacter)
  }

  const getCharacter = async (id) => {
    const res = await request(`${_apiBase}characters/${id}?${_apiKey}`);
    return _transformCharacter(res.data.results[0]);
  }

  const _transformCharacter = (char) => {

    function editDescription(description){
      if(description.length >= 200) {
        description = description.slice(0, 197) + '...';
      }
      return description;
    }

    return {
      id: char.id,
      name: char.name,
      description: `${char.description ? editDescription(char.description) : "This character has not description"}`,
      thumbnail: `${char.thumbnail.path}.${char.thumbnail.extension}`,
      homepage: char.urls[0].url,
      wiki: char.urls[1].url,
      comics: char.comics.items.length > 10 ? char.comics.items.slice(0, 10) : char.comics.items
    }
  }

  return {loading, error, getAllCharacters, getCharacter, clearError}
}

export default useMarvelService;