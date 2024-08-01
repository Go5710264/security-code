import {CHANGE_EMAIL} from './action';
import * as employes from './employees.json'

// console.log(JSON.parse(JSON.stringify(employes)))



const initialState = JSON.parse(JSON.stringify(employes));

const employeeReducer = (state = initialState, action: unknown)=> {
    switch (action.type){
        case CHANGE_EMAIL:
            return {
                ...state,
                email: action.payload,
            }
        default:
            return state;
    }
};

export default employeeReducer;
