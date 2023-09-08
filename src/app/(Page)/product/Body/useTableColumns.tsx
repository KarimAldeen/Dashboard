'use client'
import React, { useMemo } from "react";
import TableActions from "@/Components/Utils/TableActions";
import { Delet } from "@/api/Delet";
import { useModal } from "@/lib/Zustand";
import { GrView } from "react-icons/gr";
import { useRouter } from 'next/navigation'

const useTableColumns = () => {
  const { setIsOpenEditModel, SetobjectToEdit } = useModal(state => state)
  const OnDelet = (row: any) => { Delet(row?.id, "Products") }
  const router = useRouter()

  return useMemo(

    () => [
      {
        id: "1",
        name: "title",
        selector: (row: any) => row.title,
        center: "true",

      },

      {
        id: "#",
        name: "#",
        sortable: false,
        center: true,
        maxWidth: "auto",
        cell: (row: any) => (
         <div className="Actions">
          <TableActions
            onDelete={() => OnDelet(row)}
            onEdit={() => {
              setIsOpenEditModel()
              SetobjectToEdit(row)
            }
            }
          />
          <GrView
          onClick={() => {SetobjectToEdit(row) ;   router.push('/Products/view')        }}
          size={22}
          style={{ cursor: "pointer" }}
        />
         </div>
        ),
      },
    ],
    []
  );
};

export default useTableColumns;
