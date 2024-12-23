import { Action, createReducer, on } from '@ngrx/store';
import { ResetPassword, Signin } from 'src/app/models/auth';
import * as GeneralActions from './general.actions';
// import * as internal from 'stream';


export const generalFeatureKey = 'general';

export interface State {
    signInDetails: Signin,
    currentUser: object,
    internalBank: object
}

export const initialState: State = {
    signInDetails: new Signin(),
    currentUser: {},
    internalBank: {}
};


export const reducer = createReducer(
    initialState,
    on(GeneralActions.setSignInDetails, (state: State, { signInDetails }) => ({
        ...state,
        signInDetails: signInDetails
    })),
    on(GeneralActions.saveCurrentUser, (state: State, { currentUser }) => ({
        ...state,
        currentUser: currentUser
    })),
    on(GeneralActions.saveInternalBank, (state: State, { internalBank }) => ({
        ...state,
        internalBank: internalBank
    })),
);

export function GeneralReducer(state: State | undefined, action: Action) {
    return reducer(state, action);
}

