"use server"

import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";
import { BaseURL } from "@/Layout/app/Const";

export  const Add = async(values:any,URL:string)=>{
  cookies().set("response","state");

    try {
      
        const response = await fetch(BaseURL+URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(values),
  
        });
  
        if (response?.ok) {
          const data = await response.json();
          revalidateTag(URL)
          cookies().set("response","true");

        } else {
          cookies().set("response","false");
          throw new Error('Failed to log in.');
        }
      } catch (error) {
        window.alert('An error occurred. Please try again later.');
      }
  
  }
 