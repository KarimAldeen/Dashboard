'use client'

interface Authvalues{
    username: string; 
    password: string;
}

export const useAuthSubmit = async (values: Authvalues,router:any) => {

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
          localStorage.setItem('firebase_token', firebase_token);
          localStorage.setItem('username', username);
          
          router.push("/")

        } else {
          window.alert('Sorry, you are not an admin.');
        }
      } else {
        throw new Error('Failed to log in.');
      }
    } catch (error) {
      console.error(error);
      window.alert('An error occurred. Please try again later.');
    }
  };