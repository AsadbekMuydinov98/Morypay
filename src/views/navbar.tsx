import { useState } from 'react'
import { styles } from '../util/style';
import { navigationLinks } from '../util/constants';
import { logo } from '../assets';
import { AiOutlineMenuFold } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [toggleNav, setToggleNav] = useState<boolean>(false)
  const [active, setActive] = useState<string>('home')
  const toggleHandler = ()=> setToggleNav(prev=>!prev)

  const activeLinkHandler=(id: string)=>setActive(id)
  return (
    <div className={`w-full ${styles.flexBetween} py-6`}>
      {/* Logo */}
      {/* <div className={`${styles.heading}`}>Logo</div> */}
      <img className='cursor-pointer' width={130} src={logo} alt="logo" />
      {/* navigation link */}
      <ul className='sm:flex hidden justify-end items-center flex-1'>
        {
          navigationLinks.map((nav, index)=>(
            <li 
              key={index}
              onClick={()=>activeLinkHandler(nav.id)} 
              className={
                `font-montserrat 
                font-normal 
                cursor-pointer 
                text-[16px] 
                ${index===navigationLinks.length-1 ? 'mr-0':'mr-10'}
                ${active===nav.id ? 'text-white': 'text-lightWhite'}
                hover:text-white
                transition-all duration-500`
              }
            >
              {nav.title}
            </li>

          ))
        }
      </ul>

      <div className={'sm:hidden flex flex-1 justify-end items-center'}>
        <p onClick={toggleHandler}className='text-white hover:text-lightWhite cursor-pointer'>{toggleNav ? <AiOutlineClose /> : <AiOutlineMenuFold />}</p>

        <div className={`${toggleNav ? 'flex' : 'hidden'} p-0  absolute right-0 left-0 my-2 w-full sidebar bg-black-gradient`}>
          <ul className='flex justify-center items-center flex-1 mx-2 flex-cool'>
            {
              navigationLinks.map((nav, index)=>(
                <li 
                  key={index} 
                  onClick={()=>activeLinkHandler(nav.id)} 
                  className={
                    `font-montserrat 
                    font-normal 
                    cursor-pointer 
                    text-[10px] 
                    leading-10
                    text-white 
                    ${index===navigationLinks.length-1 ? 'mr-0':'mr-10'}
                    hover:text-lightWhite
                    transition-all duration-500`
                  }
                >
                  {nav.title}
                </li>

              ))
            }
        </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
