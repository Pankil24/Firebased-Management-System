import { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { apiEndpoint } from '../lib/base-url'
import axiosHandler from '../lib/axiosInterceptor'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { customToast } from '../lib/AllGlobalFunction'
import { setUserInfo } from './Redux/slice/userSlice'

function Register() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  // Validation Schema
  const validationSchema = Yup.object({
    name: Yup.string().required('Full Name is required'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    phoneNo: Yup.string()
      .matches(/^[0-9]{10}$/, 'Phone number must be 10 digits')
      .required('Phone number is required'),
    role: Yup.string().required('Role is required'),
    password: Yup.string()
      .min(8, 'Password must be at least 8 characters')
      .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
      .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
      .matches(/[0-9]/, 'Password must contain at least one number')
      .matches(/[\W_]/, 'Password must contain at least one special character')
      .required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Confirm Password is required'),
    address: Yup.string().required('Address is required')
  })
  return (
    <>
      <meta charSet='UTF-8' />
      <meta
        name='viewport'
        content='width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no'
      />
      <meta name='description' content='' />
      <meta name='theme-color' content='#ffffff' />
      <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
      <meta name='robots' content='' />
      {/* Font Links */}
      <title />
      {/* SEO Description */}
      <meta name='description' content='' />
      <link rel='preconnect' href='https://fonts.googleapis.com' />
      <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='' />
      {/* Performance optimization: Preload critical resources */}
      <link rel='preload' href='https://cdn.tailwindcss.com' as='script' />
      {/* Header Scripts */}
      {/* Preconnect */}
      <link rel='preconnect' href='https://fonts.googleapis.com' />
      <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='' />
      {/* Font stylesheet */}
      {/* Core CSS */}
      {/* Utilities and Components */}
      {/* Optimized Font Loading */}
      <link rel='preconnect' href='https://fonts.googleapis.com' />
      <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='' />
      {/* Icons */}
      <link
        rel='stylesheet'
        href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css'
        integrity='sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=='
        crossOrigin='anonymous'
        referrerPolicy='no-referrer'
      />
      {/* Dynamic Meta Tags */}
      <meta name='description' content='' />
      <meta name='keywords' content='' />
      <meta name='robots' content='' />
      <meta name='google-site-verification' content='' />
      <meta name='baidu-verification' content='' />
      <meta name='yandex-verification' content='' />
      <meta name='bing-verification' content='' />
      <meta property='og:title' content='' />
      <meta property='og:description' content='' />
      <meta property='og:image' content='' />
      <meta property='og:type' content='website' />
      <meta property='og:locale' content='en_US' />
      <meta property='og:site_name' content='' />
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:title' content='' />
      <meta name='twitter:description' content='' />
      <meta name='twitter:image' content='' />
      {/* Font Links */}
      <link rel='icon' type='image/x-icon' href='' />
      <style
        dangerouslySetInnerHTML={{
          __html:
            '\n        h1, h2, h3, h4, h5, h6 {\n          font-family: Roboto, sans-serif, Inter, system-ui, sans-serif;\n        }\n        body {\n          font-family: Open Sans, sans-serif, Inter, system-ui, sans-serif;\n        }\n      '
        }}
      />
      {/* Skip to main content link for accessibility */}
      <a
        href='#main-content'
        className='sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 focus:z-50 focus:p-4 focus:bg-white focus:text-black'
      >
        Skip to main content
      </a>
      {/* Main content area */}
      <main id='main-content' className='flex-1 relative h-full'>
        {/* Content will be injected here */}
      </main>
      <div id='RolloutPageContent'>
        <element
          id='cb481b0f-2b8c-43ce-95db-e9c45ca1b986'
          data-section-id='cb481b0f-2b8c-43ce-95db-e9c45ca1b986'
        >
          <div id='root'>
            <section
              id='signup-form'
              className='py-12 bg-neutral-900 min-h-screen flex items-center justify-center'
            >
              <div className='container mx-auto px-4 sm:px-6 lg:px-8 pt-16'>
                <div className='max-w-3xl mx-auto bg-neutral-800 rounded-lg shadow-xl overflow-hidden'>
                  <div className='bg-neutral-800 from-[#FF4500] to-[#1E3A8A] p-6 text-white text-center'>
                    <h2 className='text-3xl font-bold mb-2 animate__animated animate__fadeIn'>
                      Create Your Account
                    </h2>
                    <p className='text-sm opacity-90 border-b pb-9'>
                      Join our Fire Safety Management System
                    </p>
                  </div>
                  <div className='p-6 sm:p-8'>
                    <Formik
                      initialValues={{
                        name: '',
                        email: '',
                        phoneNo: '',
                        role: '',
                        password: '',
                        confirmPassword: '',
                        address: ''
                      }}
                      validationSchema={validationSchema}
                      onSubmit={async (values) => {
                        console.log('Form Data:', values)
                        try {
                          const response = await axiosHandler.post(
                            apiEndpoint?.userRegister,
                            values
                          )
                          console.log('Response ==>', response)
                          if (response?.status === 201) {
                            navigate('/')
                            customToast(dispatch, response)
                            dispatch(
                              setUserInfo({
                                userInfo: {
                                  ...response?.data
                                }
                              })
                            )
                          }
                        } catch (error) {
                          //   customToast(dispatch, error?.response)
                        }
                      }}
                    >
                      {({ setFieldValue, values }) => (
                        <Form className='space-y-6'>
                          {/* Full Name */}
                          <div>
                            <label
                              htmlFor='name'
                              className='block text-sm font-medium text-neutral-300 mb-1'
                            >
                              Full Name
                            </label>
                            <Field
                              type='text'
                              id='name'
                              name='name'
                              className='w-full px-4 py-3 rounded-md bg-neutral-700 border border-neutral-600 text-white focus:outline-none focus:ring-2 focus:ring-[#FFD700] transition-all'
                            />
                            <ErrorMessage
                              name='name'
                              component='p'
                              className='mt-1 text-sm text-red-600'
                            />
                          </div>

                          {/* Email Address */}
                          <div>
                            <label
                              htmlFor='email'
                              className='block text-sm font-medium text-neutral-300 mb-1'
                            >
                              Email Address
                            </label>
                            <Field
                              type='email'
                              id='email'
                              name='email'
                              className='w-full px-4 py-3 rounded-md bg-neutral-700 border border-neutral-600 text-white focus:outline-none focus:ring-2 focus:ring-[#FFD700] transition-all'
                            />
                            <ErrorMessage
                              name='email'
                              component='p'
                              className='mt-1 text-sm text-red-600'
                            />
                          </div>

                          {/* Phone Number */}
                          <div>
                            <label
                              htmlFor='phoneNO'
                              className='block text-sm font-medium text-neutral-300 mb-1'
                            >
                              Phone Number
                            </label>
                            <Field
                              type='tel'
                              id='phoneNo'
                              name='phoneNo'
                              className='w-full px-4 py-3 rounded-md bg-neutral-700 border border-neutral-600 text-white focus:outline-none focus:ring-2 focus:ring-[#FFD700] transition-all'
                            />
                            <ErrorMessage
                              name='phoneNo'
                              component='p'
                              className='mt-1 text-sm text-red-600'
                            />
                          </div>

                          {/* Role Selection */}
                          <div>
                            <label
                              htmlFor='role'
                              className='block text-sm font-medium text-neutral-300 mb-1'
                            >
                              Select Your Role
                            </label>
                            <Field
                              as='select'
                              id='role'
                              name='role'
                              className='w-full px-4 py-3 rounded-md bg-neutral-700 border border-neutral-600 text-white focus:outline-none focus:ring-2 focus:ring-[#FFD700] transition-all'
                            >
                              <option value=''>Choose your role</option>
                              <option value='Admin'>Admin</option>
                              <option value='Business Owner'>
                                Business Owner
                              </option>
                              <option value='Fire Officer'>Fire Officer</option>
                              <option value='Inspector'>Inspector</option>
                            </Field>
                            <ErrorMessage
                              name='role'
                              component='p'
                              className='mt-1 text-sm text-red-600'
                            />
                          </div>

                          {/* Password */}
                          <div>
                            <label
                              htmlFor='password'
                              className='block text-sm font-medium text-neutral-300 mb-1'
                            >
                              Password
                            </label>
                            <div className='relative'>
                              <Field
                                type={showPassword ? 'text' : 'password'}
                                id='password'
                                name='password'
                                className='w-full px-4 py-3 rounded-md bg-neutral-700 border border-neutral-600 text-white focus:outline-none focus:ring-2 focus:ring-[#FFD700] transition-all'
                              />
                              <button
                                type='button'
                                onClick={() => setShowPassword(!showPassword)}
                                className='absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 hover:text-gray-600'
                              >
                                👁
                              </button>
                            </div>
                            <ErrorMessage
                              name='password'
                              component='p'
                              className='mt-1 text-sm text-red-600'
                            />
                          </div>

                          {/* Confirm Password */}
                          <div>
                            <label
                              htmlFor='confirmPassword'
                              className='block text-sm font-medium text-neutral-300 mb-1'
                            >
                              Confirm Password
                            </label>
                            <div className='relative'>
                              <Field
                                type={showConfirmPassword ? 'text' : 'password'}
                                id='confirmPassword'
                                name='confirmPassword'
                                className='w-full px-4 py-3 rounded-md bg-neutral-700 border border-neutral-600 text-white focus:outline-none focus:ring-2 focus:ring-[#FFD700] transition-all'
                              />
                              <button
                                type='button'
                                onClick={() =>
                                  setShowConfirmPassword(!showConfirmPassword)
                                }
                                className='absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 hover:text-gray-600'
                              >
                                👁
                              </button>
                            </div>
                            <ErrorMessage
                              name='confirmPassword'
                              component='p'
                              className='mt-1 text-sm text-red-600'
                            />
                          </div>

                          {/* Address */}
                          <div>
                            <label
                              htmlFor='address'
                              className='block text-sm font-medium text-neutral-300 mb-1'
                            >
                              Address
                            </label>
                            <Field
                              type='text'
                              id='address'
                              name='address'
                              className='w-full px-4 py-3 rounded-md bg-neutral-700 border border-neutral-600 text-white focus:outline-none focus:ring-2 focus:ring-[#FFD700] transition-all'
                            />
                            <ErrorMessage
                              name='address'
                              component='p'
                              className='mt-1 text-sm text-red-600'
                            />
                          </div>

                          {/* Document Upload (Only for Business Owners) */}

                          <button
                            type='submit'
                            className='w-full bg-[#FFD700] text-black py-3 rounded-md'
                          >
                            Register
                          </button>
                        </Form>
                      )}
                    </Formik>
                  </div>
                </div>
                {/* Success Message Modal (Initially Hidden) */}
                <div
                  id='success-modal'
                  className='fixed inset-0 flex items-center justify-center z-50 hidden'
                >
                  <div className='absolute inset-0 bg-black opacity-50' />
                  <div className='bg-white rounded-lg p-8 max-w-md z-10 animate__animated animate__fadeInUp'>
                    <div className='text-center'>
                      <div className='mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100'>
                        <svg
                          className='h-6 w-6 text-green-600'
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'
                          stroke='currentColor'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M5 13l4 4L19 7'
                          />
                        </svg>
                      </div>
                      <h3 className='mt-4 text-lg font-medium text-gray-900'>
                        Registration Successful!
                      </h3>
                      <p className='mt-2 text-sm text-gray-500'>
                        Your account has been created successfully. You will be
                        redirected to the login page shortly.
                      </p>
                      <div className='mt-6'>
                        <button
                          type='button'
                          id='success-button'
                          className='w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-[#FF4500] text-base font-medium text-white hover:bg-[#E03E00] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FF4500] sm:text-sm'
                        >
                          Continue to Login
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </element>
        <element
          id='99095da1-7f86-435a-a7b1-9c537b326f32'
          data-section-id='99095da1-7f86-435a-a7b1-9c537b326f32'
        >
          <div id='root'>
            <footer id='footer' className='bg-neutral-900 text-white'>
              <div className='container mx-auto px-4 py-12'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
                  {/* Column 1: About */}
                  <div>
                    <h3 className='text-xl font-bold mb-4'>FireSafe</h3>
                    <p className='text-neutral-400 mb-4'>
                      Professional fire safety management system designed to
                      streamline compliance and protect your organization.
                    </p>
                    <div className='flex space-x-4'>
                      <a
                        href='#'
                        className='text-neutral-400 hover:text-[#FFD700] transition-colors'
                      >
                        <span className='sr-only'>Facebook</span>
                        <svg
                          className='h-6 w-6'
                          fill='currentColor'
                          viewBox='0 0 24 24'
                          aria-hidden='true'
                        >
                          <path
                            fillRule='evenodd'
                            d='M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z'
                            clipRule='evenodd'
                          />
                        </svg>
                      </a>
                      <a
                        href='#'
                        className='text-neutral-400 hover:text-[#FFD700] transition-colors'
                      >
                        <span className='sr-only'>Twitter</span>
                        <svg
                          className='h-6 w-6'
                          fill='currentColor'
                          viewBox='0 0 24 24'
                          aria-hidden='true'
                        >
                          <path d='M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84' />
                        </svg>
                      </a>
                      <a
                        href='#'
                        className='text-neutral-400 hover:text-[#FFD700] transition-colors'
                      >
                        <span className='sr-only'>LinkedIn</span>
                        <svg
                          className='h-6 w-6'
                          fill='currentColor'
                          viewBox='0 0 24 24'
                          aria-hidden='true'
                        >
                          <path
                            fillRule='evenodd'
                            d='M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z'
                            clipRule='evenodd'
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                  {/* Column 2: Quick Links */}
                  <div>
                    <h3 className='text-lg font-semibold mb-4'>Quick Links</h3>
                    <ul className='space-y-2'>
                      <li>
                        <a
                          href='#'
                          className='text-neutral-400 hover:text-[#FFD700] transition-colors'
                        >
                          Home
                        </a>
                      </li>
                      <li>
                        <a
                          href='#about'
                          className='text-neutral-400 hover:text-[#FFD700] transition-colors'
                        >
                          About
                        </a>
                      </li>
                      <li>
                        <a
                          href='#features'
                          className='text-neutral-400 hover:text-[#FFD700] transition-colors'
                        >
                          Features
                        </a>
                      </li>
                      <li>
                        <a
                          href='#benefits'
                          className='text-neutral-400 hover:text-[#FFD700] transition-colors'
                        >
                          Benefits
                        </a>
                      </li>
                      <li>
                        <a
                          href='#testimonials'
                          className='text-neutral-400 hover:text-[#FFD700] transition-colors'
                        >
                          Testimonials
                        </a>
                      </li>
                      <li>
                        <a
                          href='#faq'
                          className='text-neutral-400 hover:text-[#FFD700] transition-colors'
                        >
                          FAQ
                        </a>
                      </li>
                      <li>
                        <a
                          href='#contact'
                          className='text-neutral-400 hover:text-[#FFD700] transition-colors'
                        >
                          Contact
                        </a>
                      </li>
                    </ul>
                  </div>
                  {/* Column 3: Important Links */}
                  <div>
                    <h3 className='text-lg font-semibold mb-4'>Resources</h3>
                    <ul className='space-y-2'>
                      <li>
                        <a
                          href='#login-form'
                          className='text-neutral-400 hover:text-[#FFD700] transition-colors'
                        >
                          Login
                        </a>
                      </li>
                      <li>
                        <a
                          href='#signup'
                          className='text-neutral-400 hover:text-[#FFD700] transition-colors'
                        >
                          Sign Up
                        </a>
                      </li>
                      <li>
                        <a
                          href='#forgot-password'
                          className='text-neutral-400 hover:text-[#FFD700] transition-colors'
                        >
                          Forgot Password
                        </a>
                      </li>
                      <li>
                        <a
                          href='#'
                          className='text-neutral-400 hover:text-[#FFD700] transition-colors'
                        >
                          Help Documentation
                        </a>
                      </li>
                      <li>
                        <a
                          href='#'
                          className='text-neutral-400 hover:text-[#FFD700] transition-colors'
                        >
                          API Reference
                        </a>
                      </li>
                      <li>
                        <a
                          href='#'
                          className='text-neutral-400 hover:text-[#FFD700] transition-colors'
                        >
                          System Status
                        </a>
                      </li>
                    </ul>
                  </div>
                  {/* Column 4: Newsletter */}
                  <div>
                    <h3 className='text-lg font-semibold mb-4'>Stay Updated</h3>
                    <p className='text-neutral-400 mb-4'>
                      Subscribe to our newsletter for the latest updates, tips,
                      and fire safety best practices.
                    </p>
                    <form className='space-y-2'>
                      <div>
                        <label htmlFor='email-address' className='sr-only'>
                          Email address
                        </label>
                        <input
                          id='email-address'
                          name='email'
                          type='email'
                          required=''
                          className='w-full px-4 py-2 rounded-md bg-neutral-800 border border-neutral-700 text-white focus:outline-none focus:ring-2 focus:ring-[#FFD700]'
                          placeholder='Enter your email'
                        />
                      </div>
                      <div>
                        <button
                          type='submit'
                          className='w-full bg-[#FF4500] hover:bg-[#FF6347] text-white font-medium py-2 px-4 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-[#FFD700] focus:ring-offset-2 focus:ring-offset-neutral-900'
                        >
                          Subscribe
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                <hr className='border-neutral-800 my-8' />
                {/* Bottom Footer */}
                <div className='flex flex-col md:flex-row justify-between items-center'>
                  <div className='text-neutral-400 text-sm mb-4 md:mb-0'>
                    © 2023 FireSafe Management System. All rights reserved.
                  </div>
                  <div className='flex space-x-6'>
                    <a
                      href='#'
                      className='text-neutral-400 hover:text-[#FFD700] text-sm transition-colors'
                    >
                      Privacy Policy
                    </a>
                    <a
                      href='#'
                      className='text-neutral-400 hover:text-[#FFD700] text-sm transition-colors'
                    >
                      Terms of Service
                    </a>
                    <a
                      href='#'
                      className='text-neutral-400 hover:text-[#FFD700] text-sm transition-colors'
                    >
                      Cookie Policy
                    </a>
                  </div>
                </div>
                {/* Fire Safety Disclaimer */}
                <div className='mt-8 p-4 bg-neutral-800 rounded-lg text-center'>
                  <p className='text-neutral-400 text-sm'>
                    <span className='text-[#FF4500] font-medium'>
                      IMPORTANT:
                    </span>{' '}
                    This system is for fire safety management purposes only. In
                    case of fire emergency, please call your local emergency
                    services immediately.
                  </p>
                </div>
              </div>
              {/* Back to Top Button */}
              <button
                id='back-to-top'
                className='fixed bottom-6 right-6 bg-[#FF4500] text-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg transform transition-transform duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#FFD700] opacity-0 invisible'
              >
                <span className='sr-only'>Back to top</span>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-6 w-6'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M5 15l7-7 7 7'
                  />
                </svg>
              </button>
            </footer>
          </div>
        </element>
      </div>
      <div id='page_complete'></div>
    </>
  )
}

export default Register
