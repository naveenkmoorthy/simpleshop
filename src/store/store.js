import { createContext, useReducer } from "react";

const initialState = {
    filters: [],
    sortBy: ""
}

export const Store = createContext(initialState);

function reducer(state, action){
    return {...state, ...action}
}

export function StoreProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, initialState);
    return <Store.Provider value={{state, dispatch}}>{children}</Store.Provider>;
}