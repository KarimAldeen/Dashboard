import { useQueryClient, useMutation } from "react-query";
import { toast } from "react-toastify";
import { useAxios } from "./useAxios";

export const useDeleteMutation = (key:string, url:string) => {
  const axios = useAxios();
  const queryClient = useQueryClient();
  return useMutation(
    async ({ id }:{id:Number |string}) => {
      const { data } = await axios.delete(url+id);
      return { ...data, id };
    },
    {
      onSuccess: ({ message}) => {
        toast.success(message || ("deleted_successfully"));
        queryClient.invalidateQueries([key]);
      },
      onError: (err: {response:{data:{message:string}}}) => {
        const message =
          err?.response?.data?.message || ("failed_to_delete_data");
        toast.error(message);
      },
    }
  );
};
