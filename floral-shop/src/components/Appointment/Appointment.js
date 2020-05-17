import React, { Component } from 'react';

export default class Appointment extends Component {

    constructor(props) {
        super(props);
        this.state={name: "", 
                    email: "",
                    phone: "",
                    dateTime: "",
                    occasion: "",
                    quantity: 0 };

        this.handleNameChange=this.handleNameChange.bind(this);
        this.handleEmailChange=this.handleEmailChange.bind(this);
        this.handlePhoneChange=this.handlePhoneChange.bind(this);
        this.handleDateTimeChange=this.handleDateTimeChange.bind(this);
        this.handleOccasionChange=this.handleOccasionChange.bind(this);
        this.handleQuantityChange=this.handleQuantityChange.bind(this);
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

    render() {
        return (

        <div>
            <form>
                <p className="reservation-title">Make an appointment with our designer</p>
                <p className="reservation-title">Brighten someone's day with a bouquet </p><br />

            </form>
        </div>

        )
    }

}
