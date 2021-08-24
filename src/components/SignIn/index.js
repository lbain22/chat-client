import React from 'react';
import {signInWithGoogle} from '../../Firebase/firebase';

function SignIn() {  
    //this needs to be in an async function in your Group rooms
    // const usersRef = firestore.collection('users');
    // const snapshot = await usersRef.where('uid', '==', user.uid);
    // if(snapshot.empty) {
    //   //create one then regrab data
    //   console.log("nothing")
    // }
    // //else get all data for groups for that user
  
    return (
      <>
        <button className="sign-in" onClick={signInWithGoogle}>Sign in with Google</button>
        <p>Press button to login</p>
      </>
    )
  }
  

  export default SignIn