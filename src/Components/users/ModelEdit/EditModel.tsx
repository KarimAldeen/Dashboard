'use client'
import { Form, Formik } from 'formik';
import React, { useTransition } from 'react';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { LoadingButton } from '../../Utils/LoadingButton';
import EditModelBody from './EditModelBody';
import { getDataToSend, getInitialValues, getValidationSchema } from '../Formik';
import { ServerApi } from '../Api/Edit';
import Response from '@/Hooks/Response';
import { toast } from 'react-toastify';

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
    <Modal isOpen={FormTable["OpenEdit"]} centered size={"lg"}>
      <ModalHeader toggle={() => setFormTable((pre:any)=>({...pre,["OpenEdit"]:false})) }>
        {("Edit_new user")}
      </ModalHeader>
      <Formik
        onSubmit={(values)=>handleSubmit(values)}
        initialValues={getInitialValues(FormTable["objectToEdit"])}
        validationSchema={getValidationSchema()}
      >
        {(formik) => (
          <Form>
            <ModalBody>
              <EditModelBody/>
            </ModalBody>
            <ModalFooter>
              <Button  onClick={() => setFormTable((pre:any)=>({...pre,["OpenEdit"]:false})) } color='danger'>
                {('cancel')}
              </Button>
              <LoadingButton isLoading={isPending} type='submit' color='primary'className='Model_Button'>
                {('submit')}
              </LoadingButton>
            </ModalFooter>
          </Form>
        )}
      </Formik>
    </Modal>
  );
};

export default EditModel;