import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as GeneralReducer from './general.reducer';

export const selectFeatureState = createFeatureSelector<GeneralReducer.State>(GeneralReducer.generalFeatureKey);


export const selectCurrentUser = createSelector(
    selectFeatureState,
    (state:GeneralReducer.State) => state.currentUser
)

export const selectSigninDetails = createSelector(
    selectFeatureState,
    (state: GeneralReducer.State) => state.signInDetails
);

export const selectInternalBank = createSelector(
    selectFeatureState,
    (state: GeneralReducer.State) => state.internalBank
);
