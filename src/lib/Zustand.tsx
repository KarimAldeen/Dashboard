
import {create} from 'zustand'


interface User {
    IsAuthentication : boolean
    username : string
    SetIsAuthentication :(IsAuthentication:boolean) => any
    SetUserData :(username:string) => void

}


export const UseIsAuthentication = create<User>()((set)=>({
    IsAuthentication : false ,
    username : "",
    SetIsAuthentication:(IsAuthentication:boolean)=> set({IsAuthentication}),
    SetUserData:(username)=> {set({username}) }

}))