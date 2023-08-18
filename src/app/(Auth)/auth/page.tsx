import React from 'react';
import LoginForm from '@/Components/Auth/LoginForm';

const Auth = () => {

  return (
    <div className='Auth'>
      <div className='In_Auth'>
        <div className="row d-flex align-items-center justify-content-center ">
          <div className="col-md-8 col-lg-7 col-xl-6">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
              className="img-fluid"
              alt="Phone image"
            />
          </div>
          <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
           <LoginForm/>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Auth;
