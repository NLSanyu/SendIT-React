import React, { Component } from "react";
import { connect } from "react-redux";
import signUp from "../actions/SignUpAction";
import Loader from "../components/Loader";
import Button from "../components/Button";
import Header from "../components/Header";

export class SignUpPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullname: "",
      username: "",
      email: "",
      phone_number: "",
      password1: "",
      password2: "",
      showLoader: false
    };

    this.handleSignUp = this.handleSignUp.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSignUp = () => {
    const userInfo = {
      full_name: this.state.fullname,
      username: this.state.username,
      email: this.state.email,
      phone_number: this.state.phone_number,
      password: this.state.password1
    };
    this.props.signUp(userInfo);
    this.props.history.push("/login");
  };

  render() {
    return (
      <div>
        <Header home="Home" login="Log In" />
        <div className="auth">
          <h1>Sign Up</h1>
          <form name="sign_up_form" id="sign_up_form">
            <table className="form-table">
              <tbody>
                <tr>
                  <td>Full name</td>
                  <td className="colon">:</td>
                  <td>
                    <input
                      name="fullname"
                      id="fullname1"
                      type="text"
                      onChange={this.handleInputChange}
                    />
                  </td>
                </tr>
                <tr>
                  <td>Username</td>
                  <td className="colon">:</td>
                  <td>
                    {" "}
                    <input
                      name="username"
                      id="uname1"
                      type="text"
                      onChange={this.handleInputChange}
                      required
                    />{" "}
                  </td>
                </tr>
                <tr>
                  <td>Email</td>
                  <td className="colon">:</td>
                  <td>
                    {" "}
                    <input
                      name="email"
                      id="email1"
                      type="text"
                      onChange={this.handleInputChange}
                      required
                    />{" "}
                  </td>
                </tr>
                <tr>
                  <td>Phone number</td>
                  <td className="colon">:</td>
                  <td>
                    {" "}
                    <input
                      name="phone_number"
                      id="phone1"
                      type="text"
                      onChange={this.handleInputChange}
                    />{" "}
                  </td>
                </tr>
                <tr>
                  <td>Password</td>
                  <td className="colon">:</td>
                  <td>
                    {" "}
                    <input
                      name="password1"
                      id="password1"
                      type="password"
                      onChange={this.handleInputChange}
                      required
                    />{" "}
                  </td>
                </tr>
                <tr>
                  <td>Confirm password</td>
                  <td className="colon">:</td>
                  <td>
                    {" "}
                    <input
                      name="password2"
                      id="confirm-password1"
                      type="password"
                      onChange={this.handleInputChange}
                      required
                    />{" "}
                  </td>
                </tr>
              </tbody>
            </table>
            <Button
              type="button"
              className="submit-button"
              id="sign_up_btn"
              text="Sign up"
              onClick={this.handleSignUp}
            />
          </form>
          {this.state.showLoader ? <Loader /> : <div />}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  signedUp: state.signedUp
});

const mapDispatchToProps = {
  signUp
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUpPage);
