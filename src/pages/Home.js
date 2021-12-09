import React, { useState } from 'react';

import { Typography, Container, Button, Box, TextField} from '@material-ui/core';

import {Link} from 'react-router-dom';

const Home = () => {

  const [name, setName] = useState('Adventurer');

  return (
    <div className="App">
      <main>
        <div>
          <Container max-Width="sm">
            <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
              Quest
            </Typography>
            <Box textAlign ='center'>

              <Typography variant="h5" align="center" color="textSecondary" paragraph>
                Enter your name:
              </Typography>
              <TextField id="outlined-basic" label="Name" variant="outlined" onInput={(event) => setName(event.target.value)}/>

              <Typography variant="h5" align="center" color="textSecondary" paragraph>
                Choose your adventure
              </Typography>

              <Link to={{pathname: '/choice/1', state: name}}>
                <Button variant="contained">Project Quest</Button>
              </Link>
              <p></p>
              <Link to={{pathname: '/challenge', state: name}}>
                <Button variant="contained">Challenge Quest</Button>
              </Link>
              <p></p>
              <Link to={{pathname: '/puzzle', state: name}}>
                <Button variant="contained">Puzzle Quest</Button>
              </Link>
            </Box>
          </Container>
        </div>
      </main>
    </div>
  );
}

export default Home;
