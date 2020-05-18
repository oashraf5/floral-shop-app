import React, { Component } from 'react';
import './Appointment.css';

import { Redirect } from 'react-router-dom';

import axios from 'axios';
import config from '../../config/config';

export default class Appointment extends Component {

    constructor(props) {
        super(props);
        this.state={name: "", 
                    email: "",
                    phone: "",
                    dateTime: "",
                    occasion: "",
                    quantity: 0,

                    bookingList: [],
                
                    response: {},
                    redirectToHome: false };

        this.handleNameChange=this.handleNameChange.bind(this);
        this.handleEmailChange=this.handleEmailChange.bind(this);
        this.handlePhoneChange=this.handlePhoneChange.bind(this);
        this.handleDateTimeChange=this.handleDateTimeChange.bind(this);
        this.handleOccasionChange=this.handleOccasionChange.bind(this);
        this.handleQuantityChange=this.handleQuantityChange.bind(this);
        this.handleReserve=this.handleCancel.bind(this);

        this.validateEmail=this.valdateEmail.bind(this);
    }

    handleNameChange(event) {
        this.setState({name: event.target.value}); //update the value state when the field is changed
    }
    handleEmailChange(event) {
        this.setState({email: event.target.value}); //update the value state when the field is changed
    }
    handlePhoneChange(event) {
        this.setState({phone: event.target.value}); //update the value state when the field is changed
    }
    handleDateTimeChange(event) {
        this.setState({dateTime: event.target.value}); //update the value state when the field is changed
    }
    handleOccasionChange(event) {
        this.setState({occasion: event.target.value}); //update the value state when the field is changed
    }
    handleQuantityChange(event) {
        this.setState({quantity: event.target.value}); //update the value state when the field is changed
    }

    handleReserve(event) {

        if (event.target.elements === undefined) {
            return;
        }

        let bookingObj={};
        for (let i=0; i<event.target.elements.length; i++) {
            let elem=event.target.elements[i];
            if (elem.type !== "text" && elem.type !== "number" ) {
                continue;
            }

            let keyValue={ [elem.name]: elem.value  }
            //merge key:value pair to bookingObj
            Object.assign(bookingObj, keyValue);

        }

        event.preventDefault();

        let bookingStr=JSON.stringify(bookingObj);
        if (window.confirm("Submitting reservation")) {
// this.props.location.createWineCallBack(wineStr);
        } 

        //Redirect back to root (App component)
        this.setState( { redirectToHome: true } ); 
        //swap back to the Home component display before redirect
        this.props.location.swapDisplayCallback("home-container", this.props);

    }
    handleCancel(event) {

        //Redirect back to root (App component)
        this.setState( { redirectToHome: true } ); 
        //swap back to the Home component display before redirect
        this.props.location.swapDisplayCallback("home-container", this.props);
    }

    
    async valdateEmail(event) {

        let emailValidationKey = config.REACT_APP_EMAIL_VALIDATION_KEY;
        let emailAddr = event.target.value;

        try {
        const response=await axios.get('http://apilayer.net/api/check?access_key='+emailValidationKey
                                +'&smtp=1&format=1&email='+emailAddr);
        console.log("getHTTP response:", response.data);

        if (response.data.smtp_check !== true) {
            alert("Invalid email!")
        }

        this.setState({response: response.data})

        } catch (e) {
        console.error(e);
        }
  }


    render() {

        if (this.props.location.swapDisplayCallback === undefined) {
            return <div></div>    //no callback to make query
        }

        let toContainerId="appointment-container";
        if (! this.state.redirectToHome) {  //do not overwrite display setup by filter form if redirecting away 
            
            this.props.location.swapDisplayCallback(toContainerId, this.props);
        }

        return (

            <div id={toContainerId}>

                {this.state.redirectToHome &&
                            <Redirect to='/Home' />    //route back to root (App component) depending on state
                    }

                <form className="reservation-form">
                    <p className="reservation-title">Brighten someone's day with flowers</p>
                    <p className="reservation-title">Make an appointment with our designer today</p><br />

                    <div className="input-container">

                        <label className="name-input-box">
                            Name<br />
                            <input className="text-input" type="text" value={this.state.name} placeholder="name" onChange={this.handleNameChange} />
                        </label>
                        <label className="email-input-box">
                            Email<br />
        <input className="text-input" type="text" value={this.state.email} placeholder="email" onChange={this.handleEmailChange} />

            {/* skip email validation during testing
                <input className="text-input" type="text" value={this.state.email} placeholder="email" onChange={this.handleEmailChange} onBlur={this.validateEmail} />
                */}

                        </label>
                        <label className="phone-input-box">
                            Phone#<br />
                            <input className="text-input" type="text" value={this.state.phone} placeholder="phone number" onChange={this.handlePhoneChange} />
                        </label>
                        <label className="quantity-input-box">
                            Quantity<br />
                            <input className="number-input" type="number" value={this.state.quantity} placeholder="quantity" onChange={this.handleQuantityChange} />
                        </label>
                        <label className="datetime-input-box">
                            Reserve time<br />
                            <input className="datetime-input" type="text" value={this.state.dateTime} placeholder="date time" onChange={this.handleDateTimeChange} />
                        </label>
                        <label className="occasion-input-box">
                            Occasion<br />
                            <select id="occasion-select">
                                <option value="party">Party</option>
                                <option value="shower">Shower</option>
                                <option value="birthday">Birthday</option>
                                <option value="wedding">Wedding</option>
                            </select>
                {/* <input className="text-input" type="text" value={this.state.occasion} placeholder="occasion type" onChange={this.handleOccasionChange} /> */}
                        </label>

                        <div className="button-row">
                            <button className="form-button" onClick={this.handleReserve} >Reserve</button>  
                            <button className="form-button" onClick={this.handleCancel} >Cancel</button>  
                        </div>
                    </div>
                </form>
            </div>

        )
    }

}
