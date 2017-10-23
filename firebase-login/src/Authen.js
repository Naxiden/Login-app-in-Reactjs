import React, {Component} from 'react'
var firebase = require ('firebase');
var config = {
    apiKey: "AIzaSyAW0vOVVTE3HeIjyCAHqxhvfJdUR47uP88",
    authDomain: "fire-1d136.firebaseapp.com",
    databaseURL: "https://fire-1d136.firebaseio.com",
    projectId: "fire-1d136",
    storageBucket: "fire-1d136.appspot.com",
    messagingSenderId: "710766951889"
  };
  firebase.initializeApp(config);

class Authen extends Component {
  render(){
    return(
      <div>
        <h2>Am from Authen dang yo</h2>
        <input id="email" ref="email" type="email" placeholder="Enter your email" /><br />
        <input id="pass" ref="password" type="password" placeholder="Enter your password" /><br />
      </div>
    );
  }
}
export default Authen;
