import { useHttp } from "../hooks/http.hook";

const useMarvelService = () => {
  const {request, clearError, marvelProcess, setMarvelProcess} = useHttp();

  const _apiBase = 'https://gateway.marvel.com:443/v1/public/';
  const _apiKey = `apikey=${process.env.REACT_APP_API_KEY}`;
  const _baseOffsetChar = 210;
  const _baseOffsetComics = 1000;

  const getAllCharacters = async (offset = _baseOffsetChar) => {
    const res = await request(`${_apiBase}characters?limit=9&offset=${offset}&${_apiKey}`);
    return res.data.results.map(_transformCharacter)
  }

  const getCharacterByName = async (name) => {
		const res = await request(`${_apiBase}characters?name=${name}&${_apiKey}`);
		return res.data.results.map(_transformCharacter);
	};

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

  const getAllComics = async (offset = _baseOffsetComics) => {
    const res = await request(`${_apiBase}comics?limit=8&offset=${offset}&${_apiKey}`)
    return res.data.results.map(_transformComic)
  }

  const getComic = async (id) => {
    const res = await request(`${_apiBase}comics/${id}?${_apiKey}`)
    return _transformComic(res.data.results[0]);
  }

  const _transformComic = (comics) => {
    return {
      id: comics.id,
      title: comics.title,
      description: comics.description || "There is no description",
      thumbnail: `${comics.thumbnail.path}.${comics.thumbnail.extension}`,
      pageCount: comics.pageCount
				? `${comics.pageCount} p.`
				: "No information about the number of pages",
      language: comics.textObjects[0]?.language || "en-us",
      price: comics.prices[0].price
				? `${comics.prices[0].price}$`
				: "not available"
    }
  }

  return {marvelProcess,
          setMarvelProcess,
          getAllCharacters,
          getCharacterByName,
          getCharacter,
          getAllComics,
          getComic,
          clearError}
}

export default useMarvelService;