'use client'
const useLogin = () => {
    if (localStorage){
        const Token = localStorage?.getItem("firebase_token")?.toString()  ?? null
        const username = localStorage?.getItem("username")?.toString() ?? null
    
        if(Token && username){
            return true
        }else if(!Token || !username){
            return false
        }
    }
  
}

export default useLogin