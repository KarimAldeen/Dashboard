'use server'

import { cookies } from "next/headers";
 
const GetUserData = () => {
        const username = cookies()?.get("username")?.value;
        const is_super_user = Number( cookies()?.get("is_super_user")?.value);

      return {username,is_super_user}
   
}

export default GetUserData