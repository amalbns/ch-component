import React from 'react';
import './App.css';
import Adress from './Component/Profile/Adress';
import FullName from './Component/Profile/FullName';
import ProfilePhoto from './Component/Profile/ProfilePhoto';
import { Navbar,Container}from 'react-bootstrap'

function App() {
  return (
    <div className="App">
      <Container>
  <Navbar expand="lg" variant="dark" bg="dark">
    <Container>
      <Navbar.Brand href="#">Workshop Component</Navbar.Brand>
    </Container>
  </Navbar>
</Container>
<br/>
<br>
</br>

      <ProfilePhoto/>
      <br>
      </br>
      <FullName/>
      <br>
      </br>
      <Adress/>
      
    </div>
  );
}

export default App;
