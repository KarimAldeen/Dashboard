"use server"

import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";

export  const ServerApi = async(values:any)=>{
  cookies().set("response","state");

    try {
      
        const response = await fetch('https://64df594871c3335b25827869.mockapi.io/users', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(values),
  
        });
  
        if (response?.ok) {
          const data = await response.json();
          revalidateTag("users")
          cookies().set("response","true");

        } else {
          cookies().set("response","false");
          throw new Error('Failed to log in.');
        }
      } catch (error) {
        window.alert('An error occurred. Please try again later.');
      }
  
  }
 