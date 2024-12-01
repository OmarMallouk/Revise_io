import {createStore} from "redux";
import userReducer from "../reducer1";

const store = createStore(userReducer);

export default store;