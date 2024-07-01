import Crypto from './components/Crypto';
import MyProfileCard from './components/MyProfileCard/MyProfileCard';
import Navbar from './components/Navbar/Navbar';
import NewsTicker from './components/NewsTicker/NewsTicker';
import Single from './components/Single';

const App:React.FC = ()=>{
  return (
    <>
      <NewsTicker/>
      <Navbar/>
      {/* <MyProfileCard/> */}
      {/* <Single/> */}
      <Crypto/>
      
    </>
  )
}

export default App;