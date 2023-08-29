import React from 'react'
import { ValidatedField } from '../../Utils/ValidatedField'
import { Col, Input, Row } from 'reactstrap'
import { useFormikContext } from 'formik';

const AddModelBody = () => {

  const formik = useFormikContext();

  return (
    <Row xs={1} sm={1} md={1} lg={2} xl={2} className="p-2" >
      <Col>
        <ValidatedField
          name="name"
          ///@ts-ignore 
          label={("name")}
          placeholder={("name")}
          type="string"
          
        />
         <Input
      id="exampleFile"
      className='form-control form-label'
      name="file"
      type="file"
    />
      </Col>

      <Col>
       
          <ValidatedField
          name="password"
          ///@ts-ignore 
          label={("password")}
          placeholder={("password")}
          type="string"
          
        />
      </Col>
    </Row>
  )
}

export default AddModelBody