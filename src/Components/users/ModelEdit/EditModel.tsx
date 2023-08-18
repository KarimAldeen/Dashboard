'use client'
import { Form, Formik } from 'formik';
import React from 'react';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { LoadingButton } from '../../Utils/LoadingButton';
import EditModelBody from './EditModelBody';
import { getDataToSend, getInitialValues, getValidationSchema } from '../Formik';
import { ServerApi } from '../Api/Edit';

const EditModel = ({ FormTable,setFormTable} : any) => {
  
  const handleSubmit = (values : any) => {
 
    ServerApi(values)
    setFormTable((pre:any)=>({...pre,["OpenEdit"]:false}))

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
              <Button type='submit' color='primary'className='Model_Button'>
                {('submit')}
              </Button>
            </ModalFooter>
          </Form>
        )}
      </Formik>
    </Modal>
  );
};

export default EditModel;