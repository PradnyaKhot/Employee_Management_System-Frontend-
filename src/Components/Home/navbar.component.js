import React from "react";
import { Link } from "react-router-dom";
import AuthService from "../../Pages/Home/AuthService";

class Navbar extends React.Component {
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
    const { currentUser } = this.state;
    return (
      <div>
        <div id="nav">
          <ul id="navbar">
            {currentUser ? (
              <>
                <li>
                  <Link to="/home">Home</Link>
                </li>
                  <li>
                  <Link to="/UserList">UserList</Link>
                </li>
                <li style={{ paddingLeft: "1px" }}>
                  <Link to={"/home"}>
                    {currentUser.userName }
                  </Link>
                </li>
                <li>
                  <a href="/sign-in" onClick={this.logOut}>
                    LogOut
                  </a>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/sign-in">Login</Link>
                </li>
                <li>
                  <Link to="/sign-up">Sign-Up</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    );
  }
}

export default Navbar;
