import React from 'react';
import axios from 'axios';
import {genFeedbackMessage} from '../helpers/helpers';

const Result = (props) => {
  const [highScores, setHighScores] = React.useState([]);

  const fetchHighScores = () => {
    axios
      .get('/high-scores')
      .then(response => setHighScores(response.data))
      .catch(err => console.log(err));
  };

  const mappedHighScores = highScores.map((highScore) => {
    return <li key={highScore.id}>{highScore.name}: {highScore.points}</li>;
  });

  return(
    <footer data-testid="result_footer">
      <h2>{ genFeedbackMessage(props.status) }</h2>
      <button onClick={fetchHighScores} data-testid="high-scores">High Scores!</button>
      { mappedHighScores }
    </footer>
  );
};

export default Result;