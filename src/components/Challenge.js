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

  const location = useLocation();
  const name = location.state.name;
  const skills = location.state.skills;

  const _handleClick = () => {
    if (parseInt(skills) > 5) {
      props.history.push({pathname: pathSuccess, state: {name: name, skills: skills}});
    } else {
      props.history.push({pathname: pathFailure, state: {name: name, skills: skills}});
    }
  };

  return(
    <div>
    <main>
      <div>
        <Container max-Width="sm">
          <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
            {quest}
          </Typography>
          <Box textAlign ='center'>

            <Typography variant="body1" align="center" color="textSecondary" paragraph>
              {decisionText}
            </Typography>

            <Typography variant="h5" align="center" paragraph>
              Challenge!
            </Typography>

            <Button variant="contained" onClick={_handleClick}>Take Challenge</Button>
          </Box>
        </Container>
      </div>
    </main>
    </div>
  )
}

export default withRouter(Challenge);
