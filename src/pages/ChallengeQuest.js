import React, { useState } from 'react';

import { Typography, Container, Button, Box, TextField } from '@material-ui/core';

import { Link, useLocation } from 'react-router-dom';

const ChallengeQuest = () => {

  const [coding, setCoding] = useState();
  const [procrastination, setProcrastination] = useState();

  const location = useLocation();
  const name = location.state;

  if (name === 'Meow-Meow') {
    return(
      <div>
        <main>
          <div className='cat-game'>
            <Container max-Width="sm">
              <Box textAlign='center'>
                <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
                  Challenge Quest
                </Typography>
                <Typography variant="h5" align="center" color="textSecondary" paragraph>
                  Rate your coding skills (0-10)
                </Typography>
                <TextField id="outlined-basic" label="Coding Skills" variant="outlined" onInput={(event) => setCoding(event.target.value)}/>
                <Typography variant="h5" align="center" color="textSecondary" paragraph>
                  Rate your procrastination skills (0-10)
                </Typography>
                <TextField id="outlined-basic" label="Coding Skills" variant="outlined" onInput={(event) => setProcrastination(event.target.value)}/>
                <p></p>
                <Link to={{pathname: '/challenge/1', state: {name: name, skills: {coding: coding, procrastination: procrastination}}}}>
                  <Button variant="contained">Take the challenge</Button>
                </Link>
              </Box>
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
              <Box textAlign='center'>
                <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
                  Challenge Quest
                </Typography>
                <Typography variant="h5" align="center" color="textSecondary" paragraph>
                  Rate your coding skills (0-10)
                </Typography>
                <TextField id="outlined-basic" label="Coding Skills" variant="outlined" onInput={(event) => setCoding(event.target.value)}/>
                <Typography variant="h5" align="center" color="textSecondary" paragraph>
                  Rate your procrastination skills (0-10)
                </Typography>
                <TextField id="outlined-basic" label="Coding Skills" variant="outlined" onInput={(event) => setProcrastination(event.target.value)}/>
                <p></p>
                <Link to={{pathname: '/challenge/1', state: {name: name, skills: {coding: coding, procrastination: procrastination}}}}>
                  <Button variant="contained">Take the challenge</Button>
                </Link>
              </Box>
            </Container>
          </div>
        </main>
      </div>
    )
  }
}

export default ChallengeQuest;
