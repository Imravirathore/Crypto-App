import { useEffect, useState, Suspense, lazy } from 'react';
// import Crypto from './components/Crypto';
import MyProfileCard from './components/MyProfileCard/MyProfileCard';
import Navbar from './components/Navbar/Navbar';
import NewsTicker from './components/NewsTicker/NewsTicker';
import Preloader from './components/Preloader/Preloader';
import Single from './components/Single';
import { Routes, Route, useLocation } from "react-router-dom";
import MyWishList from './components/MyWishList/MyWishList';
// import FooterA from './components/Footer/FooterA';
import Footer from './components/Footer/Footer';

const Crypto = lazy(()=> import ('./components/Crypto'))
const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  // useEffect(() => {
  //   // Simulating content loading
  //   setTimeout(() => {
  //     setIsLoading(false);
  //   }, 1000);
  // }, []);

  return (
    <>
      <NewsTicker />
      <Navbar />
      <Suspense fallback={<div>Loadaing..........</div>}>
      <Crypto/>
      </Suspense>
      {/* <Routes>
        <Route path='/' element={<Crypto />} />
        <Route path='/wishlist' element={<MyWishList />} />
        <Route path='/profile' element={<MyProfileCard />} />
      </Routes> */}
      <Footer />
    </>
  )
}

export default App;