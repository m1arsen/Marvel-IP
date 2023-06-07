import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import AppHeader from "../appHeader/AppHeader";
import Spinner from "../spinner/Spinner";

const MainPage = lazy(() => import('../pages/MainPage'));
const Page404 = lazy(() => import('../pages/404/404'));
const ComicsPage = lazy(() => import('../pages/ComicsPage'));
const SingleComicLayout = lazy(() => import('../pages/singleComicLayout/SingleComicLayout'));
const SingleCharLayout = lazy(() => import('../pages/singleCharLayout/SingleCharLayout'));
const SinglePage = lazy(() => import('../pages/SinglePage'));

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
              <Route path='/Marvel-IP/comics/:id' element={<SinglePage Component={SingleComicLayout} dataType='comic'/>}/>
              <Route path='/Marvel-IP/char/:id' element={<SinglePage Component={SingleCharLayout} dataType='character'/>}/>
              <Route path='*' element={<Page404/>}/>
            </Routes>
          </Suspense>
        </main>
      </div>
    </Router>
  )
}

export default App;
