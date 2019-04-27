import React, { Component } from "react";
import CreateParcelForm from "./CreateParcelForm";
import ParcelTable from "../components/ParcelTable";
import { connect } from "react-redux";

export class Parcels extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.createParcel = this.createParcel.bind(this);
    this.getParcels = this.getParcels.bind(this);
  }

  createParcel = (event, description, pickup_location, destination) => {
    // event.preventDefault;
    // alert("createParcel");
  };

  getParcels = () => {
    // alert("getParcels");
  };

  render() {
    return (
      <div className="parcels-details" id="all-parcels">
        <CreateParcelForm createParcel={this.createParcel} />
        <ParcelTable parcels={this.props.parcels} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  parcels: state.parcels
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Parcels);
