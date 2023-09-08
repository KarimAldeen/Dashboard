'use server'
import { DashHeader, LyTable, AddModel, EditModel } from '../../../../Layout/app/Export'
import { getInitialValues, getValidationSchema, getDataToSend, AddBody, useTableColumns, EditBody,RightHeader } from './'

const Body = ({ data }: any) => {
  const Modelprops = { getInitialValues, getValidationSchema, getDataToSend, Url: "Products" };
  const LyTableProps = {useTableColumns,data}
  
  return (
    <div className='page'>
      <DashHeader>  <RightHeader/> </DashHeader>
      <LyTable {...LyTableProps}/>
      <AddModel {...Modelprops}>  <AddBody /> </AddModel>
      <EditModel {...Modelprops}>  <EditBody /> </EditModel>
      
    </div>
  )
}
export default Body