import React from 'react'
import { ValidatedField } from '../../Utils/ValidatedField'
import { Col, Row } from 'reactstrap'

const EditModelBody = () => {
  return (
    <Row xs={1} sm={1} md={1} lg={2} xl={2} className="p-2" >
    <Col>
      <ValidatedField
        name="name"
        ///@ts-ignore 
        label={("name")}
        placeholder={("name")}
        type="string"
        required
      />
      <ValidatedField
        name="password"
        ///@ts-ignore
        label={("password")}
        placeholder={("password")}
        type="string"
        required
      />
    </Col>
    <Col>
      <ValidatedField
        name="email"
        ///@ts-ignore 
        label={("email")}
        placeholder={("email")}
        type="string"
        required
      />
    </Col>
  </Row>
  )
}

export default EditModelBody