import React, { Component } from 'react'
import DatePicker from "react-datepicker";


class DueDate extends Component {
    constructor(props) {
        super(props);
        this.state = {
          SetDate: new Date()
        };
        this.handleChange = this.handleChange.bind(this);
      }
     
      handleChange(date) {
        this.setState({
            SetDate: date
        });
      }
     
      render() {
        return (
          <DatePicker
            selected={this.state.SetDate}
            onChange={this.handleChange}
          />
        );
      }
    }
export default DueDate