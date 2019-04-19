import React from 'react';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import { MemoryRouter } from 'react-router';

import { render } from 'react-testing-library';

import * as ACTIONS from './actions';

function reducer(state = { userReducer: { user: { id: 1 }}}, action) {
    switch(action.type) {
        case ACTIONS.LOADING:
            return {
                ...state,
                loading: true
            }

        case ACTIONS.END_LOAD:
            return {
                ...state,
                loading: false
            }

        case ACTIONS.UPDATE_FAV_LIST:
            return {
                loading: false,
                favorites: action.payload,
                schedule: state.schedule
            }

        case ACTIONS.GET_INFO:
            return {
                ...state,
                loading: false,
                info: action.payload
            }

        case ACTIONS.UPDATE_SCHEDULE:
            return {
                loading: false,
                favorites: state.favorites,
                schedule: action.payload
            }

        case ACTIONS.TEXT_SENT:
            return {
                ...state,
                loading: false
            }

            case ACTIONS.REGISTER: 
            return {
                loading: false,
                userID: action.payload
            }

        case ACTIONS.LOGIN:
            localStorage.setItem( 'token', action.payload.token )

            delete action.payload.user.password

            return {
                loading: false,
                user: action.payload.user
            }

        case ACTIONS.LOGOUT:
            return { ...initialState }

        default:
            return {
                ...state
            }
    }
}

export function renderWithRedux( 
    ui, 
    { initialState, store = createStore(reducer, initialState) } = {} ) {
        return {
            ...render( <Provider store={store}>
                         <MemoryRouter>
                            <div> {ui} </div>
                         </MemoryRouter>
                       </Provider> ),
            store
        }
    };