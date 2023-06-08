import { useState } from "react";
import { Helmet } from "react-helmet";

import RandomChar from "../randomChar/RandomChar";
import CharInfo from "../charInfo/CharInfo";
import CharList from "../charList/CharList";
import CharSearchForm from "../charSearchForm/CharSearchForm";
import ErrorBoundary from "../errorBoundary/ErrorBoundary";

import decoration from '../../resources/vision.svg';

const MainPage = () => {

  const [selectedChar, setSelectedChar] = useState(null);

  const onCharSelected = (id) => {
    setSelectedChar(id);
  }

  return(
    <>
      <Helmet>
        <meta
          name="description"
          content="Marvel Information Portal"
        />
        <title>Marvel IP</title>
      </Helmet>
      <ErrorBoundary>
        <RandomChar/>
      </ErrorBoundary>
      <div className="char__content">
        <ErrorBoundary>
          <CharList onCharSelected={onCharSelected}/>
        </ErrorBoundary>
        <div>
          <ErrorBoundary>
            <CharInfo charId={selectedChar}/>
          </ErrorBoundary>
          <ErrorBoundary>
            <CharSearchForm/>
          </ErrorBoundary>
        </div>
      </div>
      <img className="bg-decoration" src={decoration} alt="vision"/>
    </>
  )
}

export default MainPage;