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
          <div>
            <label htmlFor="desc" className="create-parcel-input">
              Description:
            </label>
            <input
              type="text"
              name="description"
              onChange={this.props.handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="pickup" className="create-parcel-input">
              Pickup Location:
            </label>
            <input
              type="text"
              name="pickupLocation"
              onChange={this.props.handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="dest" className="create-parcel-input">
              Destination:
            </label>
            <input
              type="text"
              name="destination"
              onChange={this.props.handleInputChange}
            />
            <p className="create-rules">Parcel description, pickup location and destination should be at least five characters long</p>

          </div>
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
