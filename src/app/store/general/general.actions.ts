import { createAction, props } from '@ngrx/store';
// import { ResetPassword, Signin } from 'src/app/models/auth';

export const saveCurrentUser = createAction(
  '[General] Save Current User',
  props<{ currentUser: object }>()
);

// export const setSignInDetails = createAction(
//     '[Onboarding] set Signin Details',
//     props<{ signInDetails: Signin }>()
// );

// export const saveInternalBank = createAction(
//     '[General] Save Internal Bank',
//     props<{ internalBank: object }>()
// );



