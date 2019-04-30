import React, { Component } from "react";
import { connect } from "react-redux";
import Profile from "../components/Profile";
import Parcels from "./Parcels";
import Header from "../components/Header";
export class ProfilePage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { user } = this.props;

    return (
      <div>
        <Header home="Home" logout="Log out" />
        <div className="flex-container-profile">
          <Profile />
          <Parcels />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.logIn.user
});

export default connect(
  mapStateToProps,
)(ProfilePage);
