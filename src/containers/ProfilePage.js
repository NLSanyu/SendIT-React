import React, { Component } from "react";
import { connect } from "react-redux";
import Profile from './Profile';
import Parcel from '../components/Parcel';

export class ProfilePage extends Component {
  render() {
    return (
      <div class="flex-container-profile">
        <Profile />
        <Parcel />
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfilePage);
