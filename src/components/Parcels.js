import React, { Component } from "react";
import { connect } from "react-redux";
import CreateParcelForm from "./CreateParcelForm";
import ParcelTable from "../components/ParcelTable";
import { createNewParcel } from "../actions/ParcelActions";

export class Parcels extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: "",
      pickupLocation: "",
      destination: ""
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.createParcel = this.createParcel.bind(this);
    this.getParcels = this.getParcels.bind(this);
  }

  handleInputChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  createParcel = event => {
    const parcelInfo = {
      description: this.state.description,
      pickup_location: this.state.pickupLocation,
      destination: this.state.destination
    };
    this.props.createNewParcel(parcelInfo);
  };

  getParcels = () => {
    // alert("getParcels");
  };

  render() {
    return (
      <div className="parcels-details" id="all-parcels">
        <CreateParcelForm
          handleInputChange={this.handleInputChange}
          createParcel={this.createParcel}
        />
        <ParcelTable parcels={this.props.parcels} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  parcels: state.parcels
});

const mapDispatchToProps = {
  createNewParcel
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Parcels);
