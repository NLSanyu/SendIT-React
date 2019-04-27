import React, { Component } from "react";
import { connect } from "react-redux";
import { logIn } from "../actions/LoginAction";
import Loader from "../components/Loader";
import Button from "../components/Button";
export class LogInPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };

    this.handleLogIn = this.handleLogIn.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleLogIn = () => {
    const userInfo = {
      username: this.state.username,
      password: this.state.password
    };
    this.props.logIn(userInfo);
  };

  render() {
    return (
      <div className="auth">
        <h1>Log In</h1>
        <form name="log_in_form" id="log_in_form">
          <table className="form-table">
            <tbody>
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
                <td>Password</td>
                <td className="colon">:</td>
                <td>
                  {" "}
                  <input
                    name="password"
                    id="password"
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
            text="Log In"
            onClick={this.handleLogIn}
          />
        </form>
        <Loader />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.loggedIn
});

const mapDispatchToProps = {
  logIn
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LogInPage);
