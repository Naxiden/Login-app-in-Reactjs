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

const email = this.refs.email.value;
const password = this.refs.password.value;
console.log(email, password)

const auth = firebase.auth()
const promise = auth.signInWithEmailAndPassword(email, password);

promise.then(user => {
  var lout = document.getElementById('logout');
  var err = "Welcome in Our Site "+ user.email
  lout.classList.remove('hide');
  this.setState({err: err})

})

promise.catch(e => {
  var err = e.message;
console.log(err);
this.setState({err:err});

})

}

signup(){

  const email = this.refs.email.value;
  const password = this.refs.password.value;
  console.log(email, password)

  const auth = firebase.auth();
    const promise =  auth.createUserWithEmailAndPassword(email, password);

    promise
    .then(user =>{
      var err = "Welcome"+ user.email;
      firebase.database().ref('/users'+user.uid).set({
        email: user.email
      });
      console.log(user)
      this.setState({err: err});
    });
    promise
    .catch(e =>{
      var err = e.message;
      console.log( err);
      this.setState({
        err: err
      })
    });

}

logout(){
  firebase.auth().signOut();
  var lout = document.getElementById('logout');
  lout.classList.add('hide');
  this.setState({err:'logout successful, thanks for visit'})
}

  constructor(props){
    super(props);

    this.state = {
      err:''
    };
    this.login = this.login.bind(this);
    this.signup = this.signup.bind(this);
    this.logout = this.logout.bind(this);
    this.google = this.google.bind(this);
  }

google(){
  console.log("am from google");

var provider = new firebase.auth.GoogleAuthProvider();
var promise = firebase.auth().signInWithPopup(provider);

promise.then(result=>{
  var user = result.user;
  firebase.database().ref('users/'+user.uid).set({
  email:user.email,
  name:user.displayName})
})
promise.catch(e=>{
  var err = e.message
  console.log(err)
})
}


  render(){
    return(
      <div>
        <h2>Welcom in ReactJS login app</h2>
        <input id="email" ref="email" type="email" placeholder="Enter your email" /><br />
        <input id="pass" ref="password" type="password" placeholder="Enter your password" /><br />
        <p>{this.state.err}</p>
        <button onClick={this.login}>Log in</button>
        <button onClick={this.signup}>Sing up</button>
        <button onClick={this.logout} id="logout" className="hide">Log out</button>
        <button onClick={this.google} id="google" className="google">Sign up with google</button>
      </div>
    );
  }
}
export default Authen;
