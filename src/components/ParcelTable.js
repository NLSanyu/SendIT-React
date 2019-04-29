import React from "react";
import SingleParcel from "./SingleParcel";

const ParcelTable = props => {
  const parcels = props.parcels ? props.parcels : [];
  const parcelItems = parcels.map(parcel => (
    <SingleParcel
      key={parcel.parcel_id}
      id={parcel.parcel_id}
      dateCreated={parcel.date_created}
      description={parcel.description}
      pickupLocation={parcel.pickup_location}
      destination={parcel.destination}
      price="UGX 3000"
      status={parcel.status}
    />
  ));

  return (
    <div className="parcel-details">
      <h3>My Parcels</h3>
      <table className="parcel-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Date created</th>
            <th>Description</th>
            <th>Pickup location</th>
            <th>Destination</th>
            <th>Price</th>
            <th>Status</th>
            <th />
          </tr>
        </thead>
        <tbody>{parcelItems}</tbody>
      </table>
    </div>
  );
};

export default ParcelTable;
