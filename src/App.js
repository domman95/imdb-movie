import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import MainView from './views/MainView/MainView';
import MovieDetailsView from './views/MovieDetailsView/MovieDetailsView';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<MainView />} />
            <Route path=":movieId" element={<MovieDetailsView />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
};

export default App;
