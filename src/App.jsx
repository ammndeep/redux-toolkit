import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './components/Header';
import DisplayCounter from './components/DisplayCounter';
import Container from './components/Container';
import Controls from './components/Controls';
import './App.css'
import { useSelector } from 'react-redux';
import PrivacyMessage from './components/PrivacyMessage';

const App = () => {
  const privacy = useSelector(store => store.privacy);
  const darkMode = useSelector(store => store.darkMode);


  return (
    <center className={` px-4 py-2 my-2 text-center main-div ${darkMode ? 'Dark-mode' : 'Light-mode'}`}>
      <h1 className='my-2 display-4 fw-bold text-primary '>Redux-Toolkit</h1>
      <Container>
        <Header></Header>
        <div className="col-lg-6 mx-auto">
          {privacy ? <PrivacyMessage /> : <DisplayCounter />}
          <Controls></Controls>
        </div>
      </Container>
    </center>
  )
}

export default App
