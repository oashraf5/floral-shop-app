import React, { Component } from 'react';
import './Appointment.css';

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
        this.handleReserve=this.handleCancel.bind(this);
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

    }
    handleCancel(event) {

    }

    render() {
        return (

        <div>
            <form class="reservation-form">
                <p className="reservation-title">Brighten someone's day with a bouquet </p>
                <p className="reservation-title">Make an appointment with our designer</p><br />

                <div className="input-container">

                    <label className="name-input-box">
                        Name<br />
                        <input className="text-input" type="text" value={this.state.name} placeholder="name" onChange={this.handleNameChange} />
                    </label>
                    <label className="email-input-box">
                        Email<br />
                        <input className="text-input" type="text" value={this.state.email} placeholder="email" onChange={this.handleEmailChange} />
                    </label>
                    <label className="phone-input-box">
                        Phone#<br />
                        <input className="text-input" type="text" value={this.state.phone} placeholder="phone number" onChange={this.handlePhoneChange} />
                    </label>
                    <label className="datetime-input-box">
                        Rserve time<br />
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
            {/* <input className="text-input" type="number" value={this.state.occasion} placeholder="occasion type" onChange={this.handleOccasionChange} /> */}
                    </label>
                    <label className="quantity-input-box">
                        Phone#<br />
                        <input className="number-input" type="number" value={this.state.quantity} placeholder="quantity" onChange={this.handleQuantityChange} />
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
