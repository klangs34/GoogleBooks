import React, { createContext, useReducer, useContext } from 'react';
import { LOADING, ADD_RESULTS, GET_SAVED_BOOKS } from './actions';

const books = createContext();
const { Provider } = books;

const reducer = (state, action) => {
    switch (action.type) {
        case LOADING:
            return { ...state, loading: true }
        case ADD_RESULTS:
            return { ...state, results: action.post, loading: false }
        case GET_SAVED_BOOKS:
            return { ...state, saved: action.post, loading: false }
        default: 
            return state;
    }
}

const useStoreContext = () => {
    return useContext(books);
}

const StoreProvider = ({ value = [], ...props }) => {
    const [state, dispatch] = useReducer(reducer, { results: [], saved: [] });
    return <Provider value={[state, dispatch]} {...props} />;
}

export { StoreProvider, useStoreContext }
