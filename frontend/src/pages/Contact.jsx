// import React from 'react'
// import { assets } from '../assets/assets'

// const Contact = () => {
//   return (
//     <div>

//       <div className='text-center text-2xl pt-10 text-[#707070]'>
//         <p>CONTACT <span className='text-gray-700 font-semibold'>US</span></p>
//       </div>

//       <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm'>
//         <img className='w-full md:max-w-[360px]' src={assets.contact_image} alt="" />
//         <div className='flex flex-col justify-center items-start gap-6'>
//           <p className=' font-semibold text-lg text-gray-600'>OUR OFFICE</p>
//           <p className=' text-gray-500'>54709 Willms Station <br /> Suite 350, Washington, USA</p>
//           <p className=' text-gray-500'>Tel: (415) 555-0132 <br /> Email: dilshadanwar322@gmail.com</p>
//           <p className=' font-semibold text-lg text-gray-600'>CAREERS AT MedicoCare</p>
//           <p className=' text-gray-500'>Learn more about our teams and job openings.</p>
//           <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Explore Jobs</button>
//         </div>
//       </div>

//     </div>
//   )
// }

// export default Contact


import React from 'react'
import { assets } from '../assets/assets'

const Contact = () => {
  return (
    <div className="text-[#262626]">
      {/* Heading */}
      <div className="text-center pt-10">
        <p className="text-2xl font-light tracking-wide text-gray-500">
          CONTACT <span className="font-semibold text-gray-800">US</span>
        </p>
        <p className="text-sm text-gray-500 mt-3 px-4">
          Have questions? We'd love to hear from you.
        </p>
      </div>

      {/* Contact Section */}
      <div className="my-12 mb-24 flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16 px-4 sm:px-8">
        
        {/* Office Image */}
        <div className="w-full max-w-md md:max-w-[400px]">
          <img
            className="block w-full rounded-2xl object-cover"
            src={assets.contact_image}
            alt="MedicoCare office"
          />
        </div>

        {/* Contact Details */}
        <div className="w-full max-w-md flex flex-col items-start gap-6">

          {/* Office */}
          <div>
            <h2 className="text-lg font-semibold text-gray-800">
              OUR OFFICE
            </h2>
            <div className="mt-2 h-1 w-12 rounded-full bg-primary" />
          </div>

          <div className="text-sm leading-7 text-gray-500">
            <p className="font-medium text-gray-700">MedicoCare</p>
            <p>Sector 62, Noida</p>
            <p>Uttar Pradesh, India</p>
          </div>

          {/* Contact Information */}
          <div className="rounded-xl border border-gray-200 bg-gray-50 p-4 w-full">
            <div className="flex items-start gap-3">
              <span className="text-primary">☎</span>
              <div>
                <p className="text-sm font-medium text-gray-700">Phone</p>
                <p className="mt-1 text-sm text-gray-500">
                  +91 XXXXX XXXXX
                </p>
              </div>
            </div>

            <div className="mt-4 flex items-start gap-3">
              <span className="text-primary">✉</span>
              <div className="min-w-0">
                <p className="text-sm font-medium text-gray-700">Email</p>
                <a
                  href="mailto:dilshadanwar322@gmail.com"
                  className="mt-1 block break-all text-sm text-gray-500 transition-colors duration-300 hover:text-primary"
                >
                  dilshadanwar322@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Careers */}
          <div className="pt-2">
            <h2 className="text-lg font-semibold text-gray-800">
              CAREERS AT MEDICOCARE
            </h2>
            <div className="mt-2 h-1 w-12 rounded-full bg-primary" />
          </div>

          <p className="text-sm leading-6 text-gray-500">
            Interested in joining our team? Explore opportunities
            and grow your career with MedicoCare.
          </p>

          <button
            type="button"
            className="rounded-lg border border-gray-300 px-7 py-3 text-sm font-medium text-gray-700 transition-all duration-300 hover:border-primary hover:bg-primary hover:text-white"
          >
            Explore Jobs
          </button>
        </div>
      </div>
    </div>
  )
}

export default Contact
