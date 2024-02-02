import './App.css';
import jar from './img/jar.png';
import { useState } from "react";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, query, where, getDocs, updateDoc, limit, doc } from "@firebase/firestore"
import { getAuth, signInWithEmailAndPassword, setPersistence, browserSessionPersistence } from "@firebase/auth"

function App() {

  //Initializes connection to Firebase project
  const firebaseConfig = {
      apiKey: "AIzaSyC7XwxE8YhVfBzqJrEShk7PSEtb3OWml3g",
      authDomain: "savannah-gift-jar.firebaseapp.com",
      projectId: "savannah-gift-jar",
      storageBucket: "savannah-gift-jar.appspot.com",
      messagingSenderId: "752999555951",
      appId: "1:752999555951:web:ce9033783b673420b63e9a"
    };
  initializeApp(firebaseConfig);

  //Handles the authentication with Firebase 
  const auth = getAuth();
  function handleLogin(e) {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    setPersistence(auth, browserSessionPersistence)
      .then(() => {
        return signInWithEmailAndPassword(auth, email, password)
        .then(() => {
          console.log("User logged in");
          e.target.email.value = "";
          e.target.password.value = "";
        })
        .catch((err) => {
          console.log(err.message);
        });
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  //Sets up the DB connection and collection references to Firebase Firestore DB
  const db = getFirestore();
  const redColRef = collection(db, "redslip");
  const yellowColRef = collection(db, "yellowslip");
  const purpleColRef = collection(db, "purpleslip");
  const greenColRef = collection(db, "greenslip");
  const blueColRef = collection(db, "blueslip");

  //Sets up the DB queries for each slip for ones that haven't been read
  const redQuery = query(redColRef, where("read", "==", false), limit(1));
  const yellowQuery = query(yellowColRef, where("read", "==", false), limit(1));
  const purpleQuery = query(purpleColRef, where("read", "==", false), limit(1));
  const greenQuery = query(greenColRef, where("read", "==", false), limit(1));
  const blueQuery = query(blueColRef, where("read", "==", false), limit(1));

  //Veriables for handling slip rendering
  const [red_show, setRedShow] = useState(true);
  const [yellow_show, setYellowShow] = useState(true);
  const [purple_show, setPurpleShow] = useState(true);
  const [green_show, setGreenShow] = useState(true);
  const [blue_show, setBlueShow] = useState(true);

  //Variables for setting dynamic values on the slips
  const [red_text, setRedText] = useState('');
  const [yellow_text, setYellowText] = useState('');
  const [purple_text, setPurpleText] = useState('');
  const [green_text, setGreenText] = useState('');
  const [blue_text, setBlueText] = useState('');
  const [green_link, setGreenLink] = useState('');

  //Functions for rendering the different colored slips
  function SlipRed(props) {
    return (
      <div style={{ visibility: props.status ? "hidden" : "visible" }} className="Slip-red">
        <h3>
          One reason that I love you...
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
          One thing I'm looking forward to with you...
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
        One memory I look back fondly on with you...
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
        One song that reminds me of you...
      </h3>
      <a href={green_link}>
        {green_text}
      </a>
    </div>
    );
  }

  function SlipBlue(props) {
    return (
      <div style={{ visibility: props.status ? "hidden" : "visible" }} className="Slip-blue">
      <h3>
        One joke that reminds me of you...
      </h3>
      <p>
        {blue_text}
      </p>
    </div>
    );
  }

  //Functions for populating and showing the slips
  function handleRedClick() {
    getDocs(redQuery)
      .then((snapshot) => {
        snapshot.docs.forEach((document) => {
          console.log(document.data());
          setRedText(document.data().text);
          const docRef = doc(db, "redslip", document.id);
          updateDoc(docRef, {
            read: true
          });
        });
        if(red_show) {
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
        if(!blue_show) {
          setBlueShow(!blue_show);
        }
      })
      .catch(err => {
        console.log(err.message)
      });
  }

  function handleYellowClick() {
    getDocs(yellowQuery)
      .then((snapshot) => {
        snapshot.docs.forEach((document) => {
          console.log(document.data());
          setYellowText(document.data().text);
          const docRef = doc(db, "yellowslip", document.id);
          updateDoc(docRef, {
            read: true
          });
        });
        if(yellow_show) {
          setYellowShow(!yellow_show);
        }
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
      })
      .catch(err => {
        console.log(err.message)
      });
  }

  function handlePurpleClick() {
    getDocs(purpleQuery)
      .then((snapshot) => {
        snapshot.docs.forEach((document) => {
          console.log(document.data());
          setPurpleText(document.data().text);
          const docRef = doc(db, "purpleslip", document.id);
          updateDoc(docRef, {
            read: true
          });
        });
        if(purple_show) {
          setPurpleShow(!purple_show);
        }
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
      })
      .catch(err => {
        console.log(err.message)
      });
  }

  function handleGreenClick() {
    getDocs(greenQuery)
      .then((snapshot) => {
        snapshot.docs.forEach((document) => {
          console.log(document.data());
          setGreenText(document.data().text);
          setGreenLink(document.data().link);
          const docRef = doc(db, "greenslip", document.id);
          updateDoc(docRef, {
            read: true
          });
        });
        if(green_show) {
          setGreenShow(!green_show);
        }
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
      })
      .catch(err => {
        console.log(err.message)
      });
  }

  function handleBlueClick() {
    getDocs(blueQuery)
      .then((snapshot) => {
        snapshot.docs.forEach((document) => {
          console.log(document.data());
          setBlueText(document.data().text);
          const docRef = doc(db, "blueslip", document.id);
          updateDoc(docRef, {
            read: true
          });
        });
        if(blue_show) {
          setBlueShow(!blue_show);
        }
        if(!red_show) {
          setRedShow(!red_show);
        }
        if(!yellow_show) {
          setYellowShow(!yellow_show);
        }
        if(!green_show) {
          setGreenShow(!green_show);
        }
        if(!purple_show) {
          setBlueShow(!purple_show);
        }
      })
      .catch(err => {
        console.log(err.message)
      });
  }

  //Renders the display
  return (
    <div class="App">
      <header class="App-header">
        <p>
          Savannah's Paper Slip Jar
        </p>
        <form class="login" onSubmit={handleLogin}>
          <label for="email">Email:</label>
          <input type="email" name="email"></input>
          <label className="Form-login-password" for="password">Password:</label>
          <input type="password" name="password"></input>
          <button className="Form-login-button">Login</button>
        </form>
        <div className="App-middle">
          <img src={jar} className="App-jar" alt="jar" />
          <div>
            <ul className="App-bullet">
              <li><div className="App-bullet-red"></div> Red - Things I Love About You</li>
              <li><div className="App-bullet-yellow"></div> Yellow - Things I'm Looking Forward To With You</li>
              <li><div className="App-bullet-purple"></div> Purple - Things I Remember Fondly With You</li>
              <li><div className="App-bullet-green"></div> Green - Songs That Remind Me Of You</li>
              <li><div className="App-bullet-blue"></div> Blue - Jokes That Remind Me Of You</li>
            </ul>
          </div>
        </div>
        <SlipRed status={red_show} />
        <SlipYellow status={yellow_show} />
        <SlipPurple status={purple_show} />
        <SlipGreen status={green_show} />
        <SlipBlue status={blue_show} />
        <div>
          <button className="App-button App-button-red" onClick={handleRedClick}>Pull a Red Slip</button>
          <button className="App-button App-button-yellow" onClick={handleYellowClick}>Pull a Yellow Slip</button>
          <button className="App-button App-button-purple" onClick={handlePurpleClick}>Pull a Purple Slip</button>
          <button className="App-button App-button-green" onClick={handleGreenClick}>Pull a Green Slip</button>
          <button className="App-button App-button-blue" onClick={handleBlueClick}>Pull a Blue Slip</button>
        </div>
      </header>
    </div>
  );
}

export default App;