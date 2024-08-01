import {
    combineReducers,
    compose,
    legacy_createStore,
} from 'redux';


import employeeReducer from './employeeReducer';

const ReactReduxDevTools = 
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__();

export const configureStore = () => {
    return legacy_createStore(
        
        /* 
            combineReducers можно заменить на одну функцию, 
            которая будет изменять редюсер (в данном случае
            это employeeReducer)  
        */
        combineReducers({ 
            employees: employeeReducer,
        }),

        compose(
            ReactReduxDevTools,
        )
    );
}

export default configureStore;