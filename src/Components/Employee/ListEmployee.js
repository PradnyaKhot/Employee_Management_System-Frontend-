import React, { Component } from 'react';
import EmployeeS from '../../Pages/Employee/EmployeeS';
class ListEmployee extends Component {
    constructor(props) {
        super(props)

        this.state = {
                employees: []
        }
        this.addEmployee = this.addEmployee.bind(this);
        this.editEmployee = this.editEmployee.bind(this);
        this.DeleteEmployee = this.DeleteEmployee.bind(this);
    }

    DeleteEmployee(empId){
        EmployeeS.DeleteEmployee(empId).then( res => {
            this.setState({employees: this.state.employees.filter(employees => employees.empId !==employees.empId)});
        });
    }
    viewEmployee(id){
        this.props.history.push(`/view-employee/${id}`);
    }
    editEmployee(id){
        this.props.history.push(`/add-employee/${id}`);
    }

    componentDidMount(){
        EmployeeS.getEmployees().then((res) => {
            this.setState({ employees: res.data});
        });
    }

    addEmployee(){
        this.props.history.push('/add-employee/_add');
    }

    render() {
        return (
            <div>
                 <h1 className="text-center">Employees Details</h1>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th>  First Name </th>
                                    <th>  Last Name</th>
                                    <th>  Email Id</th>
                                    <th>  Date of Birth</th>
                                    <th>  User Id</th>
                                    <th>  Department Id</th>
                                    <th>  Actions</th>
                                    
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.employees.map(
                                        employee => 
                                        <tr key = {employee.id}>
                                             <td> { employee.firstName} </td>  
                                        
                                             <td> {employee.lastName}</td>
                                             
                                             <td> {employee.email}</td>
                                             
                                             <td> {employee.dateOfBirth}</td>
                                             
                                             <td> {employee.user.id}</td>
                                             
                                             <td> {employee.department.departName}</td>
                                             
                                             <td>
                                                 <button onClick={ () => this.editEmployee(employee.id)} className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.DeleteEmployee(employee.empId)} className="btn btn-danger"> Delete </button>
                                             </td>
                                             
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>

            </div>
        )
    }
}

export default ListEmployee;