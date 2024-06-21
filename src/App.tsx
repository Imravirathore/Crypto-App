import Crypto from './components/Crypto';
import Navbar from './components/Navbar/Navbar';
import NewsTicker from './components/NewsTicker/NewsTicker';
import Single from './components/Single';

const App:React.FC = ()=>{
  return (
    <>
    <NewsTicker/>
      <Navbar/>
      {/* <Single/> */}
      <Crypto/>
      
    </>
  )
}

export default App;