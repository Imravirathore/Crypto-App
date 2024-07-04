import { useEffect, useState } from 'react';
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

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();
  const hideOnRoutes = ['/profile', '/wishlist'];
  const hideComponents = hideOnRoutes.includes(location.pathname);
  useEffect(() => {
    // Simulating content loading
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  }, []);

  return (
    <>

      {
        isLoading ? (
          <Preloader />

        )
          : (
            <>
              {!hideComponents && <NewsTicker />}
              {!hideComponents && <Navbar />}
              <Routes>
                <Route path='/' element={<Crypto />} />
                <Route path='/wishlist' element={<MyWishList />} />
                <Route path='/profile' element={<MyProfileCard />} />
              </Routes>
              {!hideComponents && <Footer />}
            </>
          )
      }



    </>
  )
}

export default App;