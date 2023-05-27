import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import MainPage from '../pages/MainPage';
import AppHeader from "../appHeader/AppHeader";
import Spinner from "../spinner/Spinner";

const Page404 = lazy(() => import('../pages/404/404'));
const ComicsPage = lazy(() => import('../pages/ComicsPage'));
const SingleComicPage = lazy(() => import('../pages/singleComicPage/SingleComicPage'));

const App = () => {
  return (
    <Router>
      <div className="App">
        <AppHeader/>
        <main>
          <Suspense fallback={<Spinner/>}>
            <Routes>
              <Route path='/Marvel-IP/' element={<MainPage/>}/>
              <Route path='/Marvel-IP/comics' element={<ComicsPage/>}/>
              <Route path='/Marvel-IP/comics/:comicId' element={<SingleComicPage/>}/>
              <Route path='*' element={<Page404/>}/>
            </Routes>
          </Suspense>
        </main>
      </div>
    </Router>
  )
}

export default App;
