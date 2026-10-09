import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
    return (
        <div className='flex flex-col md:flex-row flex-wrap bg-gradient-to-r from-[#477D60] via-[#619B78] to-[#A9CFB3] rounded-lg px-6 md:px-10 lg:px-20 '>


            {/* --------- Header Left --------- */}
            <div className='md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[8vw] md:mb-[-30px]'>
               <div className="inline-flex flex-wrap items-center gap-2 bg-white/95 px-4 py-2 rounded-lg shadow-sm">
  <span className="text-xl md:text-2xl font-extrabold tracking-wide text-[#174C3A]">
    MADICOCARE
  </span>

  <span className="text-xl font-bold text-[#477D60]">·</span>

  <span className="text-xs md:text-sm font-semibold tracking-wider text-gray-700">
    YOUR HEALTH PARTNER
  </span>
</div>
                <p className='text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight md:leading-tight lg:leading-tight'>
                  Your Health, <br/> Our Priority
                </p>
                <div className='flex flex-col md:flex-row items-center gap-3 text-white text-sm font-light'>
                    <img className='w-28' src={assets.group_profiles} alt="" />
                    <p className='text-center sm:text-left'>Connect with trusted doctors and book your appointment effortlessly. Quality healthcare, designed around you.</p>
                </div>
                <a href='#speciality' className='flex items-center gap-2 bg-white px-8 py-3 rounded-full text-[#595959] text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300'>
                    Book appointment <img className='w-3' src={assets.arrow_icon} alt="" />
                </a>
            </div>

            {/* --------- Header Right --------- */}
            <div className='md:w-1/2 relative'>
                <img className='w-full md:absolute bottom-0 h-auto rounded-lg' src={assets.header_img} alt="" />
            </div>
        </div>
    )
}

export default Header