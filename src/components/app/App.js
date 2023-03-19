import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import {MainPage, ComicsPage, SingleComicPage, Page404} from '../pages';
import AppHeader from "../appHeader/AppHeader";

const App = () => {
  return (
    <Router>
      <div className="App">
        <AppHeader/>
        <main>
          <Routes>
            <Route path='/Marvel-IP' element={<MainPage/>}/>
            <Route path='/Marvel-IP/comics' element={<ComicsPage/>}/>
            <Route path='/Marvel-IP/comics/:comicId' element={<SingleComicPage/>}/>
            <Route path='/Marvel-IP/*' element={<Page404/>}/>
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App;
