'use server'

import { cookies } from "next/headers";

const Response = () => {
    return new Promise((resolve, reject) => {
        const State = cookies()?.get("response");
          
        if (State?.value === "true") {
            resolve(true);
        } else if (State?.value === "false") {
            resolve(false);
        } else if (State?.value === "state") {
            Response().then(result => resolve(result));
        } else {
            reject("Cookie value not recognized");
        }
    });
}

export default Response