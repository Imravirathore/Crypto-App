import { useEffect, useState } from 'react';
import Crypto from './components/Crypto';
import MyProfileCard from './components/MyProfileCard/MyProfileCard';
import Navbar from './components/Navbar/Navbar';
import NewsTicker from './components/NewsTicker/NewsTicker';
import Preloader from './components/Preloader/Preloader';
import Single from './components/Single';
import { Routes, Route } from "react-router-dom";
import MyWishList from './components/MyWishList/MyWishList';

const App: React.FC = () => {


  return (
    <>
      <NewsTicker />
      <Navbar />
      <Routes>
        <Route path='/' element={<Crypto />} />
        <Route path='/wishlist' element={<MyWishList />} />
      </Routes>


      {/* <Navbar/> */}
      {/* <MyProfileCard/> */}
      {/* <Crypto/> */}

    </>
  )
}

export default App;