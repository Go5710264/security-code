import {CHANGE_INFORMATION, SET_EMPLOYEE_DATA} from './actions';

const initialState = {
    _id: "1a",
    age: 23,
    email: "noName@noemail.com",
    name: "No Name"
};

const employeeReducer = (state=initialState)
