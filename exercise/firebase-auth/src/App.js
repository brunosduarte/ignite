import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import * as FirebaseController from './components/firebaseController'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  
  async function onButtonSignInClicked() {
    setErrorMessage('')
    try { 


      await FirebaseController.signin(email, password)
      setIsAuthenticated(true)
    } catch (error) {
      console.error(error)
      setErrorMessage(error)
    }
  }
  async function onButtonSignUpClicked() {
    setErrorMessage('')
    try {
      await FirebaseController.signup(email, password)
      setIsAuthenticated(true)
      
    } catch (error) {
      console.error(error)
      setErrorMessage(error)
    }
  }
  async function onButtonResetPasswordClicked() {
    setErrorMessage('')
    try {
      await FirebaseController.resetPassword(email)
    } catch (error) {
      console.error(error)
      setErrorMessage(error)
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          { !isAuthenticated && (
            <div className="loginPage">
              <div className="inputs">
                <input onChange={event => setEmail(event.target.value)} placeholder="email" type="email" />
                <br/>
                <input onChange={event => setPassword(event.target.value)} placeholder="password" type="password"/>
              </div>
              <div className="buttons">
                <button onClick={onButtonSignInClicked}>Sign In</button>
                <br />
                <button onClick={onButtonSignUpClicked}>Sign Up</button>
                <br />
                <button onClick={onButtonResetPasswordClicked}>Reset Password Up</button>
              </div>
            </div>
          )}
          { isAuthenticated && (
            <div className="authPage">
              <h3>User authenticated</h3>
              <span> User email: {email}</span>
            </div>
          )}
          { errorMessage && (<span>Erro { errorMessage }</span>)}
        
      </header>
    </div>
  );
}

export default App;
