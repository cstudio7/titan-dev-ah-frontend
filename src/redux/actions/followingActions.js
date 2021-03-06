import "@babel/polyfill";
import axios from "../../utils/axios";
import {
  FOLLOWING_FAILED,
  FOLLOWING_SUCCESS,
  WAITING_RESPONSE
} from "../actionTypes";
import { checkAuth } from "../../utils/checkAuthUtils";

export const followed = () => ({
  type: FOLLOWING_SUCCESS,
  payload: true
});

export const unfollowed = () => ({
  type: FOLLOWING_SUCCESS,
  payload: false
});

export const failed = () => ({ type: FOLLOWING_FAILED, payload: false });

export const followUser = (
  username,
  { location, history }
) => async dispatch => {
  checkAuth({ location, history });
  try {
    dispatch({ type: WAITING_RESPONSE });
    const { status } = await axios.post(`/profiles/${username}/follow`);
    if (status === 201) dispatch(followed());
    if (status === 202) dispatch(unfollowed());
  } catch (error) {
    dispatch(failed());
  }
};
