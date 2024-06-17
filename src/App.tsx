import Crypto from './components/Crypto';
import Navbar from './components/Navbar/Navbar';
import Single from './components/Single';

const App:React.FC = ()=>{
  return (
    <>
      <Navbar/>
      {/* <Single/> */}
      <Crypto/>
      
    </>
  )
}

export default App;