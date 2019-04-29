import React from "react";
import { mount, shallow } from "enzyme";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import App from "../src/containers/App";
import SignUpPage from "../src/containers/SignUpPage";
import LogInPage from "../src/containers/LogInPage";
import ProfilePage from "../src/containers/ProfilePage";
import HomePage from "../src/components/HomePage";
import Header from "../src/components/Header";
import NavBar from "../src/components/NavBar";
import Loader from "../src/components/Loader";


describe("App", () => {
  const initialState = {};
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
    const wrapper = shallow(<HomePage />);
    expect(wrapper).toMatchSnapshot();
  });

  it("sign up page should render without crashing", () => {
    const wrapper = shallow(
      <Provider store={store}>
        <SignUpPage />
      </Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });

  it("log in page should render without crashing", () => {
    const wrapper = shallow(
      <Provider store={store}>
        <LogInPage />
      </Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });

  it("profile page should render without crashing", () => {
    const wrapper = shallow(
      <Provider store={store}>
        <ProfilePage />
      </Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });

  it("should render header without crashing", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();
  });

  it("should render nav bar without crashing", () => {
    const wrapper = shallow(<NavBar />);
    expect(wrapper).toMatchSnapshot();
  });

  it("should render loader without crashing", () => {
    const wrapper = shallow(<Loader />);
    expect(wrapper).toMatchSnapshot();
  });

});
