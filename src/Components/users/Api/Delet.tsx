"use server"

import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";

export  const ServerApi = async(id:number)=>{
  
    cookies().set("response","state");

    try {
        const response = await fetch(`https://64df594871c3335b25827869.mockapi.io/users/${id}`, {
          method: 'DELETE',
          headers: { 'Content-Type': 'application/json' },
        });
  
        if (response?.ok) {
                    cookies().set("response","true");

          revalidateTag("users")

        } else {
                    cookies().set("response","false");

          throw new Error('Failed to log in.');
        }
      } catch (error) {
        window.alert('An error occurred. Please try again later.');
      }
  
  }
 