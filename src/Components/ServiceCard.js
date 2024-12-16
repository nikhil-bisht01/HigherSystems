import React from 'react'
import { useNavigate } from 'react-router-dom'

const ServiceCard = ({data}) => {
  const navigate = useNavigate()
  return (
    <div style={{fontFamily:"Inter , sans-serif"}} className='group bg-white flex items-center flex-col shadow-md h-full pb-2 rounded-md cursor-pointer hover:scale-105  transition  delay-150 duration-700'>
      <img src={data.image} alt='digital-product' className='w-full h-2/5'/>
      <h1 className='font-bold text-xl px-8 my-10 text-center'>{data.name}</h1>
      <p className='px-10 font-medium text-xs leading-5'>{data.description}</p>
      <button className='group-hover:bg-[#005AE6] group-hover:text-white transition duration-700 mt-10 border-2 font-bold text-[#005AE6]  border-[#005AE6] rounded-[20px] w-fit px-6 py-2' onClick={()=>navigate(data.url)}>Read More</button>
    </div>
  )
}

export default ServiceCard