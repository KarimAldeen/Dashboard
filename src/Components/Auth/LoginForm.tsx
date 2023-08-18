"use client"
import React from 'react'
import { Formik, Form, Field } from 'formik';
import { useAuthSubmit } from './useAuthSubmit';
import { useRouter } from 'next/navigation';

const LoginForm = () => {
  const router = useRouter()
  return (
    <Formik
    initialValues={{ username: '', password: '' }}
    onSubmit={(values) => useAuthSubmit(values,router)}
  >
    <Form>
      <div className='form-outline mb-4'>
        <label className='form-label' htmlFor='username'>
          Username
        </label>
        <Field
          as='input'
          type='text'
          id='username'
          name='username'
          className='form-control form-control-lg'
        />
      </div>

      <div className='form-outline mb-4'>
        <label className='form-label' htmlFor='password'>
          Password
        </label>
        <Field
          as='input'
          type='password'
          id='password'
          name='password'
          className='form-control form-control-lg'
        />
      </div>

      <button type='submit' className='btn btn-primary btn-lg btn-block w-100'>
        Sign in
      </button>
    </Form>
  </Formik>
  )
}

export default LoginForm