import { useEffect, useState } from 'react';
import { ethers } from 'ethers';

const Domain = ({ domain, ethDomains, provider, id }) => {

  const buyHandler = async () => {
    const signer = await provider.getSigner();
    const tx = await ethDomains.connect(signer).mint(id, { value:  domain.price });
    await tx.wait();
  };

  return (
    <div className='card'>
      <div className='card__info'>
        <h3>{domain.name}</h3>
        <p>
          <>
            <strong>
              {ethers.utils.formatUnits(domain.price.toString(), "ether")}
            </strong>
            ETH        
          </>
        </p>
      </div>
      <button
      type="button"
      className='card__button'
      onClick={() => buyHandler()}
      >
        Buy it
      </button>
    </div>
  );
};

export default Domain;