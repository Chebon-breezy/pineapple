import React from "react";
import StyledFirebaseAuth from "react-firebaseui";
import firebase from "../firebase/clientApp";

// Configure FirebaseUI
const uiConfig = {
    //Redirect to / after  sign in is successful. Alternatively you can provide a callback 
    signInSuccessfulUrl: "/",
    // we will display github as auth providers.
    signInOptions: [firebase.auth.GithubAuthProvider.PROVIDER_ID],
};