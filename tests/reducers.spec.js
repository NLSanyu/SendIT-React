import logInReducer from '../src/reducers/logInReducer';
import signUpReducer from '../src/reducers/signUpReducer';
import * as types from '../src/actions/types';

describe('sign up reducer', () => {
    it('should return initial state', () => {
      let state = signUpReducer(undefined, {});
      expect(state).toEqual({
        signedUp: false
      });
    });

    it('should sign up a user', () => {
      expect(
        signUpReducer([], {
          type: types.SIGNUP_SUCCESS,
          payload: true,
        })
      ).toEqual({
        signedUp: true
      });
    });

    it('should not sign up a user', () => {
        expect(
          signUpReducer([], {
            type: types.SIGNUP_FAIL,
            payload: false,
          })
        ).toEqual({
          signedUp: false
        });
      });

      it('should log up a user', () => {
        expect(
          logInReducer([], {
            type: types.LOGGED_IN,
            payload: true,
          })
        ).toEqual({
        loggedIn: true
        });
      });

  });
