import React, { Component } from 'react';
import { connect } from "react-redux";

export class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.showCreateForm = this.showCreateForm.bind(this);
  }

  showCreateForm = () => {
    let pickup = "pickup";
    let dest = "dest";
    document.getElementById("parcel-pop-up").style.display = "block";
    let popUp = document.getElementById("pop-up-info");
    popUp.innerHTML = output;
  };

  render() {
    return (
      <div className="profile-details">
        <h3 className="profile-title">Profile</h3>
        <div className="profile-image">
          <img src="../assets/avi.png" class="profile-image"/>
        </div>
        <h5 id="fullname">Full name</h5>
        <h5 id="uname">Username</h5>
        <h5 id="email">Email</h5>
        <h5 id="phone_number">Phone number</h5>
        <br/>
        <h3>Orders</h3>
        <div class="parcels-order-info">
          <h4 id="New" onClick="showCreateForm()">Create new order</h4>
          <h5 id="All" onClick="getUserParcels(`All`)">All orders</h5>
          <h5 id="Pending" onClick="getUserParcels(`Pending`)">Pending</h5>
          <h5 id="In Transit" onClick="getUserParcels(`In Transit`)">In transit</h5>
          <h5 id="Delivered" onClick="getUserParcels(`Delivered`)">Delivered</h5>
          <h5 id="Cancelled" onClick="getUserParcels(`Cancelled`)">Cancelled</h5>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = {
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
