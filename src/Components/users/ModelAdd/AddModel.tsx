'use client'
import { Form, Formik } from 'formik';
import React, { useTransition } from 'react';
import AddModelBody from './AddModelBody';
import { getInitialValues, getValidationSchema } from '../Formik';
import { ServerApi } from '../Api/Add';
import Tostifay from '@/Hooks/api/Tostifay';
import Response from '@/Hooks/api/Response';
import { toast } from 'react-toastify';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


const AddModel = ({ FormTable, setFormTable}:{FormTable:any, setFormTable:any}) => {
  let [isPending, startTransition] = useTransition(); 
  const handleSubmit = (values: any) => {
    startTransition(() => ServerApi(values));
    Tostifay("Added success");
    
    Response()  
      .then(result => {
        toast.success("success");
        setFormTable((pre: any) => ({...pre, OpenAdd: false}));
      })
      .catch(error => {
        toast.error("error");
      });
  };
 
  return (
   
     <Modal show={FormTable?.OpenAdd}  centered size={"lg"} onHide={() => setFormTable((pre: any) => ({...pre, OpenAdd: false}))}>
     <Modal.Header closeButton>
       <Modal.Title>Add new user</Modal.Title>
     </Modal.Header>
     <Formik
         onSubmit={values => handleSubmit(values)}
         initialValues={getInitialValues(FormTable.objectToAdd)}
         validationSchema={getValidationSchema()}
       >
         {() => {
           return (
             <Form>
     <Modal.Body>  <AddModelBody /> </Modal.Body>
     <Modal.Footer>
       <Button variant="danger" onClick={() => setFormTable((pre: any) => ({...pre, OpenAdd: false}))}>
         Close
       </Button>
       <Button  type="submit" color="primary" className="Model_Button" onClick={() => setFormTable((pre: any) => ({...pre, OpenAdd: true}))}>
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