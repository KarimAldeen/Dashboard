import { useAddMutation} from "../helpers";
    
    const API = {Add: `/auth/admin_login` };
    const KEY = "USERS";

export const useLogin= () => useAddMutation(KEY, API.Add );
