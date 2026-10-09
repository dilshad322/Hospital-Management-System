


import React, { useContext, useState, useEffect, useRef } from 'react'
import { assets } from '../assets/assets'
import { NavLink, useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const Navbar = () => {
  const navigate = useNavigate()

  const [showMenu, setShowMenu] = useState(false)
  const [showProfileMenu, setShowProfileMenu] = useState(false)

  const { token, setToken, userData } = useContext(AppContext)

  const logout = () => {
    localStorage.removeItem('token')
    setToken(false)
    setShowProfileMenu(false)
    navigate('/login')
  }
const profileRef = useRef(null)

useEffect(() => {
  const handleOutsideClick = (event) => {
    if (
      profileRef.current &&
      !profileRef.current.contains(event.target)
    ) {
      setShowProfileMenu(false)
    }
  }

  document.addEventListener('mousedown', handleOutsideClick)
  document.addEventListener('touchstart', handleOutsideClick)

  return () => {
    document.removeEventListener('mousedown', handleOutsideClick)
    document.removeEventListener('touchstart', handleOutsideClick)
  }
}, [])
  return (
    // <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-[#ADADAD]'>
    <div className='sticky top-0 z-50 bg-white flex items-center justify-between text-sm py-4 mb-5 border-b border-b-[#ADADAD]'>

      {/* Logo */}
      <img
        onClick={() => navigate('/')}
        className='w-44 cursor-pointer'
        src={assets.logo}
        alt="Logo"
      />

      {/* Desktop Navigation */}
      <ul className='md:flex items-start gap-5 font-medium hidden'>
        <NavLink to='/'>
          <li className='py-1'>HOME</li>
          <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
        </NavLink>

        <NavLink to='/doctors'>
          <li className='py-1'>ALL DOCTORS</li>
          <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
        </NavLink>

        <NavLink to='/about'>
          <li className='py-1'>ABOUT</li>
          <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
        </NavLink>

        <NavLink to='/contact'>
          <li className='py-1'>CONTACT</li>
          <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
        </NavLink>
      </ul>

      {/* Right Section */}
      <div className='flex items-center gap-4'>

        {/* Profile Dropdown */}
        {token && userData ? (
          <div  ref={profileRef} className='relative'>

            {/* Profile Button */}
            <button
              type='button'
              onClick={() => setShowProfileMenu(prev => !prev)}
              className='flex items-center gap-2 cursor-pointer'
              aria-expanded={showProfileMenu}
              aria-label='Toggle profile menu'
            >
              <img
                className='w-8 rounded-full'
                src={userData.image}
                alt='Profile'
              />

           <img
  className={`w-2.5 transition-transform duration-300 ${
    showProfileMenu ? 'rotate-180' : 'rotate-0'
  }`}
  src={assets.dropdown_icon}
  alt=""
/>
            </button>

            {/* Dropdown Menu */}
            <div
              className={`absolute right-0 top-full mt-2 z-50 ${
                showProfileMenu ? 'block' : 'hidden'
              }`}
            >
              <div className='min-w-48 bg-gray-50 rounded flex flex-col gap-4 p-4 shadow-lg'>

                <p
                  onClick={() => {
                    setShowProfileMenu(false)
                    navigate('/my-profile')
                  }}
                  className='hover:text-black cursor-pointer'
                >
                  My Profile
                </p>

                <p
                  onClick={() => {
                    setShowProfileMenu(false)
                    navigate('/my-appointments')
                  }}
                  className='hover:text-black cursor-pointer'
                >
                  My Appointments
                </p>

                <p
                  onClick={logout}
                  className='hover:text-black cursor-pointer'
                >
                  Logout
                </p>

              </div>
            </div>

          </div>
        ) : (
          <button
            onClick={() => navigate('/login')}
            className='bg-primary text-white px-8 py-3 rounded-full font-light hidden md:block'
          >
          Login
          </button>
        )}

        {/* Mobile Menu Open Button */}
        <img
          onClick={() => setShowMenu(true)}
          className='w-6 md:hidden cursor-pointer'
          src={assets.menu_icon}
          alt='Open menu'
        />

        {/* Mobile Menu */}
        <div
          className={`md:hidden ${
            showMenu ? 'fixed w-full' : 'h-0 w-0'
          } right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all`}
        >
          {/* Mobile Menu Header */}
          <div className='flex items-center justify-between px-5 py-6'>
            <img
              src={assets.logo}
              className='w-36'
              alt='Logo'
            />

            <img
              onClick={() => setShowMenu(false)}
              src={assets.cross_icon}
              className='w-7 cursor-pointer'
              alt='Close menu'
            />
          </div>

          {/* Mobile Navigation Links */}
          <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium'>

            <NavLink
              onClick={() => setShowMenu(false)}
              to='/'
            >
              <p className='px-4 py-2 rounded-full inline-block'>
                HOME
              </p>
            </NavLink>

            <NavLink
              onClick={() => setShowMenu(false)}
              to='/doctors'
            >
              <p className='px-4 py-2 rounded-full inline-block'>
                ALL DOCTORS
              </p>
            </NavLink>

            <NavLink
              onClick={() => setShowMenu(false)}
              to='/about'
            >
              <p className='px-4 py-2 rounded-full inline-block'>
                ABOUT
              </p>
            </NavLink>

            <NavLink
              onClick={() => setShowMenu(false)}
              to='/contact'
            >
              <p className='px-4 py-2 rounded-full inline-block'>
                CONTACT
              </p>
            </NavLink>

          </ul>
        </div>

      </div>
    </div>
  )
}

export default Navbar
