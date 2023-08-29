'use client'
import { Form, Formik } from 'formik';
import React, { useTransition } from 'react';
import EditModelBody from './EditModelBody';
import { getDataToSend, getInitialValues, getValidationSchema } from '../Formik';
import { ServerApi } from '../Api/Edit';
import Response from '@/Hooks/api/Response';
import { toast } from 'react-toastify';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const EditModel = ({ FormTable,setFormTable} : any) => {
  let [isPending, startTransition] = useTransition()

  const handleSubmit = (values : any) => {
 
    startTransition(() => ServerApi(values))
    Response()
    .then(result => {
        toast.success(" Edit vvsuccess")
        setFormTable((pre:any)=>({...pre,["OpenEdit"]:false}))
    })
    .catch(error => {
        toast.error("error")

    });
    
  }
  
  return (
         <Modal show={FormTable?.OpenEdit}  centered size={"lg"} onHide={() => setFormTable((pre: any) => ({...pre, OpenEdit: false}))}>
         <Modal.Header closeButton>
           <Modal.Title>Add new user</Modal.Title>
         </Modal.Header>
         <Formik
             onSubmit={values => handleSubmit(values)}
             initialValues={getInitialValues(FormTable.objectToEdit)}
             validationSchema={getValidationSchema()}
           >
             {() => {
               return (
                 <Form>
         <Modal.Body>  <EditModelBody /> </Modal.Body>
         <Modal.Footer>
           <Button variant="danger" onClick={() => setFormTable((pre: any) => ({...pre, OpenEdit: false}))}>
             Close
           </Button>
           <Button  type="submit" color="primary" className="Model_Button" onClick={() => setFormTable((pre: any) => ({...pre, OpenEdit: true}))}>
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

export default EditModel;