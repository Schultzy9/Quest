import { withRouter, useLocation } from 'react-router-dom';

import { Typography, Container, Button, Box} from '@material-ui/core';
import { Data } from '../data/data';

const Choice = (props) => {
  const id = props.match.params.id;
  const quest = Data[id].quest;
  let decisionText = Data[id].info.decisionText;
  let choiceOne = Data[id].info.choiceOne.text;
  let choiceTwo = Data[id].info.choiceTwo.text;
  let path1 = Data[id].info.choiceOne.path;
  let path2 = Data[id].info.choiceTwo.path;

  const location = useLocation();
  const name = location.state;

  const _handleClick1 = () => {
    props.history.push({pathname: path1, state: name});
  };

  const _handleClick2 = () => {
    props.history.push({pathname: path2, state: name});
  };

  const catPic = 'https://cataas.com/cat';

  if (name === 'Meow-Meow') {
    return(
      <div>
      <main>
        <div className='cat-game'>
          <Container max-Width="sm">
            <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
              Meow-Meow-Meow
            </Typography>
            <Box textAlign ='center'>

            <img src={catPic} alt='cat'></img>

              <Typography variant="body1" align="center" color="textSecondary" paragraph>
                {decisionText}
              </Typography>

              <Typography variant="h5" align="center" color="textSecondary" paragraph>
                Make your decision {name}
              </Typography>

              <Button variant="contained" onClick={_handleClick1}>{choiceOne}</Button>
              <p></p>
              <Button variant="contained" onClick={_handleClick2}>{choiceTwo}</Button>
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

              <Typography variant="body1" align="center" color="textSecondary" paragraph>
                {decisionText}
              </Typography>

              <Typography variant="h5" align="center" color="textSecondary" paragraph>
                Make your decision {name}
              </Typography>

              <Button variant="contained" onClick={_handleClick1}>{choiceOne}</Button>
              <p></p>
              <Button variant="contained" onClick={_handleClick2}>{choiceTwo}</Button>
            </Box>
          </Container>
        </div>
      </main>
      </div>
    )
  }
}

export default withRouter(Choice);
