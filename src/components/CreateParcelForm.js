import React, { Component } from "react";
import Button from "./Button";

export class CreateParcelForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: "",
      pickup_location: "",
      destination: ""
    };

  }


  render() {
    return (
      <div className="create-form-div">
        <h3>Create a new parcel</h3>
        <form className="create-form" id="create-parcel-form">
          <label htmlFor="desc">Description:</label>
          <input type="text" name="description" onChange={this.props.handleInputChange} />
          <label htmlFor="pickup">Pickup Location:</label>
          <input type="text" name="pickupLocation" onChange={this.props.handleInputChange} />
          <label htmlFor="dest">Destination:</label>
          <input type="text" name="destination" onChange={this.props.handleInputChange} />
          <br />
          <Button
            type="button"
            className="create-btn"
            id="create_parcel_btn"
            text="Create parcel"
            onClick={this.props.createParcel}
          />
        </form>
      </div>
    );
  }
}

export default CreateParcelForm;
