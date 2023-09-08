'use client'
import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component';
import { Card, CardBody } from 'reactstrap';
import Loading from '../../Components/Utils/Loading/Loading';
import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/styles/ag-grid.css'; // Core grid CSS, always needed
import 'ag-grid-community/styles/ag-theme-alpine.css'; // Optional theme CSS

const LyTable = (props:any) => {
  const [isMount  , setIsMount] = useState(false)
  const column: any = props?.useTableColumns()
  const Data  = props?.data 
  useEffect(()=>{
    setIsMount(true)
  },[])

  const Col = [
    {field: 'title',},
    {field: 'title',},
    {field: 'title'}
  ]
  return (
    <Card>
    <CardBody className="ag-theme-alpine" style={{height: "400px", width: "100%"}}>
      {/* {
        isMount ?
      <DataTable
      columns={column}
      data={Data}
      noDataComponent={<h6 className="my-4">{("no_records")}</h6>}
      noHeader
      pagination
      
      />
      : <Loading />
    } */}
            <AgGridReact
                rowData={Data}
                columnDefs={Col}>
            </AgGridReact>
    </CardBody>
  </Card>
  )
}

export default LyTable