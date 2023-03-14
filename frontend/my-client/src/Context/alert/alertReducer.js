import { SET_ALERT, REMOVE_ALERT } from "../types";

/*reducer - a pure function, accepting a state & action, and returning a new state. action 
- an object literal, which describes a change to state. useContext -
 a react hook, allowing functional components to take advantage of the context API. */



const reducer = (state, action) => {
    switch (action.type) {
        case SET_ALERT:
            return [
                ...state, action.payload
            ];
        case REMOVE_ALERT:
            return state.filter(alert => alert.id !== action.payload)
        default:
            return state;

    }
};

export default reducer;