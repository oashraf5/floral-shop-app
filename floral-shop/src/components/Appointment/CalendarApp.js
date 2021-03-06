import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction"; // needed for dayClick

import "./Appointment.css";

// must manually import the stylesheets for each plugin
import "@fullcalendar/core/main.css";
import "@fullcalendar/daygrid/main.css";
import "@fullcalendar/timegrid/main.css";


let calendarEventList = [
  // initial event data
  { title: "Event Now", start: new Date() }
]
let nameElem = {};
let dateTimeId = {};
export default class CalendarApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      calendarWeekends: true,
      calendarEvents: calendarEventList
    };
  
  }

  calendarComponentRef = React.createRef();

  render() {

    if (this.props.updateDateTimeCallBack === undefined) {
      return <div></div>   //no callback to record datetime
    }

    nameElem = document.getElementById(this.props.nameId);
    dateTimeId = this.props.dateTimeId;
    if (nameElem === null) {
      return <div></div>   //no name element to identify guest
    }

    if (nameElem.value === "") {
      alert("Please enter your name first");
      return <div></div>   //need a name to make reservation
    }

    return (
      <div className="calendar-app">
        <div className="calendar-app-top">
          &nbsp; (click a date/time to add appointment)
        </div>
        <div className="calendar-app-calendar">
          <FullCalendar
            defaultView="timeGridWeek"
            header={{
              left: "prev,next today",
              center: "title",
              right: "timeGridWeek,timeGridDay,listWeek"

            }}
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            ref={this.calendarComponentRef}
            weekends={this.state.calendarWeekends}
            events={this.state.calendarEvents}
            dateClick={this.handleDateClick}
            eventClick={this.handleEventClick}
          />
        </div>
      </div>
    );
  }

  handleDateClick = arg => {
    console.log(arg);
    if (window.confirm("Adding an 1 hr appt at " + arg.date + " ?")) {
      this.props.updateDateTimeCallBack(arg.date, dateTimeId);
      this.setState({
        
        // add new event data
        calendarEvents: this.state.calendarEvents.concat({
          // creates a new array
          title: nameElem.value,
          start: arg.date,
          allDay: arg.allDay
        })
      });
      calendarEventList = this.state.calendarEvents;
    }
  };

  handleEventClick = arg => {
    window.alert("Please pick new time to schedule. Update without time to cancel")
    

  }
}
