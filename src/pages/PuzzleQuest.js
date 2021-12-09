import React, { useState, useEffect } from 'react';

import { Typography, Container } from '@material-ui/core';
import Board from '../components/Board.js';
import cat3 from '../assets/cat/cat3.gif';

import { useLocation } from 'react-router-dom';

import axios from 'axios';

const PuzzleQuest = () => {

  const catImgUrl = cat3;
  const imgUrl = 'https://picsum.photos/300'

  const [catFact, setCatFact] = useState('');

  useEffect(() => {
    const fetchCatFact = async () => {
      const result = await axios(
        'https://meowfacts.herokuapp.com/'
      );
      setCatFact(result.data.data[0]);
    };
    fetchCatFact();
  }, []);

  const location = useLocation();
  const name = location.state;

  if (name === 'Meow-Meow') {
    return(
      <div>
      <main>
        <div className='cat-game'>
          <Container max-Width="sm">
            <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
              Meow-Meow-Meow
            </Typography>
            <Board imgUrl={catImgUrl}/>
            <Typography variant="h6" align="center" color="textPrimary">
              CAT FACTS: {catFact}
            </Typography>
          </Container>
        </div>
      </main>
      </div>
    )
  } else {
    return(
      <div>
      <main>
        <div>
          <Container max-Width="sm">
            <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
              Puzzle Quest
            </Typography>
            <Board imgUrl={imgUrl}/>
          </Container>
        </div>
      </main>
      </div>
    )
  }
}

export default PuzzleQuest;
