import AppHeader from "../appHeader/AppHeader";
import RandomChar from '../randomChar/RandomChar';
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";
import AppBanner from "../appBanner/AppBanner";

import decoration from '../../resources/vision.svg';

function App() {
  return (
    <div className="App">
      <AppHeader/>
      <main>
        <RandomChar/>
        <div className="char__content">
          <CharList/>
          <CharInfo/>
        </div>
        <img className="bg-decoration" src={decoration} alt="vision"/>
      </main>
    </div>
  );
}

export default App;
