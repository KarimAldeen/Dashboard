import { useQueryClient, useMutation } from "react-query";
import { toast } from "react-toastify";
import { useAxios } from "./useAxios";

export const useAddMutation = (key:string, url :string) => {
  const axios = useAxios();
  const queryClient = useQueryClient();

  return useMutation(
    async (dataToSend) => {
      const { data } = await axios.post(url, dataToSend);
      return data;
    },
    {
      onSuccess: ({ message }) => {
        toast.success(message || ("added_successfully"));
        queryClient.invalidateQueries([key]);
     
      },
      onError: (err:{response:{status:number,data:{message:string}} }) => {

        if(err?.response?.status !==402){
          let message ='';
          if(err.response.status ===401){
            message =  ("please_login_first");
  
          }
          
         else{
          message = err?.response?.data?.message || ("failed_to_add_data");
  
         }
          toast.error(message);
        }
       
      },
      
    },
    
  );
};
