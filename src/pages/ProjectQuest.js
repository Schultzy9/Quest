import React, { useState } from 'react';

import { Typography, Container, Button, Box, TextField} from '@material-ui/core';

import { Link, useLocation } from 'react-router-dom';

const ProjectQuest = () => {

  const [skills, setSkills] = useState('0');

  const location = useLocation();
  const name = location.state;

    return(
      <div>
        <main>
          <div>
            <Container max-Width="sm">
              <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
                Project Quest
              </Typography>
              <Box textAlign ='center'>

                <Typography variant="h5" align="center" color="textSecondary" paragraph>
                  Rate your programming skills:
                </Typography>
                <TextField id="outlined-basic" label="Skills" variant="outlined" onInput={(event) => setSkills(event.target.value)}/>

                <Typography variant="h5" align="center" color="textSecondary" paragraph>
                  Begin your quest.
                </Typography>

                <Link to={{pathname: '/choice/1', state: {name: name, skills: skills}}}>
                  <Button variant="contained">Let's do this!</Button>
                </Link>
              </Box>
            </Container>
          </div>
        </main>
      </div>
    )

}

export default ProjectQuest;
