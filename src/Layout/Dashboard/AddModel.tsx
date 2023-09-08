'use client'

import { Form, Formik } from 'formik';
import React, { useTransition } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useModal } from '../../lib/Zustand';
import { Add } from '@/api/Add';
import Response from '@/Hooks/api/Response';
import { toast } from 'react-toastify';

type TAddModel ={
  children: React.ReactNode,
  getInitialValues:any,
   getValidationSchema:any,
   getDataToSend:any,
   Url:string,
   name?:string

}
const AddModel: React.FC<TAddModel>=  ({children,getInitialValues, getValidationSchema,getDataToSend,Url,name})=> {
  const { setIsOpenAddModel ,isOpenAddModel } = useModal(state => state )
  let [isPending, startTransition] = useTransition(); 

  const  handleSubmit =  (values: any) => {
    startTransition(() => Add(values,Url));     
      Response()  
      .then(result => {
        toast.success(`${name || Url} Added success`);
        setIsOpenAddModel()
      })
      .catch(error => {
        toast.error(`${name || Url} Added Field`);
      });
    
    
      

      
  };

  return (
   
     <Modal show={isOpenAddModel}  centered size={"lg"} onHide={() => setIsOpenAddModel()}>
     <Modal.Header closeButton>
       <Modal.Title>Add new {name || Url}</Modal.Title>
     </Modal.Header>
     <Formik
         onSubmit={values => handleSubmit(getDataToSend(values))}
         initialValues={getInitialValues([])}
         validationSchema={getValidationSchema()}
       >
         {() => {
           return (
             <Form>
     <Modal.Body>  {children} </Modal.Body>
     <Modal.Footer>
       <Button variant="danger" onClick={() => setIsOpenAddModel()}>
         Close
       </Button>
       <Button  type="submit" color="primary" className="Model_Button" >
       {isPending ? "Adding...." : 'Submit'}
       </Button>
     </Modal.Footer>
     </Form>
           );
         }}
       </Formik>
   </Modal>
  );
};

export default AddModel;