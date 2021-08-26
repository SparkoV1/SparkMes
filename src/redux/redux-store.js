import {combineReducers, createStore} from "redux";
import profileReducer from "./reducer/profile-reducer";
import dialogsReducer from "./reducer/dialogs-reducer";
import sidebarReducer from "./reducer/sidebar-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogsReducer,
    sidebar: sidebarReducer,
});

let store = createStore(reducers);

window.store = store;

export default store;