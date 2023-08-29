
import React, { useEffect, useState } from 'react'
import {Loading,DataTable, Card,CardBody} from '../../Utils/TableExport'
import  {TableColumn} from 'react-data-table-component'



const LyTable = (props:any) => {
  const [isMount  , setIsMount] = useState(false)
  useEffect(()=>{
    setIsMount(true)
  },[])
  return (
    <Card>
    <CardBody>
      {
        isMount && 
      <DataTable
      
      columns={props?.column}
      data={props?.data}
      noDataComponent={<h6 className="my-4">{("no_records")}</h6>}
      noHeader
      pagination
      progressComponent={<Loading />}
      
      />
    }
    </CardBody>
  </Card>
  )
}

export default LyTable