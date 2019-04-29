import React, { Component } from "react";
import { connect } from "react-redux";
import Profile from "../components/Profile";
import Parcels from "../components/Parcels";
import Header from "../components/Header";
export class ProfilePage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Header home="Home" />
        <div className="flex-container-profile">
          <Profile profile={this.props.profileInfo} />
          <Parcels />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  profileInfo: state.logIn.profileInfo
});

export default connect(mapStateToProps)(ProfilePage);
