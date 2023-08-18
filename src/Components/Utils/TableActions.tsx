import React , {ReactNode} from "react";
import confirmAlert from "./Alert";
import { toast } from "react-toastify";
import { FaEdit, FaTrash } from "react-icons/fa";

type   TableActionsProps = {
    onDelete:()=> any  
    onEdit : ()=>  void 
    showEdit ?:Boolean
    showDelete ?:Boolean
    children ? :ReactNode
}


const TableActions = ({ onDelete   , onEdit,showEdit=true,showDelete=true, children }:TableActionsProps) => {

  
  return (
      <div className="data-list-action TableActions" >
      {
        showEdit&&<FaEdit onClick={()=>onEdit()} className="cursor-pointer m-1" size={20} />
      }  
      {
        showDelete&&<FaTrash
        onClick={() =>
          confirmAlert({
            onConfirm: () => {
              toast.info(("_loading.delete"));
              onDelete();
            },
          
          })
        }
        className="cursor-pointer"
        size={20}
      />
      }
      
        
        {children}
      </div>
  );
};

export default TableActions;
