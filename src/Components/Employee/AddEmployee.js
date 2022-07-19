import React, { Component } from 'react'
import EmployeeS from '../../Pages/Employee/EmployeeS';

class AddEmployee extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: 1,
            firstName: '',
            lastName: '',
            emailId: '',
            dateOfBirth: '',
            userId: '',
            departmentId: ''
        }
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.saveOrUpdateEmployee = this.saveOrUpdateEmployee.bind(this);
    }

    componentDidMount() {
        console.log("check here")
        console.log(this.state.id)
        if (this.state.id === '_add') {
            return
        } else {
            EmployeeS.getEmployeeById(this.state.id).then((res) => {
                let employee = res.data;
                console.log(employee);
                employee.map((e) => {
                    console.log(e);
                    if (e === this.state.id) {
                        this.setState({
                            firstName: e.firstName,
                            lastName: e.lastName,
                            email: e.email,
                            dateOfBirth: e.dateOfBirth,
                            userId: e.user.id,
                            departmentId: e.department.departName

                        });
                    }
                    }
                    );

            });
        }
    }
    saveOrUpdateEmployee = (e) => {
        e.preventDefault();
        let employee = { firstName: this.state.firstName, lastName: this.state.lastName, email: this.state.email, dateOfBirth: this.state.dateOfBirth, userId: this.state.id, departmentId: this.state.departName };
        console.log('employee => ' + JSON.stringify(employee));

        if (this.state.id === '_add') {
            EmployeeS.AddEmployee(employee, this.state.id).then(res => {
                this.props.history.push('/employees');
            });
        } else {
            EmployeeS.updateEmployee(employee, this.state.id).then(res => {
                this.props.history.push('/employees');
            });
        }
    }

    changeFirstNameHandler = (event) => {
        this.setState({ firstName: event.target.value });
    }

    changeLastNameHandler = (event) => {
        this.setState({ lastName: event.target.value });
    }

    changeEmailHandler = (event) => {
        this.setState({ email: event.target.value });
    }
    changeDateOfBirthHandler = (event) => {
        this.setState({ dateOfBirth: event.target.value });
    }
    changeUserIdHandler = (event) => {
        this.setState({ userId: event.target.value });
    }
    changedepartmentIdHandler = (event) => {
        this.setState({ departmentId: event.target.value });
    }
    cancel() {
        this.props.history.push('/employees');
    }

    getTitle() {
        if (this.state.id === '_add') {
            return <h3 className="text-center">Add Employee</h3>
        } else {
            return <h3 className="text-center">Update Employee</h3>
        }
    }
    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                {
                                    this.getTitle()
                                }
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> First Name: </label>
                                            <input placeholder="First Name" name="firstName" className="form-control" 
                                                value={this.state.firstName} onChange={this.changeFirstNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Last Name: </label>
                                            <input placeholder="Last Name" name="lastName" className="form-control" 
                                                value={this.state.lastName} onChange={this.changeLastNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Email Id: </label>
                                            <input placeholder="Email Address" name="email" className="form-control" 
                                                value={this.state.email} onChange={this.changeEmailHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Date of Birth: </label>
                                            <input placeholder="Date of Birth" name="dateOfBirth" className="form-control" 
                                                value={this.state.dateOfBirth} onChange={this.changeDateOfBirthHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label>UserId: </label>
                                            <input placeholder="user Id" name="userId" className="form-control" 
                                                value={this.state.id} onChange={this.changeUserIdHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Department Id: </label>
                                            <input placeholder="Department Id" name="departmentId" className="form-control" 
                                                value={this.state.departName} onChange={this.changedepartmentIdHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.saveOrUpdateEmployee}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                            </div>
            </div>
        )
    }
}

export default AddEmployee