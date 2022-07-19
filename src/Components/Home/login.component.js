import React, { Component } from "react";
import { Link } from "react-router-dom";
import Form from "react-validation/build/form";
import AuthService from "../../Pages/Home/AuthService";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);

    this.state = {
      username: "",
      password: "",
      loading: false,
      message: "",
    };
  }
  onChangeEmail(e) {
    this.setState({
      email: e.target.value,
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value,
    });
  }

  handleLogin(e) {
    e.preventDefault();

    this.setState({
      message: "",
      loading: true,
    });

    //this.form.validateAll();

    AuthService.login(this.state.email, this.state.password).then(
      () => {
        console.log('logged')
        this.props.history.push("/Home");
        window.location.reload();
      },
      (error) => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        this.setState({
          loading: false,
          message: resMessage,
        });
      }
    );
  }
  render() {
    return (
      <div className="auth-wrapper">
        <div className="CardBox">
          <Form
            onSubmit={this.handleLogin}
            ref={(c) => {
              this.form = c;
            }}
          >
            <h3>Sign In</h3>
            <hr />
            <div className="form-group">
              <label>Email address</label>
              <input
                type="email"
                id="formGroupExampleInput"
                className="form-control"
                placeholder="Enter email"
                value={this.state.email}
                onChange={this.onChangeEmail}
                required
              />

              <br />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                id="formGroupExampleInput"
                className="form-control"
                placeholder="Enter password"
                value={this.state.password}
                onChange={this.onChangePassword}
                required
              />

              <br />
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-primary btn-block">
                Login
              </button>
            </div>
            <hr />
            <div>
              New around here?{" "}
              <Link to={"sign-up"} style={{}}>
                SIGN UP
              </Link>
            </div>
            <div>
              <Link to={"sign-up"} style={{}}>
                Forgot password?
              </Link>
            </div>
          </Form>
        </div>
      </div>
    );
  }
}
