'use client'
import React from 'react'
import { FaUserCircle } from 'react-icons/fa';
import { usePathname } from 'next/navigation';
import Translate from '../Utils/Translate';
import Link from 'next/link';

const Header = () => {
  const pathname = usePathname()
  
  return (  
    <div className='Header'>
      <div className='Header_Left'> </div>
      <div className='Header_Right'>
                <Translate/>

        <div className='User_Pro'>
        <FaUserCircle/>
        <Link href='/auth'>
        Login
        </Link>
        
        </div>
      
        
      </div>
    </div>
  )
}

export default Header