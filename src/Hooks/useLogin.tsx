'use client'
const useLogin = () => {
    const Token = localStorage.getItem("firebase_token")
    const username = localStorage.getItem("username")?.toString()

    if(Token && username){
        return true
    }else if(!Token || !username){
        return false
    }
}

export default useLogin