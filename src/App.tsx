import { useEffect, useState, Suspense, lazy } from 'react';
import Crypto from './components/Crypto';
import MyProfileCard from './components/MyProfileCard/MyProfileCard';
import Navbar from './components/Navbar/Navbar';
import NewsTicker from './components/NewsTicker/NewsTicker';
import { Routes, Route, useLocation } from "react-router-dom";
import MyWishList from './components/MyWishList/MyWishList';
import CryptoInfo from './components/CryptoInfo/CryptoInfo';
import ScrollToTop from './components/ScrollToTop';

const App: React.FC = () => {

  const routePath = useLocation();

  return (
    <>
      <ScrollToTop />
      {/* If Route is /profile, then NewsTicker will be hide */}
      {
        routePath.pathname !== '/profile' && routePath.pathname !== '/wishlist' && <NewsTicker />
      }
      <Navbar />
      <Routes>
        <Route path='/' element={<Crypto />} />
        <Route path='/wishlist' element={<MyWishList />} />
        <Route path='/profile' element={<MyProfileCard />} />
        <Route path='/crypto/:id' element={<CryptoInfo />} />
      </Routes>
    </>
  )
}

export default App;