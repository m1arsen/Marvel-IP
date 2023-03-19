import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import {MainPage, ComicsList} from '../pages';
import AppHeader from "../appHeader/AppHeader";
import SingeComic from '../singleComic/SingleComic';

const App = () => {
  return (
    <Router>
      <div className="App">
        <AppHeader/>
        <main>
          <Switch>
            <Route exact path='/Marvel-IP'>
              <MainPage/>
            </Route>
            <Route exact path='/Marvel-IP/comics'>
              <ComicsList/>
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  )
}

export default App;
