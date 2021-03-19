import React, { useState, useEffect } from 'react'
import { Switch, Redirect, Router, Route } from 'react-router-dom';
import axios from 'axios';

import Navbar from './components/Navbar'
import AuthForm from './components/AuthForm';
import Home from './components/Home';

const App = () => {

  const [auth, setAuth] = useState({});

  useEffect(()=> {
    loginFromToken();
  }, []);

  useEffect(()=> {
    console.log(`auth id changed ${auth.id}`);
  }, [auth.id]);

  const isLoggedIn = !!auth.id;

  const loginFromToken = async()=> {
    const token = window.localStorage.getItem('token')
    if(token){
      const { data } = await axios.get('/auth/me', {
        headers: {
          authorization: token
        }
      });
      setAuth(data);
    }
  };

  const authenticate  = async({ credentials, method })=> {
    const response = await axios.post(`/auth/${ method }`, credentials)
    const { token } = response.data;
    window.localStorage.setItem('token', token)
    loginFromToken();
  };


  const login = (credentials)=> {
    return authenticate({ method: 'login', credentials});
  };

  const signup = (credentials)=> {
    return authenticate({ method: 'signup', credentials});
  };

  const logout = (history)=> {
    window.localStorage.removeItem('token');
    setAuth({});
    history.push('/login');
  };

  return (
    <div>
      <Route render={(props)=> <Navbar {...props} isLoggedIn={ isLoggedIn } logout={ logout }/>} />
      <div>
        {isLoggedIn ? (
          <Switch>
            <Route path="/home" render={()=> <Home auth={ auth }/>} />
            <Redirect to="/home" />
          </Switch>
        ) : (
          <Switch>
            <Route path="/login"
              render={ ()=> <AuthForm displayName='Login' handleSubmit={ login }/>}/>
            />
            <Route path="/signup"
              render={ ()=> <AuthForm displayName='Signup' handleSubmit={ signup }/>}/>
            />
          </Switch>
        )}
      </div>
    </div>
  )
}

export default App
