// import React from 'react'
// import { assets } from '../assets/assets'
// import { Link } from 'react-router-dom'
// const Footer = () => {
//   return (
//     <div className='md:mx-10'>
//       <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10  mt-40 text-sm'>

//         <div>
//           <img className='mb-5 w-40' src={assets.logo} alt="" />
//           <p className='w-full md:w-2/3 text-gray-600 leading-6'>
//             MadicoCare is dedicated to making quality healthcare accessible to everyone. We help patients connect with experienced doctors, book appointments easily, and manage their healthcare needs with convenience and care. Your health and well-being are our top priorities.
//           </p>
//         </div>

//         <div>
//           <p className='text-xl font-medium mb-5'>COMPANY</p>
//           <ul className='flex flex-col gap-2 text-gray-600'>
//             <li>
//               <Link to='/' className='hover:text-primary transition-all'>
//                 Home
//               </Link>
//             </li>
//             <li>
//               <Link to='/about' className='hover:text-primary transition-all'>
//                 About us
//               </Link>
//             </li>
//             <li>Delivery</li>
//             <li>Privacy policy</li>
//           </ul>
//         </div>

//         <div>
//           <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
//           <ul className='flex flex-col gap-2 text-gray-600'>
//             <li>+1-212-456-7890</li>
//             <li>dilshadanwar322@gmail.com</li>
//           </ul>
//         </div>

//       </div>

//       <div>
//         <hr />
//         <p className='py-5 text-sm text-center'>Copyright 2022 @ MedicoCare.com - All Right Reserved.</p>
//       </div>

//     </div>
//   )
// }

// export default Footer



import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="mt-20 border-t border-gray-200 bg-gray-50">

      {/* Footer Content */}
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10 py-12">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr] gap-10 lg:gap-16">

          {/* Brand Section */}
          <div>
            <Link to="/" className="inline-block">
              <img
                className="mb-5 w-40"
                src={assets.logo}
                alt="MedicoCare logo"
              />
            </Link>

            <p className="max-w-md text-sm leading-7 text-gray-500">
              MedicoCare is dedicated to making quality healthcare
              accessible to everyone. Connect with experienced doctors,
              book appointments easily, and manage your healthcare needs
              with convenience and care.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h2 className="mb-5 text-base font-semibold tracking-wide text-gray-800">
              COMPANY
            </h2>

            <ul className="flex flex-col gap-3 text-sm text-gray-500">
              <li>
                <Link
                  to="/"
                  className="transition-colors duration-300 hover:text-primary"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/doctors"
                  className="transition-colors duration-300 hover:text-primary"
                >
                  Find Doctors
                </Link>
              </li>

              <li>
                <Link
                  to="/about"
                  className="transition-colors duration-300 hover:text-primary"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="transition-colors duration-300 hover:text-primary"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h2 className="mb-5 text-base font-semibold tracking-wide text-gray-800">
              GET IN TOUCH
            </h2>

            <ul className="flex flex-col gap-3 text-sm text-gray-500">
              <li className="leading-6">
                Sector 62, Noida,
                <br />
                Uttar Pradesh, India
              </li>

              <li>
                <a
                  href="mailto:dilshadanwar322@gmail.com"
                  className="break-all transition-colors duration-300 hover:text-primary"
                >
                  dilshadanwar322@gmail.com
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Copyright */}
        <div className="mt-10 border-t border-gray-200 pt-6">
          <p className="text-center text-xs sm:text-sm leading-6 text-gray-500">
            © {new Date().getFullYear()} MedicoCare. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  )
}

export default Footer
