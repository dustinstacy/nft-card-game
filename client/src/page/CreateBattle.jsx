import React, { useEffect } from 'react';
import { useGlobalContext } from '../context';

import { PageHOC } from '../components';
import { useNavigate } from 'react-router-dom';

const CreateBattle = () => {
  const { contract, walletAddress } = useGlobalContext();
  const navigate = useNavigate();

useEffect(() => {
    const createPlayerToken = async () => {
      const playerExists = await contract.isPlayer(walletAddress);
      const playerTokenExists = await contract.isPlayerToken(walletAddress);

      console.log({
        playerExists,
        playerTokenExists
      })

      if (!playerExists && !playerTokenExists) navigate('/');
    };

    if (contract) createPlayerToken();
  }, [walletAddress])

  return <div />
};

export default PageHOC(
  CreateBattle,
  <>Create<br/> a new Battle</>,
  <>Create your own battle and wait for other players to join you</>
);