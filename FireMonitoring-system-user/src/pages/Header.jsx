import { useDispatch, useSelector } from 'react-redux'
import { logout } from './Redux/slice/userSlice'

function Header() {
  const { userInfo } = useSelector((state) => state?.user)
  const dispatch = useDispatch()
  // console.log('User Info', userInfo?.user?.email)
  return (
    <element
      id='4f4c1582-b065-4d73-96b1-7f7af7f192e2'
      data-section-id='4f4c1582-b065-4d73-96b1-7f7af7f192e2'
    >
      <div id='root'>
        <header id='header' className='bg-white shadow-md fixed w-full z-50'>
          <nav className='container mx-auto px-4 py-4'>
            <div className='flex justify-between items-center'>
              <a href='/' className='text-2xl font-bold text-[#FF4500]'>
                FireSafe
              </a>
              <ul className='hidden md:flex space-x-6'>
                <li>
                  <a
                    href='/'
                    className='text-gray-700 hover:text-[#FF4500] transition duration-300'
                  >
                    Home
                  </a>
                </li>
                {!userInfo?.user?.email && (
                  <li>
                    <a
                      href='/login'
                      className='text-gray-700 hover:text-[#FF4500] transition duration-300'
                    >
                      Sign In
                    </a>
                  </li>
                )}
                {/* <li>
                  <a
                    href='/register'
                    className='text-gray-700 hover:text-[#FF4500] transition duration-300'
                  >
                    Sign Up
                  </a>
                </li> */}
                {userInfo?.user?.email && (
                  <>
                    <li>
                      <a
                        href='/noc-form'
                        className='text-gray-700 hover:text-[#FF4500] transition duration-300'
                      >
                        Request NOC
                      </a>
                    </li>
                    <li>
                      <span
                        className='text-gray-700 hover:text-[#FF4500] transition duration-300 cursor-pointer'
                        onClick={() => {
                          dispatch(logout())
                        }}
                      >
                        Log out
                      </span>
                    </li>
                  </>
                )}
              </ul>
              <button
                id='mobile-menu-button'
                className='md:hidden focus:outline-none'
                aria-label='Toggle menu'
                aria-expanded='false'
              >
                <svg
                  className='w-6 h-6 text-[#FF4500]'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M4 6h16M4 12h16M4 18h16'
                  />
                </svg>
              </button>
            </div>
            <div id='mobile-menu' className='md:hidden hidden mt-4'>
              <ul className='flex flex-col space-y-3 pb-4'>
                <li>
                  <a
                    href='/'
                    className='block text-gray-700 hover:text-[#FF4500] transition duration-300'
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href='/login'
                    className='block text-gray-700 hover:text-[#FF4500] transition duration-300'
                  >
                    Login
                  </a>
                </li>
                <li>
                  <a
                    href='/register'
                    className='block text-gray-700 hover:text-[#FF4500] transition duration-300'
                  >
                    Sign Up
                  </a>
                </li>
                <li>
                  <a
                    href='/noc-form'
                    className='block text-gray-700 hover:text-[#FF4500] transition duration-300'
                  >
                    Request NOC
                  </a>
                </li>
                <li
                  onClick={() => {
                    dispatch(logout())
                  }}
                >
                  <span className='text-gray-700 hover:text-[#FF4500] transition duration-300 cursor-pointer'>
                    Log out
                  </span>
                </li>
              </ul>
            </div>
          </nav>
        </header>
      </div>
    </element>
  )
}

export default Header
