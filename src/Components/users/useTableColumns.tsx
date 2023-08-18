'use client'
import React, { useMemo } from "react";
import TableActions from "../Utils/TableActions";
import { useDeletUsers } from "@/api/AllApi/users";
import { ServerApi } from "./Api/Delet";

const useTableColumns = ({ setFormTable }: any) => {
  const { mutate } = useDeletUsers();
  
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
            onDelete={() => ServerApi(row?.id)}
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
