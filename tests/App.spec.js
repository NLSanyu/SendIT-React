import React from "react";
import { mount, shallow } from "enzyme";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import App from "../src/containers/App";
import SignUpPage from "../src/containers/SignUpPage";
import LogInPage from "../src/containers/LogInPage";
import ProfilePage from "../src/containers/ProfilePage";
import HomePage from "../src/components/HomePage";
import Loader from "../src/components/Loader";
import CreateParcelForm from "../src/components/CreateParcelForm";
import ParcelTable from "../src/components/ParcelTable";
import SingleParcel from "../src/components/SingleParcel";
import Parcels from "../src/containers/Parcels";

describe("App", () => {
  const initialState = {
    signUp: { signedUp: false },
    logIn: { user: [] },
    parcels: { parcelCreated: false, parcels: [] }
  };
  const mockStore = configureStore([thunk]);
  let store;

  beforeEach(() => {
    store = mockStore(initialState);
  });

  it("app should render without crashing", () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });

  it("home page should render without crashing", () => {
    const wrapper = mount(
      <Router>
        <HomePage />
      </Router>
    );
    expect(wrapper).toMatchSnapshot();
  });

  it("sign up page should render without crashing", () => {
    const wrapper = mount(
      <Provider store={store}>
        <Router>
          <SignUpPage />
        </Router>
      </Provider>
    );
    expect(wrapper).toMatchSnapshot();
    wrapper
      .find("input#uname1")
      .first()
      .simulate("change");
  });

  it("log in page should render without crashing", () => {
    const wrapper = mount(
      <Provider store={store}>
        <Router>
          <LogInPage />
        </Router>
      </Provider>
    );
    expect(wrapper).toMatchSnapshot();
    wrapper
      .find("input#uname1")
      .first()
      .simulate("change");
  });

  it("profile page should render without crashing", () => {
    const wrapper = mount(
      <Provider store={store}>
        <Router>
          <ProfilePage />
        </Router>
      </Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });

  it("parcels page should render without crashing", () => {
    const wrapper = mount(<Provider store={store}>
      <Router>
        <Parcels />
      </Router>
    </Provider>);
    wrapper
    .find("input")
    .first()
    .simulate("change");
    wrapper
    .find("button")
    .first()
    .simulate("click");
  });

  it("single parcel form should render without crashing", () => {
    mount(<SingleParcel />);
  });

  it("loader should render without crashing", () => {
    mount(<Loader />);
  });
});
