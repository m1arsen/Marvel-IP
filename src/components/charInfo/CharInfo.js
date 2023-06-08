import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import useMarvelService from '../../services/MarvelService';
import setContent from '../../utils/setContent';

import './charInfo.scss';

const CharInfo = (props) => {

  const [char, setChar] = useState(null);

  const {getCharacter, clearError, marvelProcess, setMarvelProcess} =  useMarvelService();

  useEffect(() => {
    updateChar();
  }, [props.charId])

  const updateChar = () => {
    const {charId} = props;

    if(!charId) {
      return;
    }

    clearError();
    getCharacter(charId)
      .then(onCharLoaded)
      .then(() => setMarvelProcess('confirmed'))
  }

  const onCharLoaded = (char) => {
    setChar(char);
  }

  return(
    <div className="char__info">
      {setContent(marvelProcess, View, char)}
    </div>
  )

}

const View = ({data}) => {
  const {name, description, thumbnail, homepage, wiki, comics} = data;
  let imgStyle = {'objectFit' : 'cover', 'border-radius' : '5px'};
  if (thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg') {
      imgStyle = {'objectFit' : 'contain', 'border-radius' : '5px'};
  }

  const comicsText = comics.length === 0 ? 'There is no comics with this character' : null;

  return (
    <>
      <div className="char__basics">
        <img src={thumbnail} alt={name} style={imgStyle}/>

        <div>

          <div className="char__info-name">{name}</div>

          <div className="char__btns">
            <a href={homepage} target='_blank' className="button button__main">
              <div className="inner">homepage</div>
            </a>
            <a href={wiki} target='_blank' className="button button__secondary">
              <div className="inner">Wiki</div>
            </a>
          </div>

        </div>

      </div>

      <div className="char__descr">
        {description}
      </div>

      <div className="char__comics">Comics:</div>

      <ul className="char__comics-list">
        {comicsText}
        {
          comics.map(({name, resourceURI}) => {
            let id = resourceURI.slice(resourceURI.lastIndexOf('/') + 1);
            return (
              <li key={id} className="char__comics-item">
                <Link to={`comics/${id}`}>{name}</Link>
              </li>
            )
          })
        }
      </ul>
    </>
  )
}

export default CharInfo;