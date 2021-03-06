import {
  UPDATE_PASSWORD_INPUT_CHANGE,
  UPDATING_PASSWORD,
  PASSWORD_UPDATE_SUCCESS,
  PASSWORD_UPDATE_FAILED
} from "../actionTypes";

export const INITIAL_STATE = {
  isSubmitting: false,
  password: "",
  confirmPassword: "",
  errors: {},
  passwordUpdateSuccess: null
};

export default (state = INITIAL_STATE, action) => {
  const { payload, type } = action;
  switch (type) {
    case UPDATE_PASSWORD_INPUT_CHANGE:
      return {
        ...state,
        errors: {},
        [payload.field]: payload.value
      };
    case UPDATING_PASSWORD:
      return {
        ...state,
        isSubmitting: true
      };
    case PASSWORD_UPDATE_SUCCESS:
      return {
        ...state,
        isSubmitting: false,
        password: "",
        confirmPassword: "",
        passwordUpdateSuccess: true,
        message: payload.message
      };
    case PASSWORD_UPDATE_FAILED:
      return {
        ...state,
        isSubmitting: false,
        errors: {
          message: payload.message,
          ...payload.errors
        }
      };
    default:
      return state;
  }
};
