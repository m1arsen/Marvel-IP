import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import useMarvelService from '../../services/MarvelService';
import ErrorMessage from '../errorMessage/ErrorMessage';
import Spinner from '../spinner/Spinner';
import './comicsList.scss';

// Функция setContent скопирована в компонент, так как она должно быть изменено состояние загрузка в части подгрузки новых карточек

const setContent = (marvelProcess, Component, newItemLoading) => {
    switch(marvelProcess) {
      case 'waiting':
        return <Spinner/>;
      case 'loading':
        return newItemLoading ? <Component/> : <Spinner/>;
      case 'confirmed':
        return <Component/>
      case 'error':
        return <ErrorMessage/>;
      default:
        throw new Error('Unexpected procces state');
    }
  }

const ComicsList = () => {

    const [comicsList, setComicsList] = useState([]),
          [offset, setOffset] = useState(1000),
          [newItemLoading, setNewItemLoading] = useState(false),
          [comicsEnded, setComicsEnded] = useState(false);

    const {getAllComics, marvelProcess, setMarvelProcess} = useMarvelService();

    useEffect(() => {
        onRequest(offset, true);
    }, [])

    const onRequest = (offset, initial) => {
        initial ? setNewItemLoading(false) : setNewItemLoading(true);
        getAllComics(offset)
            .then(onComicsListLoaded)
            .then(() => setMarvelProcess('confirmed'))
    }

    const onComicsListLoaded = (newComicsList) => {
        let ended = false;
        if(newComicsList.length < 8) {
            ended = true;
        }

        setComicsList(comicsList => [...comicsList, ...newComicsList])
        setNewItemLoading(newItemLoading => false)
        setOffset(offset => offset + 8)
        setComicsEnded(comicsEnded => ended)
    }

    const renderItems = (arr) => {
        const items = arr.map((item) => {
            return (
                <CSSTransition key={item.id} timeout={300} classNames="comics__item">
                    <li
                        className="comics__item"
                        key={item.id}>
                        <Link to={`${item.id}`}>
                            <img src={item.thumbnail} alt={item.title} className="comics__item-img"/>
                            <div className="comics__item-name">{item.title}</div>
                            <div className="comics__item-price">{item.price}</div>
                        </Link>
                    </li>
                </CSSTransition>
            )
          });

          return (
            <TransitionGroup className="comics__grid">
                {items}
            </TransitionGroup>
          )
    }

    return (
        <div className="comics__list">

            {setContent(marvelProcess, () => renderItems(comicsList), newItemLoading)}

            <button
                className="button button__main button__long"
                disabled={newItemLoading}
                style={{'display': comicsEnded ? 'none' : 'block'}}
                onClick={() => onRequest(offset)}>
                <div className="inner">load more</div>
            </button>
        </div>
    )
}

export default ComicsList;