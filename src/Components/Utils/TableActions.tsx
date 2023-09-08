'use client'
import React , {ReactNode} from "react";
import confirmAlert from "./Alert";
import { FaEdit, FaTrash } from "react-icons/fa";
import Tostifay from "@/Hooks/api/Tostifay";

type TableActionsProps = {
  onDelete: () => any;
  onEdit: () => void;
  showEdit?: boolean;
  showDelete?: boolean;
  children?: ReactNode;
};


const TableActions = ({ onDelete   , onEdit,showEdit=true,showDelete=true, children }:TableActionsProps) => {

  
  return (
    <div className="data-list-action TableActions">
    {showEdit && <FaEdit onClick={onEdit} className="cursor-pointer m-1" size={20} />}
    {showDelete && (
      <FaTrash
        onClick={() =>
          confirmAlert({
            onConfirm: () => {
              onDelete();
              Tostifay("Deleted success");

            },
          })
        }
        className="cursor-pointer"
        size={20}
      />
    )}
    {children}
  </div>
);
};
export default TableActions;
