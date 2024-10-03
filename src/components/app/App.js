import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import AppHeader from '../appHeader/AppHeader';
import Spinner from '../spinner/Spinner';

const MainPage = lazy(() => import('../pages/MainPage'));
const Page404 = lazy(() => import('../pages/404/404'));
const ComicsPage = lazy(() => import('../pages/ComicsPage'));
const SingleComicLayout = lazy(() => import('../pages/singleComicLayout/SingleComicLayout'));
const SingleCharLayout = lazy(() => import('../pages/singleCharLayout/SingleCharLayout'));
const SinglePage = lazy(() => import('../pages/SinglePage'));

const App = () => {
  return (
    <Router basename="Marvel-IP">
      <div className="App">
        <AppHeader />
        <main>
          <Suspense fallback={<Spinner />}>
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="comics" element={<ComicsPage />} />
              <Route
                path="comics/:id"
                element={<SinglePage Component={SingleComicLayout} dataType="comic" />}
              />
              <Route
                path="char/:id"
                element={<SinglePage Component={SingleCharLayout} dataType="character" />}
              />
              <Route path="*" element={<Page404 />} />
            </Routes>
          </Suspense>
        </main>
      </div>
    </Router>
  );
};

export default App;
