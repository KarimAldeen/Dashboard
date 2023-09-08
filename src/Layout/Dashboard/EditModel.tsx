'use client'

import { Form, Formik } from 'formik';
import React, { useTransition } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useModal } from '../../lib/Zustand';
import { Edit } from '@/api/Edit';
import Response from '@/Hooks/api/Response';
import { toast } from 'react-toastify';

type TEditModel ={
  children: React.ReactNode,
  getInitialValues:any,
   getValidationSchema:any,
   getDataToSend:any,
   Url:string,
   name?:string

}
const EditModel: React.FC<TEditModel>=  ({children,getInitialValues, getValidationSchema,getDataToSend,Url,name})=> {
  const { setIsOpenEditModel ,isOpenEditModel ,objectToEdit} = useModal(state => state )
  let [isPending, startTransition] = useTransition(); 

  const  handleSubmit =  (values: any) => {
    startTransition(() => Edit(values,Url));     
      Response()  
      .then(result => {
        toast.success(`${name || Url} Edited success`);
        setIsOpenEditModel()
      })
      .catch(error => {
        toast.error(`${name || Url} Edited Field`);
      });
    
    
      

      
  };

  return (
   
     <Modal show={isOpenEditModel}  centered size={"lg"} onHide={() => setIsOpenEditModel()}>
     <Modal.Header closeButton>
       <Modal.Title>Edit new {name || Url}</Modal.Title>
     </Modal.Header>
     <Formik
         onSubmit={values => handleSubmit(getDataToSend(values))}
         initialValues={getInitialValues(objectToEdit)}
         validationSchema={getValidationSchema()}
       >
         {() => {
           return (
             <Form>
     <Modal.Body>  {children} </Modal.Body>
     <Modal.Footer>
       <Button variant="danger" onClick={() => setIsOpenEditModel()}>
         Close
       </Button>
       <Button  type="submit" color="primary" className="Model_Button" >
       {isPending ? "Editing...." : 'Submit'}
       </Button>
     </Modal.Footer>
     </Form>
           );
         }}
       </Formik>
   </Modal>
  );
};

export default EditModel;