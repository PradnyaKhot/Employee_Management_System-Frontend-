import React from "react";
import "./css/navbar.css";
import { NavLink } from "react-router-dom";
import AuthService from "../../Pages/Home/AuthService";

export default class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.logOut = this.logOut.bind(this);
    this.state = {
      currentUser: "",
      click: false,
    };
  }
  nextPath(path) {
    this.props.history.push(path);
  }
  static Token = () => {
    const currentUser = AuthService.getCurrentUser();
    //console.log("current user", currentUser);
    return currentUser;
  };
  componentDidMount() {
    const user = AuthService.getCurrentUser();
    //console.log("user is", user);
    if (user) {
      this.setState({
        currentUser: user,
      });
    }
  }

  logOut() {
    window.localStorage.clear();
    AuthService.logout();
  }
  render() {
    return (
      <div className="container-fluid navbar">
        <div className="container" >
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="#">
              &nbsp;
              <i className="fa-solid fa-laptop-file"></i>
              &nbsp;
              EMS
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ">
                <li className="nav-item ">
                  <NavLink exact activeClassName="active" className="nav-link" to="/Home" >
                    Home
                  </NavLink>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Complience
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li className="dropdown-item">
                      <NavLink activeClassName="active" className="" to="/raisecomplain" >
                        Raise Complain
                      </NavLink>
                    </li>
                    <li className="dropdown-item">
                      <NavLink activeClassName="active" className="" to="/complains" >
                        Complains
                      </NavLink>
                    </li>
                    <li className="dropdown-item">
                      <NavLink activeClassName="active" className="" to="/addstatusreport" >
                        Add Status Report
                      </NavLink>
                    </li>
                    <li className="dropdown-item">
                      <NavLink activeClassName="active" className="" to="/getallstatusreport" >
                        Status Report
                      </NavLink>
                    </li>
                  </ul>
                </li>
                {/* Department */}
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="departDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Department
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="departDropdown">
                    <li className="dropdown-item">
                      <NavLink activeClassName="active" className="" to="/adddepartment" >
                        Add Department
                      </NavLink>
                    </li>
                    <li className="dropdown-item">
                      <NavLink activeClassName="active" className="" to="/deletedepartment" >
                        Delete Department
                      </NavLink>
                    </li>
                    <li className="dropdown-item">
                      <NavLink activeClassName="active" className="" to="/getalldepartment" >
                        Department
                      </NavLink>
                    </li>
                  </ul>
                </li>
                {/* Employee */}
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="employeeDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Employee
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="employeeDropdown">
                    <li className="dropdown-item">
                      <NavLink activeClassName="active" className="" to="/addemployee" >
                        Add Employee
                      </NavLink>
                    </li>
                    <li className="dropdown-item">
                      <NavLink activeClassName="active" className="" to="/updateemployee" >
                        update employee
                      </NavLink>
                    </li>
                    <li className="dropdown-item">
                      <NavLink activeClassName="active" className="" to="/listemployee" >
                        Employee
                      </NavLink>
                    </li>
                  </ul>
                </li>
                {/* Users */}

                <li className="nav-item ">
                  <NavLink exact activeClassName="active" className="nav-link" to="/UserList" >
                    UserList
                  </NavLink>
                </li>
                <li className="nav-item " onClick={this.logOut}>
                  <NavLink exact activeClassName="active" className="nav-link" to="/sign-in"  >
                    Logout
                  </NavLink>
                </li>

              </ul>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}