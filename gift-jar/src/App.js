import './App.css';
import jar from './img/jar.png';
import { useState } from "react";

function App() {

  const [red_show, setRedShow] = useState(true);
  const [yellow_show, setYellowShow] = useState(true);
  const [purple_show, setPurpleShow] = useState(true);
  const [green_show, setGreenShow] = useState(true);
  const [blue_show, setBlueShow] = useState(true);

  const [red_text, setRedText] = useState('');
  const [yellow_text, setYellowText] = useState('');
  const [purple_text, setPurpleText] = useState('');
  const [green_text, setGreenText] = useState('');
  const [blue_text, setBlueText] = useState('');

  const red_words = [{text: "Message 1"}, {text: "Message 2"}, {text: "Message 3"}, {text: "Message 4"}, {text: "Message 5"}];
  const yellow_words = [{text: "Message 1"}, {text: "Message 2"}, {text: "Message 3"}, {text: "Message 4"}, {text: "Message 5"}];
  const purple_words = [{text: "Message 1"}, {text: "Message 2"}, {text: "Message 3"}, {text: "Message 4"}, {text: "Message 5"}];
  const green_words = [{text: "Message 1"}, {text: "Message 2"}, {text: "Message 3"}, {text: "Message 4"}, {text: "Message 5"}];
  const blue_words = [{text: "Message 1"}, {text: "Message 2"}, {text: "Message 3"}, {text: "Message 4"}, {text: "Message 5"}];

  function SlipRed(props) {
    return (
      <div style={{ visibility: props.status ? "hidden" : "visible" }} className="Slip-red">
        <h3>
          RED MESSAGE HEADER
        </h3>
        <p>
          {red_text}
        </p>
      </div>
    );
  }

  function SlipYellow(props) {
    return (
      <div style={{ visibility: props.status ? "hidden" : "visible" }} className="Slip-yellow">
        <h3>
          YELLOW MESSAGE HEADER
        </h3>
        <p>
          {yellow_text}
        </p>
      </div>
    );
  }

  function SlipPurple(props) {
    return (
      <div style={{ visibility: props.status ? "hidden" : "visible" }} className="Slip-purple">
      <h3>
        PURPLE MESSAGE HEADER
      </h3>
      <p>
        {purple_text}
      </p>
    </div>
    );
  }

  function SlipGreen(props) {
    return (
      <div style={{ visibility: props.status ? "hidden" : "visible" }} className="Slip-green">
      <h3>
        GREEN MESSAGE HEADER
      </h3>
      <p>
        {green_text}
      </p>
    </div>
    );
  }

  function SlipBlue(props) {
    return (
      <div style={{ visibility: props.status ? "hidden" : "visible" }} className="Slip-blue">
      <h3>
        BLUE MESSAGE HEADER
      </h3>
      <p>
        {blue_text}
      </p>
    </div>
    );
  }

  function handleRedClick() {
    var len = red_words.length;
    setRedText(red_words[Math.floor(Math.random() * len)].text);
    setRedShow(!red_show);
    if(!yellow_show) {
      setYellowShow(!yellow_show);
    }
    if(!purple_show) {
      setPurpleShow(!purple_show);
    }
    if(!green_show) {
      setGreenShow(!green_show);
    }
    if(!blue_show) {
      setBlueShow(!blue_show);
    }
  }

  function handleYellowClick() {
    var len = yellow_words.length;
    setYellowText(yellow_words[Math.floor(Math.random() * len)].text);
    setYellowShow(!yellow_show);
    if(!red_show) {
      setRedShow(!red_show);
    }
    if(!purple_show) {
      setPurpleShow(!purple_show);
    }
    if(!green_show) {
      setGreenShow(!green_show);
    }
    if(!blue_show) {
      setBlueShow(!blue_show);
    }
  }

  function handlePurpleClick() {
    var len = purple_words.length;
    setPurpleText(purple_words[Math.floor(Math.random() * len)].text);
    setPurpleShow(!purple_show);
    if(!red_show) {
      setRedShow(!red_show);
    }
    if(!yellow_show) {
      setYellowShow(!yellow_show);
    }
    if(!green_show) {
      setGreenShow(!green_show);
    }
    if(!blue_show) {
      setBlueShow(!blue_show);
    }
  }

  function handleGreenClick() {
    var len = green_words.length;
    setGreenText(green_words[Math.floor(Math.random() * len)].text);
    setGreenShow(!green_show);
    if(!red_show) {
      setRedShow(!red_show);
    }
    if(!yellow_show) {
      setYellowShow(!yellow_show);
    }
    if(!purple_show) {
      setPurpleShow(!purple_show);
    }
    if(!blue_show) {
      setBlueShow(!blue_show);
    }
  }

  function handleBlueClick() {
    var len = blue_words.length;
    setBlueText(blue_words[Math.floor(Math.random() * len)].text);
    setBlueShow(!blue_show);
    if(!red_show) {
      setRedShow(!red_show);
    }
    if(!yellow_show) {
      setYellowShow(!yellow_show);
    }
    if(!purple_show) {
      setPurpleShow(!purple_show);
    }
    if(!green_show) {
      setGreenShow(!green_show);
    }
  }

  return (
    <div class="App">
      <header class="App-header">
        <p>
          Savannah's Paper Slip Jar
        </p>
        <img src={jar} class="App-jar" alt="jar" />
        <SlipRed status={red_show} />
        <SlipYellow status={yellow_show} />
        <SlipPurple status={purple_show} />
        <SlipGreen status={green_show} />
        <SlipBlue status={blue_show} />
        <div>
          <button class="App-button App-button-red" onClick={handleRedClick}>Pull a Red Slip</button>
          <button class="App-button App-button-yellow" onClick={handleYellowClick}>Pull a Yellow Slip</button>
          <button class="App-button App-button-purple" onClick={handlePurpleClick}>Pull a Purple Slip</button>
          <button class="App-button App-button-green" onClick={handleGreenClick}>Pull a Green Slip</button>
          <button class="App-button App-button-blue" onClick={handleBlueClick}>Pull a Blue Slip</button>
        </div>
      </header>
    </div>
  );
}

export default App;