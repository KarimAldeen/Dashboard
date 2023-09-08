'use server'

import { BaseURL } from "@/Layout/app/Const";

const Get = async (Url:string) => {
  
    try {
        const response = await fetch(BaseURL+Url,{ next: { tags: [Url] }, cache: 'no-store' });
        if (!response.ok) {
          console.log('Error');

        }
        const data = await response.json();
        
        return data;
      } catch (error) {
        console.error('Error:', error);
      }
}

export default Get