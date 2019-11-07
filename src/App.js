import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';


function App() {

  const [info, setInfo] = useState([]);

  useEffect(() => {
    axios
      .get('https://api.nasa.gov/planetary/apod?api_key=N4519RdUehpfAWJG2jzXkHzaFDfxhGf3tAfrvg8T')
      .then(response => {
        console.log(response);
        setInfo(response.data)
      })
      .catch(err => {
        console.log('Oops', err);
      })
  },[])

  return (
    <div>
      {/* <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p> */}

      <Header date={info.date} />
      <Body url={info.url} explanation={info.explanation} />
      <Footer />

    </div>
  );
}

export default App;
