import { combineReducers } from "redux";
import loginReducers from "./authReducers";
import resetPasswordReducers from "./resetPasswordReducers";
import updatePasswordReducers from "./updatePasswordReducers";
import socialAuthReducers from "./socialAuthReducers";
import createArticleReducer from "./createArticleReducer";
import readArticleReducer from "./readArticleReducer";
import userReducer from "./userReducer";

export default combineReducers({
  auth: loginReducers,
  article: createArticleReducer,
  login: loginReducers,
  resetPassword: resetPasswordReducers,
  updatePassword: updatePasswordReducers,
  socialAuth: socialAuthReducers,
  fetchedArticle: readArticleReducer,
  user: userReducer
});
