import React from 'react'
import ServiceCard from './ServiceCard';
import { services } from '../utils/data';


const OurServices = () => {
  return (
    <section className='px-36 mb-32 pt-32' id='services'>
        <h1 className='uppercase text-center font-semibold text-3xl mb-10'>Our Services</h1>
        <div className='grid grid-cols-3 gap-20'>
            {
                services.map(s=><ServiceCard key={s.name} data={s}/>)
            }
        </div>
    </section>
  )
}

export default OurServices