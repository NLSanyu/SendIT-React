import React, { Component } from "react";
import { connect } from "react-redux";
import CreateParcelForm from "../components/CreateParcelForm";
import ParcelTable from "../components/ParcelTable";
import { createNewParcel, getAllParcels } from "../actions/ParcelActions";

export class Parcels extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: "",
      pickupLocation: "",
      destination: "",
      allParcels: [],
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.createParcel = this.createParcel.bind(this);
  }

  componentDidMount(){
    setTimeout(() => {
      this.props.getAllParcels(localStorage.getItem('user_id'));
    }, 1000);
  }

  componentWillReceiveProps(newProps){
    this.setState({allParcels: newProps.parcels});
  }

  handleInputChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  createParcel = () => {
    const parcelInfo = {
      description: this.state.description,
      pickup_location: this.state.pickupLocation,
      destination: this.state.destination
    };
    this.props.createNewParcel(parcelInfo);
    this.props.getAllParcels(localStorage.getItem('user_id'));
  }

  render() {
    return (
      <div className="parcels-details" id="all-parcels">
        <CreateParcelForm
          handleInputChange={this.handleInputChange}
          createParcel={this.createParcel}
        />
        <ParcelTable parcels={this.state.allParcels} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  parcels: state.parcels.parcels,
  user: state.logIn.user
});

const mapDispatchToProps = {
  createNewParcel,
  getAllParcels
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Parcels);
