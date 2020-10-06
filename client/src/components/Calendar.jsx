
import Footer from './Footer';
import React, { Component } from 'react';
import { Redirect, Link, withRouter } from 'react-router-dom';
import paginationFactory from 'react-bootstrap-table2-paginator';
import BootstrapTable from 'react-bootstrap-table-next';
import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css';
// import BigCalendar from 'react-big-calendar';
// import moment from 'moment';
// import 'react-big-calendar/lib/css/react-big-calendar.css';
// import './BookingCalendar.css';
// import NewBookingButton from './NewBookingButton'



export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: false,
            months: [],
            days: [],
        }
    }

    componentDidMount = () => {
        fetch(`/api/v1/user`)
            .then(res =>
                res.json()
            )
            .then(data => {
                if (data === 'Logged Out') {
                    this.setState({ redirect: true })
                }
            }).then(() => {
                fetch('/api/v1/months')
                    .then(res => res.json()
                    )
                    .then(data => {
                        this.setState({ months: data })
                        console.log(this.state.months)
                    })
                    // .then(() => {
                    //     console.log(this.state.months[0].days)
                    //     let newDate = {
                    //         month: [],
                    //         days: []
                    //     };
                    //     let monthDays = [];
                    //     console.log(newDate.month);
                    //     let newerDate = [];
                    //     let times = [];
                    //     for(let i = 0; i < this.state.months.length; i++){
                    //         newDate.month.push(this.state.months[i]);
                    //         for(let n = 0; n <= this.state.months[i].days; n++){
                    //             monthDays.push(n);
                    //         }
                    //         newDate.days.push(monthDays);
                    //         monthDays = [];
                    //     }
                    //     newDate.month.unshift(" ");
                    //     newerDate.push(newDate);
                    //     this.setState({days: newerDate});
                    //     console.log(this.state.days)
                    // })
                });
            }
            
            render() {
                
                return (
                    <div className="mainDiv2">
                    {this.state.redirect ? <Redirect to='/login' /> : null}
                    <Calendar />
                
                {/* {this.state.months.map(calendar => {
                    return (
                        <div>
                            <h1>{calendar.month}</h1>
                            <div>
                                <p>{calendar.days}</p>
                            </div>
                        </div>
                    )
                 */}
                {/* })} */}
                <div className="links">
                    <Link to="/sermons"><h2>Sermons</h2></Link>
                    <Link to="/directory"><h2>Directory</h2></Link>
                </div>
                <Footer />
            </div>
        )
    }
}

