// import React, { Component } from 'react'
// import { Calendar, momentLocalizer } from 'react-big-calendar'
// import moment from 'moment';
// import 'react-big-calendar/lib/css/react-big-calendar.css';
// // import './BookingCalendar.css'
// // import NewBookingButton from './NewBookingButton'


// const localizer = momentLocalizer(moment)
// export default class BookingCalendar extends Component {
    
//     setDates = () => {
//         const events = []
//         this.props.events.map(event => {
//            return events.push({
//             start: new Date(event.start),
//             end: new Date(event.end),
//             title: `${event.pet_name} Stay (Human: ${event.human_name})`,
//             allDay: true
//           })
//         })
//         return events
//       }
//       render() {
//         return(
//           <div className="calendar-container">
//             <Calendar
//               localizer={localizer}
//               events={this.setDates()}
//               startAccessor="start"
//               endAccessor="end"
//               style={{ height: 500 }}
//              />
//           </div>
//         )
//       }
//     }