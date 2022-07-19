import React, { Component } from "react";
import { Link } from "react-router-dom";
import UserDataService from "../../Pages/Home/userService";
export default class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      login: false,
      fields: {},
      errors: {},
    };
  }

  //validation
  handleValidation() {
    let fields = this.state.fields;
    let errors = {};
    console.log("inside error", errors);
    let formIsValid = true;


    if (!fields["role"]) {
      formIsValid = false;
      errors["role"] = "cannot be empty";
    }

    //result
    if (!fields["result"]) {
      formIsValid = false;
      errors["result"] = "cannot be empty";
    }


    //Email
    if (!fields["userName"]) {
      formIsValid = false;
      errors["userName"] = "Cannot be empty";
    }

    if (typeof fields["userName"] !== "undefined") {
      let lastAtPos = fields["userName"].lastIndexOf("@");
      let lastDotPos = fields["userName"].lastIndexOf(".");

      if (
        !(
          lastAtPos < lastDotPos &&
          lastAtPos > 0 &&
          fields["userName"].indexOf("@@") === -1 &&
          lastDotPos > 2 &&
          fields["userName"].length - lastDotPos > 2
        )
      ) {
        formIsValid = false;
        errors["userName"] = "email is not valid";
      }
    }
    if (!fields["password"]) {
      formIsValid = false;
      errors["password"] = "cannot be empty";
    }
    if (typeof fields["password"] !== "undefined") {
      var regularExpression = /^[a-zA-Z]$/;

      if (regularExpression.test(fields["password"])) {
        errors["password"] =
          "password should contain atleast one number and one special character";

        return false;
      }
    }
    this.setState({ errors: errors });
    return formIsValid;
  }

  //add data into database
  async userDataSubmit(e) {
    e.preventDefault();
    if (this.handleValidation()) {
      const userResponse = await UserDataService.create(this.state.fields);
      console.log("User response", userResponse);
      if (userResponse.status === 400) {
        alert("User already exits");
      }
      if (userResponse.status) {
        alert("User register successfully");
        return this.props.history.push("/sign-in");
      } else {
        alert("Something went wrong");
      }
    } else {
      alert("Form has errors.");
    }
  }

  handleReset = () => {
    Array.from(document.querySelectorAll("input")).forEach(
      (input) => (input.value = "")
    );
    this.setState({
      fields: {},
    });
  };
  //select field ans set into state
  handleChange(field, e) {
    let fields = this.state.fields;
    fields[field] = e.target.value;
    this.setState({ fields });
  }

  render() {
    return (
      <div className="CardBox-wrapper">
        <div className="CardBox">
          <form onSubmit={this.userDataSubmit.bind(this)}>
            <h3>Sign Up</h3>
            <hr />

            <div className="form-group">
              <label>Email address</label>
              <input
                type="userName"
                className="form-control"
                placeholder="Enter email"
                onChange={this.handleChange.bind(this, "userName")}
                value={this.state.fields["userName"]}
                required
              />
              <span style={{ color: "red" }}>{this.state.errors["userName"]}</span>
              <br />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
                onChange={this.handleChange.bind(this, "password")}
                value={this.state.fields["password"]}
                required
              />
              <span style={{ color: "red" }}>
                {this.state.errors["password"]}
              </span>
              <br />
            </div>

            <div className="row">
              <div className="col">
                <label>Role</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="role"
                  onChange={this.handleChange.bind(this, "role")}
                  value={this.state.fields["role"]}
                  required
                />
                <span style={{ color: "red" }}>{this.state.errors["role"]}</span>
                <br />
              </div>
              <div className="col">
                <label>Result</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="result"
                  onChange={this.handleChange.bind(this, "result")}
                  value={this.state.fields["result"]}
                  required
                />
                <span style={{ color: "red" }}>
                  {this.state.errors["result"]}
                </span>
                <br />
              </div>
            </div>
            <button type="submit" className="btn btn-primary btn-block">
              Sign Up
            </button>
            <hr />
            <div>
              Already registered{" "}
              <Link to={"sign-in"} style={{}}>
                SIGN-IN
              </Link>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
