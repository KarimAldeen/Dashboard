"use server"

import { BaseURL } from "@/Layout/app/Const";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";

export  const Delet = async(id:number,URL:string)=>{
  
    cookies().set("response","state");

    try {
      const response = await fetch(`${BaseURL+URL}/${id}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
      });
  
        if (response?.ok) {
                    cookies().set("response","true");


          revalidateTag(URL)

        } else {
                    cookies().set("response","false");

          throw new Error('Failed to log in.');
        }
      } catch (error) {
        window.alert('An error occurred. Please try again later.');
      }
  
  }
 