import AppHeader from "../appHeader/AppHeader";
import RandomChar from '../randomChar/RandomChar';
import CharList from "../charList/CharList";

function App() {
  return (
    <div className="App">
      <AppHeader/>
      <main>
        <RandomChar/>
        <div className="char__content">
          <CharList/>
        </div>
      </main>
    </div>
  );
}

export default App;
