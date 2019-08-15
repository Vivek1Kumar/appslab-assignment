import React from "react";
import DatePicker from "react-datepicker"; 
import "react-datepicker/dist/react-datepicker.css";

class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date()
    };
    this.handleChange = this.handleChange.bind(this);
  }
 
  handleChange(date) {
    this.setState({
      startDate: date
    });
  }
 
  render() {
    return (
        <React.Fragment>
            <img src={require("../../img/calender-icon.png")} alt="..." title="..." />
            <DatePicker
                selected={this.state.startDate}
                onChange={this.handleChange}
            />
        </React.Fragment>
    );
  }
}
export default Calendar