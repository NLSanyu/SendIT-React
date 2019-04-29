import React from "react";

const Profile = props => {
  return (
    <div className="profile-details">
      <div className="profile-image">
        <img src="../assets/avi.png" className="profile-image" />
      </div>
      <h5 id="fullname">Full name: {props.profile.full_name}</h5>
      <h5 id="uname">Username: @{props.profile.username}</h5>
      <h5 id="email">Email: {props.profile.email}</h5>
      <h5 id="phone_number">Tel no.: {props.profile.phone_number}</h5>
      <br />
      <h3>My Parcel Orders</h3>
      <div className="parcels-order-info">
        <h5 id="All">All orders</h5>
        <h5 id="Pending">Pending</h5>
        <h5 id="In Transit">In transit</h5>
        <h5 id="Delivered">Delivered</h5>
        <h5 id="Cancelled">Cancelled</h5>
      </div>
    </div>
  );
};

export default Profile;
