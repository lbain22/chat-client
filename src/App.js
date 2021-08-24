import React from 'react';
import './App.css';

import {auth} from './Firebase/firebase';

import { useAuthState } from 'react-firebase-hooks/auth';
import ChatRoom from './components/ChatRoom'
import SignIn from './components/SignIn'


function App() {

  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <header>
        <h1>Messenger Service</h1>
        <SignOut />
      </header>

      <section>
        {user ? <ChatRoom /> : <SignIn />}
      </section>

      
    </div>
  );
}

function SignOut() {
  return auth.currentUser && (
    <button className="sign-out" onClick={() => auth.signOut()}>Sign Out</button>
  )
}

// function

function Groups(props) {
}



export default App;
