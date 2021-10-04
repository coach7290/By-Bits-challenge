import axios from 'axios'
import { useEffect, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './components/Login';
import HolderProfile from './components/HolderProfile';

function App() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [dataHolder, setDataHolder] = useState({})

  const getTokenThenData = (username, password) => {
    if (username === '' || password === '') {
      return 'please check your details'
    } else {
      const headers = {
        'environment': 'mock',
        'Content-type': 'application/json'
      };
      axios.post('https://api.bybits.co.uk/auth/token', {
        username: username,
        password: password,
        type: "USER_PASSWORD_AUTH"

      }, { headers })
        .then((response) => {

          axios.get('https://api.bybits.co.uk/policys/details', {
            headers: {
              'environment': 'mock',
              'Content-type': 'application/json',
              'Authorization': `Bearer ${response.data.access_token}`
            }

          })
            .then((response) => {

              setDataHolder(response.data);
            }, (error) => {
              console.log(error);
            });
        });
    }

  }
  return (
    <div className='App'>
      <Switch>
        <Route exact path='/' render={(props) => (
          <Login {...props} username={username} password={password} setUsername={setUsername} setDataHolder={setDataHolder} setPassword={setPassword} getTokenThenData={getTokenThenData} />
        )} />
        <Route exact path='/profile' render={(props) => (
          <HolderProfile {...props} dataHolder={dataHolder} />
        )} />
      </Switch>
    </div>

  );
}

export default App;
