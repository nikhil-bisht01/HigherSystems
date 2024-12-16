import logo from '../assets/logo1.png'
import { Link, useNavigate } from 'react-router-dom'
import ScrollIntoView from 'react-scroll-into-view'
const Header = () => {
  const navigate = useNavigate();
  const url = window.location.pathname;
 
  const handleLogout = () => {
    navigate("/user-dashboard")
  }
  
  return (
    <header className='sticky bg-white top-0 px-2 flex justify-between items-center shadow-lg z-10'>
        <div>
            <img src={logo} alt='Logo' className='h-20 w-52'/>
        </div>
        <nav className='w-1/4 flex justify-between'>
            <ScrollIntoView selector='#home' alignToTop={true}>
              <Link style={{fontFamily:"Inter , sans-serif"}} className='text-base text-black'>Home</Link>
            </ScrollIntoView>
            <ScrollIntoView selector="#services" alignToTop={true}>
              <Link style={{fontFamily:"Inter , sans-serif"}} className='text-base text-black'>Services</Link>
            </ScrollIntoView>
            <ScrollIntoView selector="#about" alignToTop={true}>
              <Link style={{fontFamily:"Inter , sans-serif"}} className='text-base text-black'>About</Link>
            </ScrollIntoView>
            <ScrollIntoView selector='#contact-us' alignToTop={true}>
            <Link style={{fontFamily:"Inter , sans-serif"}} className='text-base text-black'>Contact Us</Link>
            </ScrollIntoView>
        </nav>      
        <div>
          <button
            onClick={() => navigate("/partner")}
            style={{ fontFamily: "Inter, sans-serif" }}
            className="border-2 border-black px-6 py-2 rounded-lg text-black mr-2 text-base"
          >
            Become a Partner
          </button>
          {
            localStorage.getItem("higherIndia") ? <button onClick={handleLogout} className='bg-[#005AE6] border-2 border-[#005AE6] px-4 py-2 rounded-lg text-white hover:bg-blue-700 transition duration-300 text-base'>Go to Dashboard</button> : (url === "/auth/login" || url === "/auth/signup") ? null : (
              <>
                <button
                  onClick={() => navigate("/auth/login")}
                  style={{ fontFamily: "Inter, sans-serif" }}
                  className="border-2 border-black px-6 py-2 rounded-lg text-black mr-2 text-base"
                >
                  Login
                </button>
                <button
                  onClick={() => navigate("/auth/signup")}
                  style={{ fontFamily: "Inter, sans-serif" }}
                  className="bg-[#005AE6] border-2 border-[#005AE6] px-4 py-2 rounded-lg text-white hover:bg-blue-700 transition duration-300 text-base"
                >
                  Sign Up
                </button>
              </>
            )
          }
        </div>
    </header>
  )
}
export default Header