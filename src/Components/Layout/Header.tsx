'use client'
import React from 'react'
import Header_Menu from '../Utils/Header_Menu'
import { FaUserCircle } from 'react-icons/fa';
import { SideBar_Links } from '@/Utils/SideNavLinks';
import { usePathname } from 'next/navigation';
import Translate from '../Utils/Translate';
import Link from 'next/link';

const Header = () => {
  const pathname = usePathname()
 const Data = SideBar_Links.filter((i)=>(i.href == pathname))
  
  return (  
    <div className='Header'>
      <div className='Header_Left'>Dashboard / {Data[0]?.Icon} {Data[0]?.Name} </div>
      <div className='Header_Right'>
                <Translate/>

        <div className='User_Pro'>
        <FaUserCircle/>
        <Link href='/auth'>
        Login
        </Link>
        
        </div>
      
        <Header_Menu />
      </div>
    </div>
  )
}

export default Header