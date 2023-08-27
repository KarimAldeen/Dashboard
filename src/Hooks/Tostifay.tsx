'use client'
import { toast } from "react-toastify";
import Response from "./Response";


const Tostifay = (text:any) => {
    Response()
                .then(result => {
                    toast.success(text  || "success")
                    
                })
                .catch(error => {
                    toast.error("error")

                });
}

export default Tostifay