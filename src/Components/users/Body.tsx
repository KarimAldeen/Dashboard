'use client'
import React, { FC } from 'react';
import { Add_Button, SearchBar, AddModel, EditModel, useTableColumns, LyTable, useState } from '@/Utils/TableExport'
import { FormTableState } from '@/Utils/Types';

interface IProps {
  data : any
};
const Body:FC<IProps> = ({data}) => {

    const [FormTable, setFormTable] = useState<FormTableState>({ objectToEdit: [], OpenEdit: false, OpenAdd: false });
    const column: any = useTableColumns({ setFormTable })

    return(
        <div className='Page' >
      <div className='Page_Header'>  <Add_Button setFormTable={setFormTable} /> <SearchBar /></div>
      <LyTable
        columns={column}
        data={data}

      />
      <AddModel FormTable={FormTable} setFormTable={setFormTable} />
      <EditModel FormTable={FormTable} setFormTable={setFormTable}/>
    </div>)
};
export default Body;