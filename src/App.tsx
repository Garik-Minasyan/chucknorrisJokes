import React from 'react';
import ButtonsPanel from './components/buttonsPanel/ButoonsPanel';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import CustomJoke from './components/customJoke/CustomJoke';
import FavouriteJoke from './components/favouriteJoke/FavouriteJoke';
import { AppStyle } from './AppStyle';

const App = () => {
  return (
    <AppStyle>
      <BrowserRouter>
        <ButtonsPanel />
        <Routes>
          <Route path="/" element={<CustomJoke />} />
          <Route path="/favouriteJoke" element={<FavouriteJoke />} />
        </Routes>
      </BrowserRouter>
    </AppStyle>
  );
}

export default App;
