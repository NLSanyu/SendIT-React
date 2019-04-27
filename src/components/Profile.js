import React from "react";

const Profile = props => {
  return (
    <div className="profile-details">
      <h3 className="profile-title">Profile</h3>
      <div className="profile-image">
        <img src="../assets/avi.png" className="profile-image" />
      </div>
      <h5 id="fullname">{props.profile.full_name}</h5>
      <h5 id="uname">{props.profile.username}</h5>
      <h5 id="email">{props.profile.email}</h5>
      <h5 id="phone_number">{props.profile.phone_number}</h5>
      <br />
      <h3>Orders</h3>
      <div className="parcels-order-info">
        <h4 id="New">Create new order</h4>
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
