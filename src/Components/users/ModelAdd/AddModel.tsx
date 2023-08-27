'use client'
import { Form, Formik } from 'formik';
import React, { useTransition } from 'react';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import AddModelBody from './AddModelBody';
import { getInitialValues, getValidationSchema } from '../Formik';
import { ServerApi } from '../Api/Add';
import Tostifay from '@/Hooks/Tostifay';
import Response from '@/Hooks/Response';
import { toast } from 'react-toastify';

const AddModel = ({ FormTable,setFormTable} : any) => {
  let [isPending, startTransition] = useTransition()
  
  const handleSubmit = (values : any) => {
    startTransition(() => ServerApi(values))
    Tostifay("Added sucsses")
    
    Response()  
    .then(result => {
        toast.success("success")
        setFormTable((pre:any)=>({...pre,["OpenAdd"]:false}))
    })
    .catch(error => {
        toast.error("error")

    });
  }
 
  return (
    <Modal isOpen={FormTable["OpenAdd"]} centered size={"lg"}>
      <ModalHeader toggle={() => setFormTable((pre:any)=>({...pre,["OpenAdd"]:false})) }>
        {("Add_new user")}
      </ModalHeader>
      <Formik
        onSubmit={(values)=>handleSubmit(values)}
        initialValues={getInitialValues(FormTable["objectToAdd"])}
        validationSchema={getValidationSchema()}
      >
        {(formik) => (
          <Form>
            <ModalBody>
              <AddModelBody/>
            </ModalBody>
            <ModalFooter>
              <Button  onClick={() => setFormTable((pre:any)=>({...pre,["OpenAdd"]:false})) } color='danger'>
                {('cancel')}
              </Button>
              <Button type='submit' color='primary'  className='Model_Button'>
                {isPending  ? "Adding...." :'submit' }
                
              </Button>
            </ModalFooter>
          </Form>
        )}
      </Formik>
    </Modal>
  );
};

export default AddModel;