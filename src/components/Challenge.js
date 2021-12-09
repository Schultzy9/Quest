import { Typography, Container, Button, Box} from '@material-ui/core';
import { ChallengeData } from '../data/data';

import { withRouter, useLocation } from 'react-router-dom';

const Challenge = (props) => {
  //This needs to be more dynamic
  const id = props.match.params.id;
  const quest = ChallengeData[id].quest;
  let decisionText = ChallengeData[id].info.decisionText;
  let pathSuccess = ChallengeData[id].info.success.path;
  let pathFailure = ChallengeData[id].info.failure.path;
  let reqSkill = ChallengeData[id].info.success.reqSkill;
  let reqResult = ChallengeData[id].info.success.reqResult;

  const location = useLocation();
  const name = location.state.name;
  let coding = location.state.skills.coding;
  let procrastination = location.state.skills.procrastination;

  if (isNaN(coding) || coding > 10 || coding < 0) {
    coding = 0;
  }
  if (isNaN(procrastination) || procrastination > 10 || procrastination < 0) {
    procrastination = 0;
  }


  const _handleClick = () => {
    if ((reqSkill === 'coding' && coding >= reqResult) || (reqSkill === 'procrastination' && procrastination <= reqResult)) {
      props.history.push({pathname: pathSuccess, state: {name: name, skills: {coding: coding, procrastination: procrastination}}});
    } else {
      props.history.push({pathname: pathFailure, state: {name: name, skills: {coding: coding, procrastination: procrastination}}});
    }
  };

  if (name === 'Meow-Meow') {
    return(
      <div>
      <main>
        <div className='cat-game'>
          <Container max-Width="sm">
            <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
              {quest}
            </Typography>
            <Box textAlign ='center'>
              <Typography variant="h5" align="center" paragraph>
                Name: {name} <p></p>
                Coding: {coding} <p></p>
                Procrastination: {procrastination} <p></p>
              </Typography>

              <Typography variant="body1" align="center" color="textSecondary" paragraph>
                {decisionText}
              </Typography>

              <Button variant="contained" onClick={_handleClick}>Take Challenge</Button>
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
            <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
              {quest}
            </Typography>
            <Box textAlign ='center'>
              <Typography variant="h5" align="center" paragraph>
                Name: {name} <p></p>
                Coding: {coding} <p></p>
                Procrastination: {procrastination} <p></p>
              </Typography>

              <Typography variant="body1" align="center" color="textSecondary" paragraph>
                {decisionText}
              </Typography>

              <Button variant="contained" onClick={_handleClick}>Take Challenge</Button>
            </Box>
          </Container>
        </div>
      </main>
      </div>
    )
  }

}

export default withRouter(Challenge);
