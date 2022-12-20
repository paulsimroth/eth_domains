import { useEffect, useState } from 'react';
import { ethers } from 'ethers';

// Components
import Navigation from './components/Navigation';
import Search from './components/Search';
import Domain from './components/Domain';

// ABIs
import ETHDomains from './abis/ETHDomains.json';

// Config
import config from './config.json';

function App() {

  const [account, setAccount] = useState(null)

  const loadBlockchainData = async () => {

  };

  useEffect(() => {
    loadBlockchainData();
  }, []);

  return (
    <div>
      <Navigation account={account} setAccount={setAccount}/>
      <Search/>
      
      <div className='cards__section'>

        <h2 className='cards__title'>Why you need a domain name.</h2>
        <p className='cards__description'>
          Own your custom username, use it accross services, 
          and be able to store an avatar and other profile data.
        </p>

        <hr/>
        <div className='cards'></div>

      </div>

    </div>
  );
}

export default App;