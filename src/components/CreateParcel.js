import React from "react";

export default function CreateParcel() {
  return (
    <div id="parcel-pop-up">
      <div id="pop-up-info">
        <div class="create-form-div">
          <form className="create-form" id="create-parcel-form">
            <label htmlFor="desc">Description:</label>
            <br />
            <input type="text" id="desc" />
            <br />
            <label htmlFor="pickup">Pickup Location:</label>
            <br />
            <input
              type="text"
              id="pickup"
              onClick="searchPlaces('${pickup}')"
            />
            <br />
            <label fhtmlFor="dest">Destination:</label>
            <br />
            <input type="text" id="dest" onInput="searchPlaces('${dest}')" />
            <br />
            <br />
            <button
              type="button"
              className="create-btn"
              id="create_parcel_btn"
              onClick="createParcel()"
            >
              Create parcel
            </button>
            <button
              type="button"
              className="create-btn"
              id="open-maps-btn"
              onClick="createMap()"
            >
              Use Google Maps
            </button>
          </form>
        </div>
      </div>
      <button
        class="submit-button"
        class="close"
        id="close"
        onclick="hideParcelPopUp()"
      >
        Close
      </button>
    </div>
  );
}
