'use server'
import { BaseURL } from "@/Layout/app/Const";

const GetWithSearch = async (Url:string,search:any) => {
    const keys = Object.keys(search);
    const values = Object.values(search) ;
   const SearchUrl = values.every((value) => value == "" || value == undefined) ? BaseURL+Url : BaseURL+Url+`?${keys}=${values}`
    try {
        const response = await fetch(SearchUrl,{ next: { tags: [Url] }, cache: 'no-store' });
        if (!response.ok) {
          console.log('Error');

        }
        const data = await response.json();
        console.log(data);

        
        return data;
      } catch (error) {
        console.error('Error:', error);
      }
}

export default GetWithSearch