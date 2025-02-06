import React from 'react'

const AddressSection = () => {
  return (
    <section style={{ fontFamily: "Inter , sans-serif" }} className='px-6 md:px-36 text-lg font-semibold py-36'>
      <h1 className='uppercase text-[#005AE6] mb-4 text-center'>Our Branch Offices</h1>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16'>
        <div className='border-[1px] p-5 rounded-md border-gray-300'>
          <h1 className='font-medium text-lg'>C - 312, Twin Arcade, Military Road, Marol Andheri (East), Mumbai, Maharashtra 400059</h1>
        </div>
        <div className='border-[1px] p-5 rounded-md border-gray-300'>
          <h1 className='font-medium text-lg'>213, Block A4, Savitri Heights 2, VIP Road, Zirakpur, Punjab</h1>
        </div>
        <div className='border-[1px] p-5 rounded-md border-gray-300'>
          <h1 className='font-medium text-lg'>Mohd. Johar Ali Road, Rampur, Uttar Pradesh - 244901</h1>
        </div>
      </div>
    </section>
  )
}

export default AddressSection
