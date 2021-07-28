import React, { useReducer, createContext, useEffect, useContext } from 'react'
import rimacApi from '../api/rimacApi';
import { authReducer, AuthState } from './AuthReducer';

interface Auth {
    doc: any;
    phone: string,
    licensePlate: string,
    name: string,
}
type AuthContextProps = {
   
    signIn: (auth:Auth) => void;
    user: any | null;
}
const authInitalState: AuthState = {
    status: 'nosuccess',
    user: {
        
    },
}


export const AuthContext = createContext({} as AuthContextProps);

export function useAuthContext(){
    return useContext(AuthContext)
}


export const AuthProvider = ({children }: any) => {

    const [state, dispatch] = useReducer(authReducer, authInitalState);

    const signIn = async ({doc, phone,licensePlate,name}: Auth) =>{
        const {data} = await rimacApi.post('',{doc,phone,licensePlate,name});
        console.log('data from fake api',data);
        const user = {
            doc: data.doc,
            phone: data.phone,
            licensePlate: data.licensePlate,
            name: 'Enrique'
        }

          dispatch({
                type: 'signIn', payload: {
                    user
                }
        });
        console.log('stateee cambio',state);

    }   

    return(
        <AuthContext.Provider value={{
            user:state,
            signIn
        }}>
            {children}
        </AuthContext.Provider>
    )
}