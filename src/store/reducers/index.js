import {history} from "../store";
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import auth from "./auth/reducer";

const createReducer = asyncReducers => 
  combineReducers({
    auth,
    ...asyncReducers,
    router: connectRouter(history),
  });

export default createReducer;
