import Navbar from '../Navbar/Navbar';
import Crypto from '../CryptoHome/Crypto';
import { useState } from 'react';

const Header = ()=>{
const [searchQuery, setSearchQuery] = useState<string>('');

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

    return (
        <>
            <Navbar onSearch={handleSearch}/>
            <Crypto searchQuery={searchQuery} />
        </>
    )
}

export default Header;