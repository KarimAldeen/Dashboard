import React from 'react'
import {Loading,DataTable, Card,CardBody} from '../../Utils/TableExport'

const LyTable = (props:any) => {
  return (
    <Card>
    <CardBody>
      <DataTable
        columns={props?.column}
        data={props?.data}
        noDataComponent={<h6 className="my-4">{("no_records")}</h6>}
        noHeader
        pagination
        progressComponent={<Loading />}
        {...props}


      />
    </CardBody>
  </Card>
  )
}

export default LyTable