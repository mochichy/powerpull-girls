import React from 'react';
import './css/HomePage.css'
import firebase from 'firebase';
import FirebaseConfig from './Config';
import ToggleAuth from './ToggleAuth';
import SignUp from './SignUp';
import SignIn from './SignIn';
import SignOut from './SignOut';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import { Router, hashHistory } from 'react-router';
import About from './About';

var HomePage = React.createClass({
	getInitialState(){
		
		return{data:[], searchString:'', targetCourse:[], checked:false, 
			   user:null, authOption:'sign-in', hasCourse:false, hasResult:true,
			   showCourses:false


			}
	},

	componentDidMount(){
		var self = this;

		if (firebase.apps.length === 0) {
			 // Initialize app
	        firebase.initializeApp(FirebaseConfig);

	        // Check for authentication state change (test if there is a user)
	        firebase.auth().onAuthStateChanged((user) => {
	            if (this.state.checked !== true) {
	                if(user) {
	                    this.setState({user:user})
	                }
	            }

	            // Indicate that state has been checked
	            this.setState({checked:true})
	        });
			
		} 

	},

	 // Sign up for an account
    signUp(event){
        event.preventDefault();

        // Get form values
        let email = event.target.elements['email'].value;
        let password = event.target.elements['password'].value;
        let displayName = event.target.elements['displayName'].value;

        // Remember to enable email/password authentication on Firebase!
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((user) => {
                user.updateProfile({
                    displayName: displayName
                }).then(() => {
                    this.setState({user:firebase.auth().currentUser});
                })
            });

        // Reset form
        event.target.reset();
    },

    // Sign into an account
    signIn (event){
        event.preventDefault();

        // Get form values
        let email = event.target.elements['email'].value;
        let password = event.target.elements['password'].value;

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((user) => {
                this.setState({user:firebase.auth().currentUser});
            });

        // Clear form
        event.target.reset();

    },

    // Sign out of an account
    signOut() {
        firebase.auth().signOut().then(() => {
            this.setState({authOption:'sign-in'});
            this.setState({user:false});
            this.setState({hasCourse:false});
        });
    },

    // Toggle between 'sign-up' and 'sign-in'
    toggleLogin() {
        let option = this.state.authOption === 'sign-in' ? 'sign-up' : 'sign-in';
        this.setState({authOption:option});
    },




	render(){


		// Determine which 'authenticate' component should be shown
        if(this.state.authOption === 'sign-up') {
            var authComponent = <SignUp submit={this.signUp}/>
        }
        else {
             authComponent = <SignIn submit={this.signIn}/>
        }
		return(
				<div>
				<About/>

					{!this.state.user &&
	                    <div>
	                        {authComponent}
	                        <ToggleAuth handleClick={this.toggleLogin} authOption={this.state.authOption} />
	                    </div>
                	}

                	{this.state.user &&
	                    <SignOut submit={this.signOut}/>
	                      
         			}

                	{this.state.user && !this.state.hasCourse &&

                	<div className="mainPage">
	                	<div className="searchArea">
	                		<p>test</p>

						</div>
					</div>
					}
					
	        </div>
		);
	}

});


export default HomePage;