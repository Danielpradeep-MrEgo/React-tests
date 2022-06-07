import React from 'react';
import { render } from 'react-dom';
import SpeechSynthesisExample from './useSpeechSynthesis';
import SpeechRecognitionExample from './useSpeechRecognition';
import { GlobalStyles, Row, GitLink, Title } from './shared';


const App = () => (
  <div>
    <GlobalStyles />
    <Row>
      <SpeechSynthesisExample />
      <SpeechRecognitionExample />
    </Row>
  </div>
);

render(<App />, document.getElementById('root'));
