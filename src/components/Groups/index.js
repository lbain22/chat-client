import React from 'react';
import {auth, firestore} from '../../Firebase/firebase';



async function getUserData(userID){
    const data = {
        groups: [],
    }
    const userRef = firestore.collection('users').doc(userID);
    const doc = await userRef.get();
    if (!doc.exists) {
    console.log('No such document!');
        firestore.collection('users').doc(userID).set(data);
    } else {
    console.log('Document data:', doc.data());
    }
    }

function Groups() {

    auth.onAuthStateChanged(user => {
        if (user) {
            getUserData(user.uid)
        }
    })

    return (<> </>)
}

export default Groups