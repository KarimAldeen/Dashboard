'use client'
import React, { useState, useTransition } from 'react'
import ViewPage from '../../../../Layout/Dashboard/ViewPage'
import {getInitialValues, getValidationSchema, getDataToSend} from '../Body/Formik'
import { Tab, TabList, TabPanel as TabBody, Tabs } from 'react-tabs'
import 'react-tabs/style/react-tabs.css';
import { MdLanguage } from 'react-icons/md'
import { FaSadCry } from 'react-icons/fa'
import F1Page from './F1Page'
import S2Page from './S2Page'
import { Add } from '@/api/Add'
import Response from '@/Hooks/api/Response'
import { toast } from 'react-toastify'

const ViewUser = () => {
  let [isPending, startTransition] = useTransition();
  const [BarStatus, setBarStatus] = useState( {value:0,isLoading:isPending,isError:false,isSuccess:false}) 

  const handleSubmit = (values:any)=>{
    startTransition(() => Add(values,"Products"));  
    setBarStatus((pre: any) => ({...pre, value: 70}))   
      Response()  
      .then(result => {
        toast.success(`Product Added success`);
        setBarStatus((pre: any) => ({...pre, isSuccess: true,value:100}))   

      })
      .catch(error => {
        toast.error(`Product Added Field`);
        setBarStatus((pre: any) => ({...pre, isError: true,value: 0}))   


      }).finally( ()=>{
       setTimeout(() => {
          setBarStatus((pre: any) => ({...pre , value: 0}))   
        }, 1000);
    

      })
    
   
  }
  const ViewProps = { getInitialValues, getValidationSchema, getDataToSend,handleSubmit,BarStatus};
  return (
  <div className='ViewUser'>
    <ViewPage {...ViewProps}>
    <Tabs>
      <TabList>
      <Tab><div className='d-flex'><MdLanguage size={20} /> <h6>{("add_new_user")}</h6></div></Tab>
      
      <Tab><div className='d-flex'><FaSadCry size={20} /> <h6>{("Edit_user")}</h6></div></Tab>
      </TabList>
       <TabBody >
       <div className=" mt-4"><F1Page/></div>
        </TabBody>
        <TabBody >
       <div className=" mt-4"><S2Page/></div>
        </TabBody>
    </Tabs>
    </ViewPage>
  </div>
  )

}

export default ViewUser