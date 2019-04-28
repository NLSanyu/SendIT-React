import thunk from "redux-thunk";
import signUp from "../src/actions/SignUpAction";
import logIn from "../src/actions/LoginAction";
import * as parcelActions from "../src/actions/ParcelActions";
import * as types from "../src/actions/types";
import configureMockStore from "redux-mock-store";
import moxios from "moxios";
import data from "./moxios_mock";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("actions", () => {
  describe("authentication actions", () => {
    beforeEach(() => {
      moxios.install();
    });

    afterEach(() => {
      moxios.uninstall();
    });

    it("should create an action to sign up", () => {
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          status: 200,
          response: data
        });
      });

      const expectedActions = [{ type: types.SIGNUP_SUCCESS, payload: true }];

      const store = mockStore({});
      return store.dispatch(signUp()).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });

    it("should create an action for failed sign up", () => {
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          status: 400,
          response: data
        });
      });

      const expectedActions = [{ type: types.SIGNUP_FAIL, payload: true }];

      const store = mockStore({});
      return store.dispatch(signUp()).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });

    it("should create an action to log in", () => {
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          status: 200,
          response: data
        });
      });

      const expectedActions = [{ type: types.LOGGED_IN, loggedIn: true }];

      const store = mockStore({});
      return store.dispatch(logIn()).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
  });

  describe("parcel actions", () => {
    beforeEach(() => {
      moxios.install();
    });

    afterEach(() => {
      moxios.uninstall();
    });
    it("should create an action to create a parcel", () => {
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          status: 200,
          response: data
        });
      });

      const expectedActions = [{ type: types.PARCEL_CREATED, payload: true }];

      const store = mockStore({});
      return store.dispatch(parcelActions.createNewParcel()).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });

    it("should create an action to get all parcels", () => {
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          status: 200,
          response: data
        });
      });

      const expectedActions = [{ type: types.GET_ALL_PARCELS }];

      const store = mockStore({});
      return store.dispatch(parcelActions.getAllParcels()).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
  });
});
