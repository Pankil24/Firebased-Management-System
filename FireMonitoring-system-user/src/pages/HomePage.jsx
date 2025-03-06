import React from 'react'
import { useNavigate } from 'react-router-dom'

function HomePage() {
  const navigate = useNavigate()
  return (
    <>
      <meta charSet='UTF-8' />
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <title>Fire Safety Management System</title>
      <link
        rel='stylesheet'
        href='https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css'
      />
      <link
        href='https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap'
        rel='stylesheet'
      />
      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n        body {\n            font-family: 'Inter', sans-serif;\n        }\n        .hero-gradient {\n            background: linear-gradient(135deg, #ff4d4d 0%, #ff8533 100%);\n        }\n        .feature-card:hover {\n            transform: translateY(-5px);\n            transition: all 0.3s ease;\n        }\n    "
        }}
      />
      {/* Navigation */}

      {/* Hero Section */}
      <section className='bg-neutral-900 pt-32 pb-20'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center'>
            <h1 className='text-4xl md:text-6xl font-bold text-white mb-6'>
              Ensuring Fire Safety Compliance Made Easy
            </h1>
            <p className='text-xl text-white/90 mb-8'>
              Comprehensive fire safety management solution for businesses and
              communities
            </p>
            <div className='flex flex-col sm:flex-row justify-center gap-4'>
              <button
                className='bg-white text-red-500 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors'
                onClick={() => {
                  navigate('/noc-form')
                }}
              >
                Apply for NOC
              </button>
              <button className='bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors'>
                Report Fire Incident
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* Features Section */}
      <section className='py-20 bg-neutral-800'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h2 className='text-3xl font-bold text-center text-white mb-12'>
            Key Features
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {/* Feature 1 */}
            <div className='feature-card bg-neutral-700 p-6 rounded-xl shadow-lg'>
              <div className='text-red-500 mb-4'>
                <i className='bi bi-file-earmark-text text-4xl' />
              </div>
              <h3 className='text-xl font-semibold mb-2 text-white'>
                Apply for NOC
              </h3>
              <p className='text-red-500'>
                Quick and easy process to obtain fire safety certificates for
                your business
              </p>
            </div>
            {/* Feature 2 */}
            <div className='feature-card bg-neutral-700 p-6 rounded-xl shadow-lg'>
              <div className='text-red-500 mb-4'>
                <i className='bi bi-exclamation-triangle text-4xl' />
              </div>
              <h3 className='text-xl font-semibold mb-2 text-white'>
                Report Incidents
              </h3>
              <p className='text-red-500'>
                Report fire emergencies in real-time with location tracking
              </p>
            </div>
            {/* Feature 3 */}
            <div className='feature-card bg-neutral-700 p-6 rounded-xl shadow-lg'>
              <div className='text-red-500 mb-4'>
                <i className='bi bi-calendar-check text-4xl' />
              </div>
              <h3 className='text-xl font-semibold mb-2 text-white'>
                Inspection Scheduling
              </h3>
              <p className='text-red-500'>
                Efficient scheduling and management of fire safety inspections
              </p>
            </div>
            {/* Feature 4 */}
            <div className='feature-card bg-neutral-700 p-6 rounded-xl shadow-lg'>
              <div className='text-red-500 mb-4'>
                <i className='bi bi-graph-up text-4xl' />
              </div>
              <h3 className='text-xl font-semibold mb-2 text-white'>
                Admin Dashboard
              </h3>
              <p className='text-red-500'>
                Comprehensive dashboard for fire departments to manage
                operations
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Testimonials Section */}
      <section className='py-20 bg-neutral-900'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h2 className='text-3xl font-bold text-center text-white mb-12'>
            What Our Users Say
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {/* Testimonial 1 */}
            <div className='bg-neutral-700 p-6 rounded-xl shadow-lg'>
              <div className='flex items-center mb-4'>
                <div className='text-yellow-400'>
                  <i className='bi bi-star-fill' />
                  <i className='bi bi-star-fill' />
                  <i className='bi bi-star-fill' />
                  <i className='bi bi-star-fill' />
                  <i className='bi bi-star-fill' />
                </div>
              </div>
              <p className='text-red-500 mb-4'>
                "The NOC application process has become so much easier with
                FireSafe. Highly recommended!"
              </p>
              <p className='font-semibold text-white'>
                - John D., Business Owner
              </p>
            </div>
            {/* Testimonial 2 */}
            <div className='bg-neutral-700 p-6 rounded-xl shadow-lg'>
              <div className='flex items-center mb-4'>
                <div className='text-yellow-400'>
                  <i className='bi bi-star-fill' />
                  <i className='bi bi-star-fill' />
                  <i className='bi bi-star-fill' />
                  <i className='bi bi-star-fill' />
                  <i className='bi bi-star-fill' />
                </div>
              </div>
              <p className='text-red-500 mb-4'>
                "Great platform for managing fire safety compliance. The
                inspection scheduling feature is a game-changer."
              </p>
              <p className='font-semibold text-white'>
                - Sarah M., Fire Safety Officer
              </p>
            </div>
            {/* Testimonial 3 */}
            <div className='bg-neutral-700 p-6 rounded-xl shadow-lg'>
              <div className='flex items-center mb-4'>
                <div className='text-yellow-400'>
                  <i className='bi bi-star-fill' />
                  <i className='bi bi-star-fill' />
                  <i className='bi bi-star-fill' />
                  <i className='bi bi-star-fill' />
                  <i className='bi bi-star-fill' />
                </div>
              </div>
              <p className='text-red-500 mb-4'>
                "The incident reporting system is efficient and user-friendly.
                Response times have improved significantly."
              </p>
              <p className='font-semibold text-white'>
                - Michael R., Fire Department Chief
              </p>
            </div>
          </div>
        </div>
      </section>
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
                  Subscribe to our newsletter for the latest updates, tips, and
                  fire safety best practices.
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
                <span className='text-[#FF4500] font-medium'>IMPORTANT:</span>{' '}
                This system is for fire safety management purposes only. In case
                of fire emergency, please call your local emergency services
                immediately.
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
    </>
  )
}

export default HomePage
