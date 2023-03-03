class MarvelService {
  _apiBase = 'https://gateway.marvel.com:443/v1/public/';
  _apiKey = `apikey=${process.env.REACT_APP_API_KEY}`;
  _baseOffset = 210;

  getRecource = async (url) => {
    let res = await fetch(url);

    if(!res.ok) {
      throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    }

    return await res.json();
  }

  getAllCharacters = async (offset = this._baseOffset) => {
    const res = await this.getRecource(`${this._apiBase}characters?limit=9&offset=${offset}&${this._apiKey}`);
    return res.data.results.map(this._transformCharacter)
  }

  getCharacter = async (id) => {
    const res = await this.getRecource(`${this._apiBase}characters/${id}?${this._apiKey}`);
    return this._transformCharacter(res.data.results[0]);
  }

  _transformCharacter = (char) => {

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
}

export default MarvelService;