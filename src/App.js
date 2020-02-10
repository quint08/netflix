import React from 'react';
import Header from './components/Header';
import SearchMovie from './components/SearchMovie';
import RowSeries from './components/rows/RowSeries';
import RowMovies from './components/rows/RowMovies';
import Banner from './components/banner/Banner';
import './App.css';

function App() {
  return (
    <div>
          <Header />
          <SearchMovie className="vanish">

          </SearchMovie>
          <Banner />
          <RowSeries />
          <RowMovies />
    </div>
  );
}

export default App;
