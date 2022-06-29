import React from "react";
import "./ScheduleForm.css"


import {
  MDBRow,
  MDBCol,
  MDBInput,
  MDBCheckbox,
  MDBBtn
} from 'mdb-react-ui-kit';

const ScheduleForm = (props) => {
  return (
    <div className="container-form">
    <div className="container">
      <div className="title">Title</div>
      <form>
      <MDBRow className='mb-4'>
        <MDBCol>
          <MDBInput  label='First name' />
        </MDBCol>
        <MDBCol>
          <MDBInput  label='Last name' />
        </MDBCol>
      </MDBRow>

      <MDBInput wrapperClass='mb-4'  label='Company name' />
      <MDBInput wrapperClass='mb-4'  label='Address' />
      <MDBInput wrapperClass='mb-4' type='email'  label='Email' />
      <MDBInput wrapperClass='mb-4' type='tel'  label='Phone' />

      <MDBInput wrapperClass='mb-4'  rows={4} label='Additional information' />

      <MDBCheckbox
        wrapperClass='d-flex justify-content-center mb-4'
        label='Create an account?'
        defaultChecked
      />

      <MDBBtn className='mb-4' type='submit' block>
        Place order
      </MDBBtn>
    </form>
    </div>
    </div>
    
  );
};

export default ScheduleForm;