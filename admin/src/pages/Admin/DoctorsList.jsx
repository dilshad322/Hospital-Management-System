// import React, { useContext, useEffect } from 'react'
// import { AdminContext } from '../../context/AdminContext'

// const DoctorsList = () => {

//   const { doctors, changeAvailability , aToken , getAllDoctors} = useContext(AdminContext)

//   useEffect(() => {
//     if (aToken) {
//         getAllDoctors()
//     }
// }, [aToken])

//   return (
//     <div className='m-5 max-h-[90vh] overflow-y-scroll'>
//       <h1 className='text-lg font-medium'>All Doctors</h1>
//       <div className='w-full flex flex-wrap gap-4 pt-5 gap-y-6'>
//         {doctors.map((item, index) => (
//           <div className='border border-[#C9D8FF] rounded-xl max-w-56 overflow-hidden cursor-pointer group' key={index}>
//             <img className='bg-[#EAEFFF] group-hover:bg-primary transition-all duration-500' src={item.image} alt="" />
//             <div className='p-4'>
//               <p className='text-[#262626] text-lg font-medium'>{item.name}</p>
//               <p className='text-[#5C5C5C] text-sm'>{item.speciality}</p>
//               <div className='mt-2 flex items-center gap-1 text-sm'>
//                 <input onChange={()=>changeAvailability(item._id)} type="checkbox" checked={item.available} />
//                 <p>Available</p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }

// export default DoctorsList



import React, { useContext, useEffect } from 'react'
import { AdminContext } from '../../context/AdminContext'

const DoctorsList = () => {
  const { doctors, changeAvailability, aToken, getAllDoctors } =
    useContext(AdminContext)

  useEffect(() => {
    if (aToken) {
      getAllDoctors()
    }
  }, [aToken])

  return (
    <div className="m-4 sm:m-5 max-h-[90vh] overflow-y-auto">

      {/* Header */}
      <div className="mb-5">
        <h1 className="text-xl font-semibold text-gray-800">
          All Doctors
        </h1>
        <p className="mt-1 text-sm text-gray-500">
          Manage doctor profiles and their availability.
        </p>
      </div>

      {/* Doctors Grid */}
      {doctors.length > 0 ? (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

          {doctors.map((item) => (
            <div
              className="group overflow-hidden rounded-xl border border-[#C9D8FF] bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              key={item._id}
            >
              {/* Doctor Image */}
              <div className="overflow-hidden bg-[#EAEFFF]">
                <img
                  className="block h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  src={item.image}
                  alt={item.name}
                />
              </div>

              {/* Doctor Details */}
              <div className="p-4">
                <p className="truncate text-lg font-semibold text-[#262626]">
                  {item.name}
                </p>

                <p className="mt-1 text-sm text-[#5C5C5C]">
                  {item.speciality}
                </p>

                {/* Availability */}
                <label className="mt-4 flex cursor-pointer items-center justify-between rounded-lg border border-gray-100 bg-gray-50 px-3 py-2.5">
                  <span className="text-sm font-medium text-gray-700">
                    Availability
                  </span>

                  <span className="flex items-center gap-2">
                    <span
                      className={`h-2 w-2 rounded-full ${
                        item.available ? 'bg-green-500' : 'bg-gray-400'
                      }`}
                    />

                    <span
                      className={`text-xs font-medium ${
                        item.available ? 'text-green-600' : 'text-gray-500'
                      }`}
                    >
                      {item.available ? 'Available' : 'Unavailable'}
                    </span>

                    <input
                      type="checkbox"
                      checked={item.available}
                      onChange={() => changeAvailability(item._id)}
                      aria-label={`Toggle availability for ${item.name}`}
                      className="h-4 w-4 cursor-pointer accent-blue-600"
                    />
                  </span>
                </label>
              </div>
            </div>
          ))}

        </div>
      ) : (
        <div className="rounded-xl border border-dashed border-gray-300 bg-white px-4 py-16 text-center">
          <p className="font-medium text-gray-700">
            No doctors found
          </p>
          <p className="mt-2 text-sm text-gray-500">
            Registered doctors will appear here.
          </p>
        </div>
      )}

    </div>
  )
}

export default DoctorsList
