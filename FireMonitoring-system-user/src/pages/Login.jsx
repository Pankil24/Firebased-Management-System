import { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import axiosHandler from '../lib/axiosInterceptor'
import { apiEndpoint } from '../lib/base-url'
import { useNavigate } from 'react-router-dom'
import { customToast } from '../lib/AllGlobalFunction'
import { useDispatch } from 'react-redux'
import { setUserInfo } from './Redux/slice/userSlice'

function Login() {
  const LoginSchema = Yup.object().shape({
    email: Yup.string().required('Email/Username is required'),
    password: Yup.string().required('Password is required')
  })
  const [showPassword, setShowPassword] = useState(false)
  const navigate = useNavigate()
  const dispatch = useDispatch()

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
      {/* {bodyScripts} */}
      <div id='RolloutPageContent'>
        {/*  */}
        <element
          id='07dc9d51-013b-4111-8ba7-cd09c50c5567'
          data-section-id='07dc9d51-013b-4111-8ba7-cd09c50c5567'
        >
          <div id='root'>
            <section
              id='login-form'
              className='bg-neutral-900 min-h-screen flex items-center justify-center px-4 py-12'
            >
              <div className='max-w-md w-full bg-neutral-800 rounded-lg shadow-xl overflow-hidden'>
                <div className='p-6 sm:p-8'>
                  <div className='text-center mb-8'>
                    <h2 className='text-2xl font-bold text-white mb-2'>
                      Fire Safety Management
                    </h2>
                    <p className='text-neutral-400'>Login to your account</p>
                  </div>
                  {/* Error Alert */}
                  <div
                    id='error-message'
                    className='hidden mb-6 bg-red-500 bg-opacity-25 border border-red-500 text-red-100 px-4 py-3 rounded animate__animated animate__fadeIn'
                    role='alert'
                  >
                    <p className='text-sm'>
                      Invalid username or password. Please try again.
                    </p>
                  </div>
                  {/* Login Form */}
                  <Formik
                    initialValues={{
                      email: '',
                      password: ''
                      //   role: '',
                      //   remember: false
                    }}
                    validationSchema={LoginSchema}
                    onSubmit={async (values) => {
                      console.log('Form values:', values)

                      const response = await axiosHandler.post(
                        apiEndpoint?.userLogin,
                        values
                      )

                      if (response?.status === 200) {
                        navigate('/')
                        customToast(dispatch, response)
                        dispatch(
                          setUserInfo({
                            userInfo: {
                              ...response?.data
                            }
                          })
                        )
                        console.log('here is your login')
                      }
                    }}
                  >
                    {({ handleSubmit }) => (
                      <Form
                        id='loginForm'
                        className='space-y-6'
                        onSubmit={handleSubmit}
                      >
                        {/* Email/Username Field */}
                        <div>
                          <label
                            htmlFor='email'
                            className='block text-sm font-medium text-neutral-300 mb-1'
                          >
                            Email/Username
                          </label>
                          <Field
                            type='text'
                            id='email'
                            name='email'
                            className='w-full px-4 py-3 rounded-md bg-neutral-700 border border-neutral-600 text-white focus:outline-none focus:ring-2 focus:ring-[#FFD700] transition-all'
                            placeholder='Enter your email or username'
                          />
                          <ErrorMessage
                            name='email'
                            component='div'
                            className='text-red-500 text-sm'
                          />
                        </div>

                        {/* Password Field */}
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
                              placeholder='Enter your password'
                            />
                            <button
                              type='button'
                              className='absolute right-3 top-1/2 transform -translate-y-1/2 text-neutral-400 hover:text-neutral-200 focus:outline-none'
                              onClick={() => setShowPassword(!showPassword)}
                              aria-label='Toggle password visibility'
                            >
                              {showPassword ? '🙈' : '👁️'}
                            </button>
                          </div>
                          <ErrorMessage
                            name='password'
                            component='div'
                            className='text-red-500 text-sm'
                          />
                        </div>

                        {/* Role Selection Dropdown */}
                        <div>
                          {/* <label
                            htmlFor='role'
                            className='block text-sm font-medium text-neutral-300 mb-1'
                          >
                            Login as
                          </label> */}
                          {/* <Field
                            as='select'
                            id='role'
                            name='role'
                            className='w-full px-4 py-3 rounded-md bg-neutral-700 border border-neutral-600 text-white focus:outline-none focus:ring-2 focus:ring-[#FFD700] transition-all'
                          >
                            <option value='' disabled>
                              Select your role
                            </option>
                            <option value='business'>Business Owner</option>
                            <option value='inspector'>Inspector</option>
                            <option value='officer'>Fire Officer</option>
                            <option value='admin'>Admin</option>
                          </Field>
                          <ErrorMessage
                            name='role'
                            component='div'
                            className='text-red-500 text-sm'
                          />
                        </div>

                        <div className='flex items-center'>
                          <Field
                            type='checkbox'
                            id='remember'
                            name='remember'
                            className='h-4 w-4 bg-neutral-700 border-neutral-600 text-[#FF4500] focus:ring-[#FFD700] rounded'
                          />
                          <label
                            htmlFor='remember'
                            className='ml-2 block text-sm text-neutral-300'
                          >
                            Remember me
                          </label> */}
                          <a
                            href='#forgot-password'
                            className='ml-auto text-sm text-[#FFD700] hover:underline'
                          >
                            Forgot password?
                          </a>
                        </div>

                        {/* Login Button */}
                        <div>
                          <button
                            type='submit'
                            className='w-full bg-[#FF4500] hover:bg-[#FF6347] text-white font-medium py-3 px-4 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-[#FFD700] focus:ring-offset-2 focus:ring-offset-neutral-800'
                          >
                            Login
                          </button>
                        </div>

                        {/* Sign Up Link */}
                        <div className='text-center text-neutral-400 text-sm'>
                          Don't have an account?{' '}
                          <a
                            href='/register'
                            className='text-[#FFD700] hover:underline'
                          >
                            Sign up
                          </a>
                        </div>
                      </Form>
                    )}
                  </Formik>
                </div>
              </div>
            </section>
          </div>
        </element>
        <element
          id='17dec798-a24f-413d-9f12-211c42ad0922'
          data-section-id='17dec798-a24f-413d-9f12-211c42ad0922'
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

export default Login
