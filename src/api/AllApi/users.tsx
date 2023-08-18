import { useAddMutation, useDeleteMutation, useGetQuery } from "../helpers";

const API = {
    GET: `/users`,
    DELET: `/users/`,
    Add: `/users`
};
const KEY = "USERS";
export const useGetUsers = (params?: any, options?: any) => useGetQuery(KEY, API.GET, params, options);
export const useAddUsers = () => useAddMutation(KEY, API.Add);
export const useEditUsers = () => useAddMutation(KEY, API.Add);


export const useDeletUsers = () => useDeleteMutation(KEY, API.DELET);


