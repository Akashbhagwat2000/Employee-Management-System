import React, { Component } from 'react';

export default class CreateEmployeeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      emailId: ''
    };
    this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
    this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
    this.changeEmailIdHandler = this.changeEmailIdHandler.bind(this);
    this.saveEmployee = this.saveEmployee.bind(this);
  }

  changeFirstNameHandler(event) {
    this.setState({ firstName: event.target.value });
  }

  changeLastNameHandler(event) {
    this.setState({ lastName: event.target.value });
  }

  changeEmailIdHandler(event) {
    this.setState({ emailId: event.target.value });
  }

  saveEmployee(event) {
    event.preventDefault();
    // Add your logic to save the employee data here
    console.log('Employee data:', this.state);
    // Reset the form after saving the employee
    this.setState({
      firstName: '',
      lastName: '',
      emailId: ''
    });
  }

  cancel() {
    // Add your logic to handle cancel button action here
    console.log('Cancel button clicked');
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
              <h3 className="text-center">Add Employee</h3>
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label>First Name:</label>
                    <input
                      placeholder="First Name"
                      name="firstname"
                      className="form-control"
                      value={this.state.firstName}
                      onChange={this.changeFirstNameHandler}
                    />
                  </div>

                  <div className="form-group">
                    <label>Last Name:</label>
                    <input
                      placeholder="Last Name"
                      name="lastname"
                      className="form-control"
                      value={this.state.lastName}
                      onChange={this.changeLastNameHandler}
                    />
                  </div>

                  <div className="form-group">
                    <label>Email ID:</label>
                    <input
                      placeholder="Email ID"
                      name="emailid"
                      className="form-control"
                      value={this.state.emailId}
                      onChange={this.changeEmailIdHandler}
                    />
                  </div>

                  <button type="button" className="btn btn-success" onClick={this.saveEmployee}>Save</button>
                  <button type="button" className="btn btn-danger" onClick={this.cancel.bind(this)} style={{ marginLeft: "10px" }}>Cancel</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
