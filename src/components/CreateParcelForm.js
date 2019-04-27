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

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <div className="create-form-div">
        <h3>Create a new parcel</h3>
        <form className="create-form" id="create-parcel-form">
          <label htmlFor="desc">Description:</label>
          <input type="text" id="desc" onChange={this.handleInputChange} />
          <label htmlFor="pickup">Pickup Location:</label>
          <input type="text" id="pickup" onChange={this.handleInputChange} />
          <label htmlFor="dest">Destination:</label>
          <input type="text" id="dest" onChange={this.handleInputChange} />
          <br />
          <Button
            type="button"
            className="create-btn"
            id="create_parcel_btn"
            text="Create parcel"
            onClick={this.props.createParcel(
              this.state.description,
              this.state.pickup_location,
              this.state.destination
            )}
          />
        </form>
      </div>
    );
  }
}

export default CreateParcelForm;
