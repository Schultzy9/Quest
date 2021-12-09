import React, { useState, useEffect } from 'react';

import { Typography, Container } from '@material-ui/core';
import Board from '../components/Board.js';
import cat1 from '../assets/cat/cat1.gif';
import cat2 from '../assets/cat/cat2.gif';
import cat3 from '../assets/cat/cat3.gif';
import cat4 from '../assets/cat/cat4.gif';
import cat5 from '../assets/cat/cat5.gif';

import { useLocation } from 'react-router-dom';

import axios from 'axios';

const PuzzleQuest = () => {

  const catArray = [cat1, cat2, cat3, cat4, cat5];
  const catImgUrl = catArray[Math.floor(Math.random() * catArray.length)];

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
