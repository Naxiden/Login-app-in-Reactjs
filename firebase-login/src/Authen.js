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

login(event) {
//TODO: HANDLE PROMISE LOG IN
const email = this.refs.email.value;
const password = this.refs.password.value;
console.log(email, password)

const auth = firebase.auth()
const promise = auth.signInWithEmailAndPassword(email, password);
promise.catch(e => {
  var err = e.message;
console.log(err);
this.setState({err:err});

})

}

  constructor(props){
    super(props);

    this.state = {
      err:''
    };
    this.login = this.login.bind(this);
  }



  render(){
    return(
      <div>
        <h2>Am from Authen dang yo</h2>
        <input id="email" ref="email" type="email" placeholder="Enter your email" /><br />
        <input id="pass" ref="password" type="password" placeholder="Enter your password" /><br />
        <p>{this.state.err}</p>
        <button onClick={this.login}>Log in</button>
        <button>Sing up</button>
        <button>Log out</button>
      </div>
    );
  }
}
export default Authen;
