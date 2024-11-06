'use client';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import {authSchema} from '@/features/auth/schemas/authSchema'
import instance from '@/utils/axiosInstance';
import {useMutation} from '@tanstack/react-query';
import {toast} from 'react-toastify'

import authStore from './../zustand/authStore';

import {useRouter} from 'next/navigation';

export default function HomePage() {
  const router = useRouter()
  const setAuth = authStore((state: any) =>  state.setAuth)

  const {mutate: mutateAuthLogin} = useMutation({
    mutationFn: async({email, password}: any) => {
      return await instance.post('/auth', {
        email, 
        password
      })
    }, 

    onSuccess: (res) => {
      setAuth(
        {
          token: res?.data?.data?.token, 
          username: res?.data?.data?.username, 
          role: res?.data?.data?.role
        }
      )
      toast.success('Auth Login Success!')
      router.push('/dashboard')
    },

    onError: (err: any) => {
      toast.error(err?.response?.data?.message)
    }
  })

  return (
    <main>
      <section className='p-10'>
        <h1 className='text-4xl font-bold'>
          Selamat Datang
        </h1>
        <h1 className='text-md font-light'>
          Masukan email dan password untuk masuk
        </h1>
        <Formik
          initialValues={{
            email: '', 
            password: ''
          }}
          validationSchema={authSchema}
          onSubmit={(values) => {
            mutateAuthLogin({email: values.email, password: values.password})
          }}
        >
          <Form className='w-full py-10 flex flex-col gap-5'>
            <label className='form-control w-full'>
              <div className='label'>
                <span className='label-text-alt'>Email</span>
              </div>
              <Field name='email' type='text' className='input input-bordered w-full' />
              <ErrorMessage name='email' component={'div'} className='text-red-500 text-sm' />
            </label>
            <label className='form-control w-full'>
              <div className='label'>
                <span className='label-text-alt'>Password</span>
              </div>
              <Field name='password' type='password' className='input input-bordered w-full' />
              <ErrorMessage name='password' component={'div'} className='text-red-500 text-sm' />
            </label>
            <button className='btn bg-red-500 text-white w-full'>
              Sign In
            </button>
          </Form>
        </Formik>
      </section>
    </main>
  );
}
