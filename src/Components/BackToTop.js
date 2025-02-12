import { FaArrowUp } from 'react-icons/fa6'

const BackToTop = () => {
    const scrollToTop=()=> {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      }
  return (
    <div onClick={scrollToTop} className='fixed bottom-10 right-10 text-white bg-[#005AE6] rounded-full p-5 text-2xl cursor-pointer border-[#005AE6]  hover:bg-blue-700 transition duration-300 z-10'><FaArrowUp /></div>
  )
}

export default BackToTop