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

  return (
    <div>

      <div className='cards__section'>

        <h2 className='cards__title'>Welcome to ETH Domains!</h2>

      </div>

    </div>
  );
}

export default App;