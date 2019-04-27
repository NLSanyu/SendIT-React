import React, { Component } from "react";
import { connect } from "react-redux";
import Profile from "../components/Profile";
import Parcels from "../components/Parcels";
export class ProfilePage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="flex-container-profile">
        <Profile profile={''} />
        <Parcels />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  profileInfo: state.profileInfo
});

export default connect(mapStateToProps)(ProfilePage);
