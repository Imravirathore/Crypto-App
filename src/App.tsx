import { useEffect, useState, Suspense, lazy } from 'react';
import Crypto from './components/Crypto';
import MyProfileCard from './components/MyProfileCard/MyProfileCard';
import Navbar from './components/Navbar/Navbar';
import NewsTicker from './components/NewsTicker/NewsTicker';
import Preloader from './components/Preloader/Preloader';
import Single from './components/Single';
import { Routes, Route, useLocation } from "react-router-dom";
import MyWishList from './components/MyWishList/MyWishList';
// import FooterA from './components/Footer/FooterA';
import Footer from './components/Footer/Footer';
import UserInfoModal from './components/UserInfoModal/UserInfoModal';
const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
   <UserInfoModal />
      <NewsTicker />
      <Navbar />
      <Crypto />
      <Routes>
        <Route path='/' element={<Crypto />} />
        <Route path='/wishlist' element={<MyWishList />} />
        <Route path='/profile' element={<MyProfileCard />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App;