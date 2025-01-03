import { createAction, props } from '@ngrx/store';
import { Signin } from '../../models/auth';

export const saveCurrentUser = createAction(
  '[General] Save Current User',
  props<{ currentUser: object }>()
);

export const setSignInDetails = createAction(
    '[Onboarding] set Signin Details',
    props<{ signInDetails: Signin }>()
);

export const saveInternalBank = createAction(
    '[General] Save Internal Bank',
    props<{ internalBank: object }>()
);



