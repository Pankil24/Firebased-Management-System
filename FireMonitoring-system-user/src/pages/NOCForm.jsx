import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import axiosHandler from '../lib/axiosInterceptor'
import { useState } from 'react'
import { customToast } from '../lib/AllGlobalFunction'
import { useDispatch } from 'react-redux'

const FILE_SIZE = 5 * 1024 * 1024 // 5MB
const SUPPORTED_FORMATS = ['application/pdf', 'image/jpeg', 'image/png']

function NOCForm() {
  const validationSchema = Yup.object().shape({
    businessName: Yup.string().required('Business Name is required'),
    businessAddress: Yup.string().required('Business Address is required'),
    ownerName: Yup.string().required("Owner's Full Name is required"),
    contactNumber: Yup.string()
      .matches(/^[0-9]{10}$/, 'Please enter a valid 10-digit phone number')
      .required('Contact Number is required'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Email Address is required'),
    buildingHeight: Yup.string().required('Building Height is required'),
    approvalLetter: Yup.mixed()
      .required('Approval Letter & Layout Plan is required')
      .test(
        'fileSize',
        'File size must be less than 5MB',
        (file) => !file || file.size <= FILE_SIZE
      )
      .test(
        'fileFormat',
        'Unsupported file format',
        (file) => !file || SUPPORTED_FORMATS.includes(file.type)
      ),

    buildingPlan: Yup.mixed()
      .required('Approved Building Plan is required')
      .test(
        'fileSize',
        'File size must be less than 5MB',
        (file) => !file || file.size <= FILE_SIZE
      )
      .test(
        'fileFormat',
        'Unsupported file format',
        (file) => !file || SUPPORTED_FORMATS.includes(file.type)
      ),

    firePlans: Yup.mixed()
      .required('Building Fire Plans are required')
      .test(
        'fileSize',
        'File size must be less than 5MB',
        (file) => !file || file.size <= FILE_SIZE
      )
      .test(
        'fileFormat',
        'Unsupported file format',
        (file) => !file || SUPPORTED_FORMATS.includes(file.type)
      ),

    ownershipDocument: Yup.mixed()
      .required('Ownership Document is required')
      .test(
        'fileSize',
        'File size must be less than 5MB',
        (file) => !file || file.size <= FILE_SIZE
      )
      .test(
        'fileFormat',
        'Unsupported file format',
        (file) => !file || SUPPORTED_FORMATS.includes(file.type)
      ),

    fireConsultantCertificate: Yup.mixed()
      .test(
        'fileSize',
        'File size must be less than 5MB',
        (file) => !file || file.size <= FILE_SIZE
      )
      .test(
        'fileFormat',
        'Unsupported file format',
        (file) => !file || SUPPORTED_FORMATS.includes(file.type)
      ),
    checklist: Yup.mixed()
      .test(
        'fileSize',
        'File size must be less than 5MB',
        (file) => !file || file.size <= FILE_SIZE
      )
      .test(
        'fileFormat',
        'Unsupported file format',
        (file) => !file || SUPPORTED_FORMATS.includes(file.type)
      )
  })

  const initVal = {
    businessName: '',
    businessAddress: '',
    ownerName: '',
    contactNumber: '',
    email: '',
    buildingHeight: '',
    approvalLetter: null,
    buildingPlan: null,
    firePlans: null,
    ownershipDoc: null,
    consultantCert: null
  }

  const [initialValues, setInitialValues] = useState(initVal)
  const dispatch = useDispatch()

  // const handleSubmit = async (values) => {
  //   console.log('I am herw')
  //   const submitFormData = new FormData()

  //   const keys = Object.keys(values)

  //   keys.forEach((key) => {
  //     submitFormData.append(key, values[key])
  //   })

  //   const response = await axiosHandler.post('noc/submit', submitFormData)

  //   if (response?.status === 201) {
  //     const prepareNotification = {
  //       title: 'NOC Requested',
  //       description: `NOC Requested by the ${response?.data?.data?.ownerName}`,
  //       isRead: false,
  //       path: `/request-approval#${response?.data?.data?.id}`
  //     }
  //     console.log('Repare', prepareNotification)
  //     setInitialValues(initVal)
  //   }

  //   console.log('Form Submitted', response)
  // }
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
        <element
          id='35ce74f8-f48c-40ea-bc32-a3adec45ba77'
          data-section-id='35ce74f8-f48c-40ea-bc32-a3adec45ba77'
        >
          <div id='root'>
            <section
              id='application-form'
              className='py-12 px-4 flex items-center bg-neutral-900'
            >
              <div className='container mx-auto px-4 max-w-6xl pt-16'>
                <h2 className='text-3xl font-bold text-center mb-8 text-white'>
                  NOC Application Form
                </h2>
                <p className='text-center mb-10 text-white'>
                  Complete all required fields to submit your No Objection
                  Certificate application
                </p>

                {/* Business Information Section */}
                <div className='bg-neutral-800 p-6 rounded-lg shadow-sm'>
                  <h3 className='text-xl font-semibold mb-4 text-white border-b pb-2'>
                    Business Information
                  </h3>
                  <Formik
                    enableReinitialize
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={async (values, { resetForm }) => {
                      console.log('I am herw')
                      const submitFormData = new FormData()

                      const keys = Object.keys(values)

                      keys.forEach((key) => {
                        submitFormData.append(key, values[key])
                      })

                      const response = await axiosHandler.post(
                        'noc/submit',
                        submitFormData
                      )

                      if (response?.status === 201) {
                        const prepareNotification = {
                          title: 'NOC Requested',
                          description: `NOC Requested by the ${response?.data?.data?.ownerName}`,
                          isRead: false,
                          path: `/request-approval#${response?.data?.data?.id}`
                        }

                        const sentNotification = await axiosHandler.post(
                          '/notifications',
                          prepareNotification
                        )
                        customToast(dispatch, response)
                        resetForm()
                        // setInitialValues(initVal)
                      }

                      console.log('Form Submitted', response)
                    }}
                  >
                    {({
                      setFieldValue,
                      values,
                      errors,
                      touched,
                      resetForm
                    }) => (
                      <Form className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                        {console.log('Error s', errors)}
                        <div className='col-span-1'>
                          <label className='block text-sm font-medium text-neutral-300 mb-1'>
                            Business Name{' '}
                            <span className='text-red-600'>*</span>
                          </label>
                          <Field
                            type='text'
                            name='businessName'
                            className='w-full px-4 py-3 rounded-md bg-neutral-700 border border-neutral-600 text-white focus:outline-none focus:ring-2 focus:ring-[#FFD700] transition-all'
                          />
                          <ErrorMessage
                            name='businessName'
                            component='p'
                            className='text-red-600 text-sm mt-1'
                          />
                        </div>

                        <div className='col-span-1'>
                          <label className='block text-sm font-medium text-neutral-300 mb-1'>
                            Business Address{' '}
                            <span className='text-red-600'>*</span>
                          </label>
                          <Field
                            type='text'
                            name='businessAddress'
                            className='w-full px-4 py-3 rounded-md bg-neutral-700 border border-neutral-600 text-white focus:outline-none focus:ring-2 focus:ring-[#FFD700] transition-all'
                          />
                          <ErrorMessage
                            name='businessAddress'
                            component='p'
                            className='text-red-600 text-sm mt-1'
                          />
                        </div>

                        <div className='col-span-1'>
                          <label className='block text-sm font-medium text-neutral-300 mb-1'>
                            Owner's Full Name{' '}
                            <span className='text-red-600'>*</span>
                          </label>
                          <Field
                            type='text'
                            name='ownerName'
                            className='w-full px-4 py-3 rounded-md bg-neutral-700 border border-neutral-600 text-white focus:outline-none focus:ring-2 focus:ring-[#FFD700] transition-all'
                          />
                          <ErrorMessage
                            name='ownerName'
                            component='p'
                            className='text-red-600 text-sm mt-1'
                          />
                        </div>

                        <div className='col-span-1'>
                          <label className='block text-sm font-medium text-neutral-300 mb-1'>
                            Owner's Contact Number{' '}
                            <span className='text-red-600'>*</span>
                          </label>
                          <Field
                            type='tel'
                            name='contactNumber'
                            className='w-full px-4 py-3 rounded-md bg-neutral-700 border border-neutral-600 text-white focus:outline-none focus:ring-2 focus:ring-[#FFD700] transition-all'
                            placeholder='10-digit mobile number'
                          />
                          <ErrorMessage
                            name='contactNumber'
                            component='p'
                            className='text-red-600 text-sm mt-1'
                          />
                        </div>

                        <div className='col-span-1'>
                          <label className='block text-sm font-medium text-neutral-300 mb-1'>
                            Email Address{' '}
                            <span className='text-red-600'>*</span>
                          </label>
                          <Field
                            type='email'
                            name='email'
                            className='w-full px-4 py-3 rounded-md bg-neutral-700 border border-neutral-600 text-white focus:outline-none focus:ring-2 focus:ring-[#FFD700] transition-all'
                          />
                          <ErrorMessage
                            name='email'
                            component='p'
                            className='text-red-600 text-sm mt-1'
                          />
                        </div>

                        <div className='col-span-1'>
                          <label className='block text-sm font-medium text-neutral-300 mb-1'>
                            Building Height{' '}
                            <span className='text-red-600'>*</span>
                          </label>
                          <Field
                            as='select'
                            name='buildingHeight'
                            className='w-full px-4 py-3 rounded-md bg-neutral-700 border border-neutral-600 text-white focus:outline-none focus:ring-2 focus:ring-[#FFD700] transition-all'
                          >
                            <option value='' disabled>
                              Select Building Height
                            </option>
                            <option value='18-30'>18m to 30m</option>
                            <option value='31-40'>31m to 40m</option>
                            <option value='41-50'>41m to 50m</option>
                            <option value='51-60'>51m to 60m</option>
                            <option value='61-70'>61m to 70m</option>
                          </Field>
                          <ErrorMessage
                            name='buildingHeight'
                            component='p'
                            className='text-red-600 text-sm mt-1'
                          />
                        </div>

                        {/* <div className='col-span-2 flex justify-end'>
                            <button
                              type='submit'
                              className='bg-[#FFD700] text-black font-semibold px-6 py-3 rounded-md shadow-md hover:bg-yellow-500 transition-all'
                              disabled={isSubmitting}
                            >
                              {isSubmitting ? 'Submitting...' : 'Submit'}
                            </button>
                          </div> */}

                        <h3 className='text-xl font-semibold mb-4 text-white border-b pb-2'>
                          Document Upload
                        </h3>
                        <p className='text-sm text-neutral-600 mb-4'>
                          All documents must be in PDF, JPG, or PNG format.
                          Maximum file size: 5MB per document.
                        </p>

                        {[
                          {
                            name: 'approvalLetter',
                            label: 'Approval Letter & Layout Plan',
                            required: true
                          },
                          {
                            name: 'buildingPlan',
                            label: 'Approved Building Plan',
                            required: true
                          },
                          {
                            name: 'firePlans',
                            label: 'Building Fire Plans',
                            required: true
                          },
                          {
                            name: 'ownershipDocument',
                            label: 'Ownership Document',
                            required: true
                          },
                          {
                            name: 'fireConsultantCertificate',
                            label: 'Fire Consultant Certificate',
                            required: false
                          },
                          {
                            name: 'checklist',
                            label: 'Fire Check List',
                            required: false
                          }
                        ].map((field) => (
                          <div
                            key={field.name}
                            className='document-upload-item w-full px-4 py-3 rounded-md bg-neutral-700 border border-neutral-600 text-white focus:outline-none focus:ring-2 focus:ring-[#FFD700] transition-all mb-4'
                          >
                            <label className='block text-sm font-medium text-neutral-300 mb-2'>
                              {field.label}{' '}
                              {field.required && (
                                <span className='text-red-300'>*</span>
                              )}
                            </label>
                            <div className='flex items-center'>
                              <input
                                type='file'
                                id={field.name}
                                className='hidden'
                                accept='.pdf,.jpg,.jpeg,.png'
                                onChange={(event) => {
                                  setFieldValue(
                                    field.name,
                                    event.currentTarget.files[0]
                                  )
                                }}
                              />
                              <label
                                htmlFor={field.name}
                                className='cursor-pointer inline-flex items-center px-4 py-2 bg-neutral-400 text-neutral-700 rounded-md hover:bg-neutral-200 transition-colors'
                              >
                                <svg
                                  xmlns='http://www.w3.org/2000/svg'
                                  className='h-5 w-5 mr-2'
                                  fill='none'
                                  viewBox='0 0 24 24'
                                  stroke='currentColor'
                                >
                                  <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    strokeWidth={2}
                                    d='M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12'
                                  />
                                </svg>
                                Choose File
                              </label>
                              <span className='ml-3 text-sm text-neutral-500'>
                                {values[field.name]
                                  ? values[field.name].name
                                  : 'No file chosen'}
                              </span>
                            </div>
                            {errors[field.name] && touched[field.name] && (
                              <p className='text-red-400 text-sm mt-1'>
                                {errors[field.name]}
                              </p>
                            )}
                          </div>
                        ))}

                        {/* <button
                            type='submit'
                            className='w-full mt-4 bg-[#FFD700] text-neutral-800 font-semibold py-2 rounded-md hover:bg-yellow-500 transition'
                          >
                            Submit
                          </button> */}

                        <div className='col-span-2 flex justify-end'>
                          <button
                            // form='noc-form'
                            type='submit'
                            className='bg-[#FFD700] text-black font-semibold px-6 py-3 rounded-md shadow-md hover:bg-yellow-500 transition-all'
                            //   disabled={isSubmitting}
                          >
                            {/* {isSubmitting ? 'Submitting...' : 'Submit'} */}
                            SUbmit
                          </button>
                        </div>
                      </Form>
                    )}
                  </Formik>
                </div>
                {/* Document Upload Section */}
                {/* <div className='bg-neutral-800 p-6 rounded-lg shadow-sm'>
                    <h3 className='text-xl font-semibold mb-4 text-white border-b pb-2'>
                      Document Upload
                    </h3>
                    <p className='text-sm text-neutral-600 mb-4'>
                      All documents must be in PDF, JPG, or PNG format. Maximum
                      file size: 5MB per document.
                    </p>
                    <div className='space-y-4'>
                      <div className='document-upload-item w-full px-4 py-3 rounded-md bg-neutral-700 border border-neutral-600 text-white focus:outline-none focus:ring-2 focus:ring-[#FFD700] transition-all'>
                        <label className='block text-sm font-medium text-neutral-300 mb-2'>
                          Approval Letter &amp; Layout Plan{' '}
                          <span className='text-red-300'>*</span>
                        </label>
                        <div className='flex items-center'>
                          <input
                            type='file'
                            id='approval-letter'
                            name='approval-letter'
                            className='hidden'
                            accept='.pdf,.jpg,.jpeg,.png'
                            required=''
                          />
                          <label
                            htmlFor='approval-letter'
                            className='cursor-pointer inline-flex items-center px-4 py-2 bg-neutral-200 text-neutral-700 bg-neutral-400 rounded-md hover:bg-neutral-200 transition-colors'
                          >
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              className='h-5 w-5 mr-2'
                              fill='none'
                              viewBox='0 0 24 24'
                              stroke='currentColor'
                            >
                              <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth={2}
                                d='M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12'
                              />
                            </svg>
                            Choose File
                          </label>
                          <span
                            id='approval-letter-filename'
                            className='ml-3 text-sm text-neutral-500'
                          >
                            No file chosen
                          </span>
                        </div>
                      </div>
                      <div className='document-upload-item w-full px-4 py-3 rounded-md bg-neutral-700 border border-neutral-600 text-white focus:outline-none focus:ring-2 focus:ring-[#FFD700] transition-all'>
                        <label className='block text-sm font-medium text-neutral-300 mb-2'>
                          Approved Building Plan{' '}
                          <span className='text-red-300'>*</span>
                        </label>
                        <div className='flex items-center'>
                          <input
                            type='file'
                            id='building-plan'
                            name='building-plan'
                            className='hidden'
                            accept='.pdf,.jpg,.jpeg,.png'
                            required=''
                          />
                          <label
                            htmlFor='building-plan'
                            className='cursor-pointer inline-flex items-center px-4 py-2 bg-neutral-200 text-neutral-700 bg-neutral-400 rounded-md hover:bg-neutral-200 transition-colors'
                          >
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              className='h-5 w-5 mr-2'
                              fill='none'
                              viewBox='0 0 24 24'
                              stroke='currentColor'
                            >
                              <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth={2}
                                d='M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12'
                              />
                            </svg>
                            Choose File
                          </label>
                          <span
                            id='building-plan-filename'
                            className='ml-3 text-sm text-neutral-500'
                          >
                            No file chosen
                          </span>
                        </div>
                      </div>
                      <div className='document-upload-item w-full px-4 py-3 rounded-md bg-neutral-700 border border-neutral-600 text-white focus:outline-none focus:ring-2 focus:ring-[#FFD700] transition-all'>
                        <label className='block text-sm font-medium text-neutral-300 mb-2'>
                          Building Fire Plans{' '}
                          <span className='text-red-300'>*</span>
                        </label>
                        <div className='flex items-center'>
                          <input
                            type='file'
                            id='fire-plans'
                            name='fire-plans'
                            className='hidden'
                            accept='.pdf,.jpg,.jpeg,.png'
                            multiple=''
                            required=''
                          />
                          <label
                            htmlFor='fire-plans'
                            className='cursor-pointer inline-flex items-center px-4 py-2 bg-neutral-200 text-neutral-700 bg-neutral-400 rounded-md hover:bg-neutral-200 transition-colors'
                          >
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              className='h-5 w-5 mr-2'
                              fill='none'
                              viewBox='0 0 24 24'
                              stroke='currentColor'
                            >
                              <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth={2}
                                d='M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12'
                              />
                            </svg>
                            Choose Files
                          </label>
                          <span
                            id='fire-plans-filename'
                            className='ml-3 text-sm text-neutral-500'
                          >
                            No files chosen
                          </span>
                        </div>
                        <p className='mt-1 text-xs text-neutral-500'>
                          Upload floor-wise fire plans and elevation/section
                          plans
                        </p>
                      </div>
                      <div className='document-upload-item w-full px-4 py-3 rounded-md bg-neutral-700 border border-neutral-600 text-white focus:outline-none focus:ring-2 focus:ring-[#FFD700] transition-all'>
                        <label className='block text-sm font-medium text-neutral-300 mb-2'>
                          Ownership Document{' '}
                          <span className='text-red-300'>*</span>
                        </label>
                        <div className='flex items-center'>
                          <input
                            type='file'
                            id='ownership-doc'
                            name='ownership-doc'
                            className='hidden'
                            accept='.pdf,.jpg,.jpeg,.png'
                            required=''
                          />
                          <label
                            htmlFor='ownership-doc'
                            className='cursor-pointer inline-flex items-center px-4 py-2 bg-neutral-200 text-neutral-700 bg-neutral-400 rounded-md hover:bg-neutral-200 transition-colors'
                          >
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              className='h-5 w-5 mr-2'
                              fill='none'
                              viewBox='0 0 24 24'
                              stroke='currentColor'
                            >
                              <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth={2}
                                d='M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12'
                              />
                            </svg>
                            Choose File
                          </label>
                          <span
                            id='ownership-doc-filename'
                            className='ml-3 text-sm text-neutral-500'
                          >
                            No file chosen
                          </span>
                        </div>
                        <p className='mt-1 text-xs text-neutral-500'>
                          Lease Deed or Registry Copy
                        </p>
                      </div>
                      <div className='document-upload-item w-full px-4 py-3 rounded-md bg-neutral-700 border border-neutral-600 text-white focus:outline-none focus:ring-2 focus:ring-[#FFD700] transition-all'>
                        <label className='block text-sm font-medium text-neutral-300 mb-2'>
                          Fire Consultant Certificate
                        </label>
                        <div className='flex items-center'>
                          <input
                            type='file'
                            id='consultant-cert'
                            name='consultant-cert'
                            className='hidden'
                            accept='.pdf,.jpg,.jpeg,.png'
                          />
                          <label
                            htmlFor='consultant-cert'
                            className='cursor-pointer inline-flex items-center px-4 py-2 bg-neutral-200 text-neutral-700 bg-neutral-400 rounded-md hover:bg-neutral-200 transition-colors'
                          >
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              className='h-5 w-5 mr-2'
                              fill='none'
                              viewBox='0 0 24 24'
                              stroke='currentColor'
                            >
                              <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth={2}
                                d='M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12'
                              />
                            </svg>
                            Choose File
                          </label>
                          <span
                            id='consultant-cert-filename'
                            className='ml-3 text-sm text-neutral-500'
                          >
                            No file chosen
                          </span>
                        </div>
                        <p className='mt-1 text-xs text-neutral-500'>
                          If required
                        </p>
                      </div>
                      <div className='document-upload-item w-full px-4 py-3 rounded-md bg-neutral-700 border border-neutral-600 text-white focus:outline-none focus:ring-2 focus:ring-[#FFD700] transition-all'>
                        <label className='block text-sm font-medium text-neutral-300 mb-2'>
                          53-Point Fire Safety Checklist{' '}
                          <span className='text-red-300'>*</span>
                        </label>
                        <div className='flex items-center justify-between flex-wrap gap-2'>
                          <a
                            href='#'
                            className='inline-flex items-center px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors'
                          >
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              className='h-5 w-5 mr-2'
                              fill='none'
                              viewBox='0 0 24 24'
                              stroke='currentColor'
                            >
                              <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth={2}
                                d='M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4'
                              />
                            </svg>
                            Download Checklist
                          </a>
                          <div className='flex items-center'>
                            <input
                              type='file'
                              id='safety-checklist'
                              name='safety-checklist'
                              className='hidden'
                              accept='.pdf,.jpg,.jpeg,.png'
                              required=''
                            />
                            <label
                              htmlFor='safety-checklist'
                              className='cursor-pointer inline-flex items-center px-4 py-2 bg-neutral-200 text-neutral-700 bg-neutral-400 rounded-md hover:bg-neutral-200 transition-colors'
                            >
                              <svg
                                xmlns='http://www.w3.org/2000/svg'
                                className='h-5 w-5 mr-2'
                                fill='none'
                                viewBox='0 0 24 24'
                                stroke='currentColor'
                              >
                                <path
                                  strokeLinecap='round'
                                  strokeLinejoin='round'
                                  strokeWidth={2}
                                  d='M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12'
                                />
                              </svg>
                              Upload Filled Checklist
                            </label>
                            <span
                              id='safety-checklist-filename'
                              className='ml-3 text-sm text-neutral-500'
                            >
                              No file chosen
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className='document-upload-item w-full px-4 py-3 rounded-md bg-neutral-700 border border-neutral-600 text-white focus:outline-none focus:ring-2 focus:ring-[#FFD700] transition-all'>
                        <label className='block text-sm font-medium text-neutral-300 mb-2'>
                          Fire Lift License
                        </label>
                        <div className='flex items-center'>
                          <input
                            type='file'
                            id='lift-license'
                            name='lift-license'
                            className='hidden'
                            accept='.pdf,.jpg,.jpeg,.png'
                          />
                          <label
                            htmlFor='lift-license'
                            className='cursor-pointer inline-flex items-center px-4 py-2 bg-neutral-200 text-neutral-700 bg-neutral-400 rounded-md hover:bg-neutral-200 transition-colors'
                          >
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              className='h-5 w-5 mr-2'
                              fill='none'
                              viewBox='0 0 24 24'
                              stroke='currentColor'
                            >
                              <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth={2}
                                d='M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12'
                              />
                            </svg>
                            Choose File
                          </label>
                          <span
                            id='lift-license-filename'
                            className='ml-3 text-sm text-neutral-500'
                          >
                            No file chosen
                          </span>
                        </div>
                        <p className='mt-1 text-xs text-neutral-500'>
                          If applicable
                        </p>
                      </div>
                      <div className='document-upload-item w-full px-4 py-3 rounded-md bg-neutral-700 border border-neutral-600 text-white focus:outline-none focus:ring-2 focus:ring-[#FFD700] transition-all'>
                        <label className='block text-sm font-medium text-neutral-300 mb-2'>
                          Building Photos{' '}
                          <span className='text-red-300'>*</span>
                        </label>
                        <div className='flex items-center'>
                          <input
                            type='file'
                            id='building-photos'
                            name='building-photos'
                            className='hidden'
                            accept='.jpg,.jpeg,.png'
                            multiple=''
                            required=''
                          />
                          <label
                            htmlFor='building-photos'
                            className='cursor-pointer inline-flex items-center px-4 py-2 bg-neutral-200 text-neutral-700 bg-neutral-400 rounded-md hover:bg-neutral-200 transition-colors'
                          >
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              className='h-5 w-5 mr-2'
                              fill='none'
                              viewBox='0 0 24 24'
                              stroke='currentColor'
                            >
                              <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth={2}
                                d='M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12'
                              />
                            </svg>
                            Choose Photos
                          </label>
                          <span
                            id='building-photos-filename'
                            className='ml-3 text-sm text-neutral-500'
                          >
                            No photos chosen
                          </span>
                        </div>
                        <p className='mt-1 text-xs text-neutral-500'>
                          Upload floor-wise photos showing all fire systems
                        </p>
                      </div>
                      <div className='document-upload-item w-full px-4 py-3 rounded-md bg-neutral-700 border border-neutral-600 text-white focus:outline-none focus:ring-2 focus:ring-[#FFD700] transition-all'>
                        <label className='block text-sm font-medium text-neutral-300 mb-2'>
                          Maintenance Contract Letter{' '}
                          <span className='text-red-300'>*</span>
                        </label>
                        <div className='flex items-center'>
                          <input
                            type='file'
                            id='maintenance-contract'
                            name='maintenance-contract'
                            className='hidden'
                            accept='.pdf,.jpg,.jpeg,.png'
                            required=''
                          />
                          <label
                            htmlFor='maintenance-contract'
                            className='cursor-pointer inline-flex items-center px-4 py-2 bg-neutral-200 text-neutral-700 bg-neutral-400 rounded-md hover:bg-neutral-200 transition-colors'
                          >
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              className='h-5 w-5 mr-2'
                              fill='none'
                              viewBox='0 0 24 24'
                              stroke='currentColor'
                            >
                              <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth={2}
                                d='M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12'
                              />
                            </svg>
                            Choose File
                          </label>
                          <span
                            id='maintenance-contract-filename'
                            className='ml-3 text-sm text-neutral-500'
                          >
                            No file chosen
                          </span>
                        </div>
                        <p className='mt-1 text-xs text-neutral-500'>
                          Contract letter for maintenance of fire safety system
                        </p>
                      </div>
                    </div>
                  </div> */}
                {/* Submission Section */}
                <div className='bg-neutral-800 p-6 rounded-lg shadow-sm'>
                  <h3 className='text-xl font-semibold mb-4 text-white border-b pb-2'>
                    Submit Application
                  </h3>
                  <div className='space-y-4'>
                    <div className='p-4 bg-neutral-700 border border-amber-200 rounded-md'>
                      <div className='flex items-start'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          className='h-6 w-6 text-amber-500 mt-0.5 flex-shrink-0'
                          fill='none'
                          viewBox='0 0 24 24'
                          stroke='currentColor'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                          />
                        </svg>
                        <div className='ml-3'>
                          <h4 className='text-sm font-medium text-white'>
                            Important Information
                          </h4>
                          <ul className='mt-1 text-sm text-white list-disc pl-5 space-y-1'>
                            <li>
                              Ensure all mandatory fields are filled correctly
                            </li>
                            <li>All documents must be clear and legible</li>
                            <li>Processing time is approximately 15 days</li>
                            <li>
                              You will receive notifications via email and SMS
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className='flex items-start'>
                      <div className='flex items-center h-5'>
                        <input
                          id='terms-agreement'
                          name='terms-agreement'
                          type='checkbox'
                          className='h-4 w-4 text-red-600 focus:ring-red-500 border-neutral-300 rounded'
                          required=''
                        />
                      </div>
                      <div className='ml-3 text-sm'>
                        <label
                          htmlFor='terms-agreement'
                          className='font-medium text-neutral-700'
                        >
                          I hereby declare that all the information provided is
                          accurate and all documents are genuine.
                        </label>
                        <p className='text-neutral-500'>
                          I understand that false information may lead to
                          rejection of application and legal action.
                        </p>
                      </div>
                    </div>
                    <div className='flex justify-center mt-6'>
                      {/* <button
                          type='submit'
                          id='submit-application'
                          className='px-6 py-3 bg-red-600 text-white font-medium rounded-md shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed'
                          disabled=''
                        >
                          Submit NOC Application
                        </button> */}
                    </div>
                  </div>
                </div>
                {/* Status Tracking (Initially Hidden) */}
                <div
                  id='status-tracking'
                  className='mt-8 bg-white p-6 rounded-lg shadow-sm hidden'
                >
                  <h3 className='text-xl font-semibold mb-4 text-neutral-800 border-b pb-2'>
                    Application Status
                  </h3>
                  <div className='relative'>
                    <div className='overflow-hidden h-2 mb-4 text-xs flex rounded bg-neutral-200'>
                      <div
                        id='progress-bar'
                        className='shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-600 w-1/3'
                      />
                    </div>
                    <div className='flex justify-between text-xs text-neutral-600'>
                      <div className='text-center'>
                        <div className='w-6 h-6 bg-red-600 rounded-full mx-auto mb-1 flex items-center justify-center'>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            className='h-4 w-4 text-white'
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
                        <span>Submitted</span>
                      </div>
                      <div className='text-center'>
                        <div
                          id='review-status'
                          className='w-6 h-6 bg-neutral-300 rounded-full mx-auto mb-1 flex items-center justify-center'
                        >
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            className='h-4 w-4 text-white'
                            fill='none'
                            viewBox='0 0 24 24'
                            stroke='currentColor'
                          >
                            <path
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              strokeWidth={2}
                              d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
                            />
                          </svg>
                        </div>
                        <span>Under Review</span>
                      </div>
                      <div className='text-center'>
                        <div
                          id='completed-status'
                          className='w-6 h-6 bg-neutral-300 rounded-full mx-auto mb-1 flex items-center justify-center'
                        >
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            className='h-4 w-4 text-white'
                            fill='none'
                            viewBox='0 0 24 24'
                            stroke='currentColor'
                          >
                            <path
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              strokeWidth={2}
                              d='M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
                            />
                          </svg>
                        </div>
                        <span>Completed</span>
                      </div>
                    </div>
                  </div>
                  <div
                    id='status-details'
                    className='mt-6 p-4 bg-neutral-50 rounded-md border border-neutral-200'
                  >
                    <div className='flex items-center'>
                      <div className='flex-shrink-0 w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          className='h-6 w-6 text-amber-600'
                          fill='none'
                          viewBox='0 0 24 24'
                          stroke='currentColor'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
                          />
                        </svg>
                      </div>
                      <div className='ml-4'>
                        <h4 className='text-sm font-medium text-neutral-900'>
                          Application Under Review
                        </h4>
                        <p className='text-sm text-neutral-500'>
                          Your application has been received and is currently
                          being reviewed by the Fire Department.
                        </p>
                      </div>
                    </div>
                    <div className='mt-4 border-t border-neutral-200 pt-4'>
                      <div className='flex justify-between text-sm'>
                        <span className='text-neutral-600'>
                          Application ID:
                        </span>
                        <span
                          className='font-medium text-neutral-900'
                          id='application-id'
                        >
                          NOC2023XXXX
                        </span>
                      </div>
                      <div className='flex justify-between text-sm mt-2'>
                        <span className='text-neutral-600'>
                          Submission Date:
                        </span>
                        <span
                          className='font-medium text-neutral-900'
                          id='submission-date'
                        >
                          DD/MM/YYYY
                        </span>
                      </div>
                      <div className='flex justify-between text-sm mt-2'>
                        <span className='text-neutral-600'>
                          Expected Completion:
                        </span>
                        <span
                          className='font-medium text-neutral-900'
                          id='expected-completion'
                        >
                          DD/MM/YYYY
                        </span>
                      </div>
                    </div>
                  </div>
                  {/* Download Certificate (Hidden initially) */}
                  <div
                    id='certificate-download'
                    className='mt-4 p-4 bg-green-50 rounded-md border border-green-200 hidden'
                  >
                    <div className='flex items-center'>
                      <div className='flex-shrink-0 w-10 h-10 rounded-full bg-green-100 flex items-center justify-center'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          className='h-6 w-6 text-green-600'
                          fill='none'
                          viewBox='0 0 24 24'
                          stroke='currentColor'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
                          />
                        </svg>
                      </div>
                      <div className='ml-4'>
                        <h4 className='text-sm font-medium text-green-900'>
                          Application Approved
                        </h4>
                        <p className='text-sm text-green-700'>
                          Your NOC has been approved. You can download the
                          certificate below.
                        </p>
                      </div>
                    </div>
                    <div className='mt-4 flex justify-center'>
                      <a
                        href='#'
                        className='inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500'
                      >
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          className='h-5 w-5 mr-2'
                          fill='none'
                          viewBox='0 0 24 24'
                          stroke='currentColor'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4'
                          />
                        </svg>
                        Download NOC Certificate
                      </a>
                    </div>
                  </div>
                  {/* Rejection Notice (Hidden initially) */}
                  <div
                    id='rejection-notice'
                    className='mt-4 p-4 bg-red-50 rounded-md border border-red-200 hidden'
                  >
                    <div className='flex items-center'>
                      <div className='flex-shrink-0 w-10 h-10 rounded-full bg-red-100 flex items-center justify-center'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          className='h-6 w-6 text-red-600'
                          fill='none'
                          viewBox='0 0 24 24'
                          stroke='currentColor'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                          />
                        </svg>
                      </div>
                      <div className='ml-4'>
                        <h4 className='text-sm font-medium text-red-900'>
                          Application Rejected
                        </h4>
                        <p className='text-sm text-red-700'>
                          Your NOC application has been rejected due to the
                          following reasons:
                        </p>
                      </div>
                    </div>
                    <div className='mt-3 pl-14'>
                      <ul
                        className='list-disc text-sm text-red-700 space-y-1'
                        id='rejection-reasons'
                      >
                        <li>Incomplete fire safety measures</li>
                        <li>Missing mandatory documents</li>
                      </ul>
                    </div>
                    <div className='mt-4 flex justify-center'>
                      {/* <button
                        type='button'
                        id='reapply-button'
                        className='inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500'
                      >
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          className='h-5 w-5 mr-2'
                          fill='none'
                          viewBox='0 0 24 24'
                          stroke='currentColor'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15'
                          />
                        </svg>
                        Reapply with Corrections
                      </button> */}
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* JavaScript for Form Functionality */}
          </div>
        </element>
        <element
          id='085e2000-6fed-4af6-88e5-fb39420edb4e'
          data-section-id='085e2000-6fed-4af6-88e5-fb39420edb4e'
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
                        {/* <button
                          type='submit'
                          className='w-full bg-[#FF4500] hover:bg-[#FF6347] text-white font-medium py-2 px-4 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-[#FFD700] focus:ring-offset-2 focus:ring-offset-neutral-900'
                        >
                          Subscribe
                        </button> */}
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
              {/* <button
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
              </button> */}
            </footer>
          </div>
        </element>
      </div>
      <div id='page_complete'></div>
    </>
  )
}

export default NOCForm
