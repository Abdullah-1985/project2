import React, { Component } from 'react';
import Calendar from 'react-calendar';

class MyCalendar extends Component {
   

    onChange = ldate => {
        
        
        // this.setState({ ldate })

        this.props.addDateToList(ldate)

    }

    render() {
        return (
            <div>
                <Calendar
                    onChange={this.onChange}
                    // value={this.state.ldate}
                />
            </div>
        );
    }
}


export default MyCalendar