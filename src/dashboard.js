import React from 'react';
import './css/HomePage.css'
import firebase from 'firebase';
import FirebaseConfig from './Config';
import ToggleAuth from './ToggleAuth';
import SignUp from './SignUp';
import SignIn from './SignIn';
import SignOut from './SignOut';
import RequestForm from './request-form';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import { Router, hashHistory } from 'react-router';
import About from './About';

var DashBoard = React.createClass({
    getInitialState(){
        
        return{checked:false, 
               user:null, authOption:'sign-in'}
    },

    componentDidMount(){
        this.requestRef = firebase.database().ref('requests');
        this.reviewRef.on('value', (snapshot) => {
            if(snapshot.val()){
                this.setState({requests:snapshot.val()});
            }
        });   

    },

    createRequest(event){
        event.preventDefault();
        //this.setState({reviewed:!this.state.reviewed});
        //console.log(this.state.reviewed);

        let isRequest = {
            //company:this.props.companyName,
            item:event.target.elements['item'].value,
            quantityNeeded:event.target.elements['quantity'].value,
            stock:event.target.elements['stock'].value,
            date:event.target.elements['date'].value
        };

        this.requestRef.push(isRequest);
        event.target.reset();

    },


    render(){

        return(

                    <div className="mainPage">
                        <RequestForm handleSubmit={this.createRequest}/>
                        <div className="searchArea">
                            <p>test</p>

                        </div>
                    </div>
            
        );
    }

});


export default DashBoard;