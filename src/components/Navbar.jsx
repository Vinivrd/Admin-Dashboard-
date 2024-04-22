import React, { useEffect } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { FiShoppingCart } from 'react-icons/fi';
import { BsChatLeft } from 'react-icons/bs';
import { RiNotification3Line } from 'react-icons/ri';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import avatar from '../data/avatar.jpg';
import { Cart, Chat, Notification, UserProfile } from '.';
import { useStateContext } from '../contexts/ContextProvider';

const NavButton = ({title,customFunc,icon,color,dotColor}) => (
  <TooltipComponent content={title} position='BottomCenter'>
    <button type='button' onClick={customFunc}
    style={{color}}
    className='relative text-xl rounded-full p-3 hover:bg-light-gray'>

      <span style={{background:dotColor}}
        className='absolute inline-flex rounded-full h-2 w-2 right-2 top-2'
        />
        {icon}
      

    </button>
  </TooltipComponent>
)


const Navbar = () => {
  const { currentColor, activeMenu, setActiveMenu, handleClick, isCliked,setIsClicked, setScreenSize, screenSize } = useStateContext();

  useEffect( ()=> {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener('resize',handleClick);
    handleClick()
    return () => window.removeEventListener('resize',handleClick);
  },[])
  useEffect( () => {
    screenSize <= 900 ? setActiveMenu(false) : setActiveMenu(true)

  },[screenSize])

  return (
    <div className='flex justify-between p-2 md:mx-6 relative'>

      <NavButton title="Menu" customFunc={()=> 
        setActiveMenu((prevActiveMenu) => !prevActiveMenu )} 
        color= {currentColor} icon={<AiOutlineMenu/>
      }/>
        
      <div className='flex'>
        <NavButton 
          title="Cart" 
          customFunc={()=> handleClick('cart')}
          color= {currentColor} 
          icon={<FiShoppingCart/>}/>

          <NavButton 
            title="Chat" 
            dotColor= "#03C9D7"
            customFunc={()=> handleClick('chat')}
            color= {currentColor} 
            icon={<BsChatLeft/>}/>

          <NavButton 
            title="Notification" 
            dotColor= "#03C9D7"
            customFunc={()=> handleClick('notification')}
            color= {currentColor} 
            icon={<RiNotification3Line/>}/>  
          <TooltipComponent
            content= "Profile"
            position='BottomCenter'>
              <div
                className='flex items-center
                gap-2 cursor-pointer p-1
                 hover:bg-light-gray rounded-lg'
                 onClick={() => handleClick('userProfile')}>
                  <img
                  className='rounded-full w-8 h-8'
                   src={avatar}
                   />
                   <p className='flex justify-center items-center gap-2'>
                    <span className='text-gray-400
                    text-14'>Hi, </span> {' '}
                    <span className='text-gray-400
                     font-bold ml-1 text-14'>Michael</span>
                     <MdKeyboardArrowDown className='text-gray-400
                    text-14'/>
                  </p>

              </div>
          </TooltipComponent>
        
          {isCliked.cart && <Cart/>}
          {isCliked.chat && <Chat/>}
          {isCliked.notification && <Notification/>}
          {isCliked.userProfile && <UserProfile/>}
          


      </div>
    </div>
  )
}

export default Navbar
