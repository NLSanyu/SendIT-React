// import logInReducer from "../src/reducers/logInReducer";
// import signUpReducer from "../src/reducers/signUpReducer";
// import parcelsReducer from "../src/reducers/parcelsReducer";
// import * as types from "../src/actions/types";

// describe("sign up reducer", () => {
//   it("should return initial state", () => {
//     let state = signUpReducer(undefined, {});
//     expect(state).toEqual({
//       signedUp: false
//     });
//   });

//   it("should sign up a user", () => {
//     expect(
//       signUpReducer([], {
//         type: types.SIGNUP_SUCCESS,
//         payload: true
//       })
//     ).toEqual({
//       signedUp: true
//     });
//   });

//   it("should not sign up a user", () => {
//     expect(
//       signUpReducer([], {
//         type: types.SIGNUP_FAIL,
//         payload: false
//       })
//     ).toEqual({
//       signedUp: false
//     });
//   });

//   describe("log in reducer", () => {
//     it("should log in a user", () => {
//       expect(
//         logInReducer([], {
//           type: types.LOGGED_IN,
//           payload: []
//         })
//       ).toEqual({
//         user: []
//       });
//     });
//   });

//   describe("parcels reducer", () => {
//     it("should create a parcel", () => {
//       expect(
//         parcelsReducer([], {
//           type: types.PARCEL_CREATED,
//           payload: true
//         })
//       ).toEqual({
//         parcelCreated: true
//       });
//     });

//     it("should get all parcels", () => {
//       expect(
//         parcelsReducer([], {
//           type: types.GET_ALL_PARCELS,
//           payload: []
//         })
//       ).toEqual({
//         parcels: []
//       });
//     });



//   });

// });

import reducers from '../src/reducers';

test('reducers', () => {
  let state;
  state = reducers(undefined, {});
  expect(state).toEqual({signUp:{signedUp:false},logIn:{user:[]},parcels:{parcelCreated:false,parcels:[]}});
});
