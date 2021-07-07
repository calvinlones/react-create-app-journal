import React from 'react'

import './style.css'

import {
  Form as BTForm,
  FormGroup,
  Input,
  Label,
  Col,
  Button
} from 'reactstrap'

const Form = ({
  content,
  handleContent,
  handleSubmitForm
}) => (
  <BTForm style={{ margin: 10 }} onSubmit={handleSubmitForm}>
    <FormGroup className='row'>
      <Label for='exampleText' sm={2}>
        Journal Entry
      </Label>
      <Col sm={8}>
        <Input
          type='textarea'
          name='content'
          id='entryContent'
          placeholder='Write your thoughts here'
          data-testid='rtl-test'
          value={content}
          onChange={handleContent}
        />
      </Col>
      <Col sm={2}>
        <Button type='submit' color='primary' id='add-btn' >
          New Entry
        </Button>{' '}
      </Col>
    </FormGroup>
  </BTForm>
)

export default Form