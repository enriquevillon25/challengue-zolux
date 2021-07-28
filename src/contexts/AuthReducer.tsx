import React from "react"
export type AuthStatusType =
    'success'| 'nosuccess' ;

export interface AuthState {
    status: AuthStatusType;
    user: any;
}
type AuthAction =
    | { type: 'signIn', payload: any}


export const authReducer = (state:AuthState,action:AuthAction) : AuthState =>{
    switch(action.type){
        case 'signIn':
            console.log('entro a reducer',action.payload);
            return {
                // ...state,
                user: action.payload.user,
                status: 'success',
            }
        default:
            return state;
    }
}   
