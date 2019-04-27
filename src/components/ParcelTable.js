import React from "react";
import SingleParcel from "./SingleParcel";

const ParcelTable = props => {

  const parcels = props.parcels ? props.parcels : [];
  const parcelItems = parcels.map(parcel => (
    <SingleParcel
      key={parcel.id}
      id={parcel.id}
      dateCreated={parcel.date_created}
      description={parcel.description}
      pickupLocation={parcel.pickup_location}
      destination={parcel.destination}
      price="UGX 3000"
      status={parcel.status}
    />
  ));

  return (
    <div id="all-parcels" className="parcels_details">
      <h3>My Parcels</h3>

      <div className="parcels-div">
        <ul>{parcelItems}</ul>
      </div>
    </div>
  );

};

export default ParcelTable;
