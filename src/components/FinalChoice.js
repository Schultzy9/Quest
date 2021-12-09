import { Typography, Container, Button, Box} from '@material-ui/core';
import { Data } from '../data/data';

import { withRouter } from 'react-router-dom';

const FinalChoice = (props) => {
  const id = props.match.params.id;
  const quest = Data[id].quest;
  let decisionText = Data[id].info.decisionText;
  let choiceOne = Data[id].info.choiceOne.text;

  const _handleClick1 = () => {
    props.history.push('/');
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

            <Button variant="contained" onClick={_handleClick1}>{choiceOne}</Button>
          </Box>
        </Container>
      </div>
    </main>
    </div>
  )
}

export default withRouter(FinalChoice);
