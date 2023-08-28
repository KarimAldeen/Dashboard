'use server'

import { cookies } from "next/headers";

const IsLogin = () => {
    return new Promise((resolve, reject) => {
        const firebase_token = cookies()?.get("firebase_token");
        const username = cookies()?.get("username");
        const Login = [username,firebase_token].every(Boolean)           
        if (Login === true) {
            resolve(true);
        } else {
            reject(false);
        }
    });
}

export default IsLogin