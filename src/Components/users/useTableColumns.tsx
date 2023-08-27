'use client'
import React, { useMemo } from "react";
import TableActions from "../Utils/TableActions";
import { ServerApi } from "./Api/Delet";
import Response from "@/Hooks/Response";
import { toast } from "react-toastify";

const useTableColumns = ({ setFormTable }: any) => {

  const OnDelet = (row:any)=>{
    ServerApi(row?.id)
    Response()
    .then(result => {
        toast.success("success")
    })
    .catch(error => {
        toast.error("error")

    });
  }
  return useMemo(
    () => [
      {
        name: "Name",
        selector: "name",
      },
      {
        name: "email",
        selector: "email",
      },
      {
        name: "password",
        selector: "password",
      },
     
      {
        name: "#",
        sortable: false,
        center: true,
        maxWidth: "auto",
        cell: (row: any) => (
          <TableActions
            onDelete={() => OnDelet(row)}
            onEdit={() =>
              setFormTable((prev: any) => ({
                ...prev,
                objectToEdit: row,
                OpenEdit: true,
              }))
            }
          />
        ),
      },
    ],
    []
  );
};

export default useTableColumns;
