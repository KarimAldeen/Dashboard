'use server'
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

interface Authvalues{
    username: string; 
    password: string;
}


export const useAuthSubmit = async (values: Authvalues) => {
    try {
      const response = await fetch('http://apptest.kammun.com/api/auth/admin_login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),

      });

      if (response?.ok) {
        const data = await response.json();
        const { firebase_token, username } = data.data;
        if (firebase_token) {
          // localStorage.setItem('firebase_token', firebase_token);
          // localStorage.setItem('username', username);
          cookies().set("firebase_token",firebase_token);
          cookies().set("username",username);         
           
          

        } else {
          throw new Error('Failed to log in.');
        }
      } else {
        throw new Error('error');
      }
    } catch (error) {
      console.error(error);
      window.alert('An error occurred. Please try again later.');
    }
  };