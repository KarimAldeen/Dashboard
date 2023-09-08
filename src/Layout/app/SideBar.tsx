'use client'
import { SideBarLogoUrl } from './Const'
import React, { useState } from 'react'
import { SideBar_Links } from '@/Routes';
import { usePathname } from 'next/navigation'
import Link from 'next/link';
import { FaAngleDown, FaAngleRight } from 'react-icons/fa';
import { GiHamburgerMenu } from "react-icons/gi";
import {nanoid} from 'nanoid'
const SideBar = () => {
  
  const pathname = usePathname()
  const [Isopen, setIsopen] = useState<boolean>(false)
  const [IsopenSide, setIsopenSide] = useState<boolean>(false)
    const OnHamburgerMenu = ()=>{
      setIsopenSide(true)
      document.getElementById("DashboardLayout_Body")?.classList.add("DashboardLayout_Body_Open")
      }
      const Onimg= ()=>{
        setIsopenSide(false)
        document.getElementById("DashboardLayout_Body")?.classList.remove("DashboardLayout_Body_Open")

        }
  

  return (
    <div className={IsopenSide ? "SideBar SideBar_Open" : 'SideBar'}>
      <div className='SideBar_Top'>
        <img alt=' ' src={SideBarLogoUrl} width={50} height={50} onClick={()=>Onimg()}/>
        <div className='HamburgerMenu' onClick={()=> OnHamburgerMenu()} >
          <GiHamburgerMenu />

        </div>

      </div>
      <div className='SideBar_Links'>
        {
          SideBar_Links?.map((i, index) => {
            const isActive = pathname === i?.href;

            if (i?.href) {
              return (
        
                  <Link
                    href={i?.href}
                    className={isActive ? 'SideBar_Link Active_SideBar_Link' : 'SideBar_Link'}
                    key={index}
                  >
                    {i?.Icon}
                    <div className='Link_Text'>
                      {(`${i?.Name}`)}

                    </div>
                  </Link>

              )
            }
            else {
              return (
                <React.Fragment key={nanoid()}>
                  <div
                    className={Isopen ? 'SideBar_Link DropDown  DropDown_SideBar_Link' : 'SideBar_Link DropDown'}
                    key={index}

                  >
                    <div onClick={() => setIsopen(v => !v)}>
                    {i?.Icon}
                    </div>
                    
                    <div className='DropDown_Text'>
                      {i?.Name}
                    </div>
                    <div className='DropDown_Svg' onClick={() => setIsopen(v => !v)}>
                     {Isopen ? <FaAngleDown /> :  <FaAngleRight />

                     }

                    </div>
                  </div>
                  {Isopen ?

                    i?.children?.map((i, index) => {
                      if (i?.href) {
                        return (
                          <React.Fragment key={nanoid()}>
                            <Link
                              href={i?.href}
                              className={'SideBar_Link'}
                              key={index}
                            >
                              {i?.Icon}
                              <div className='Link_Text'>
                                {i?.Name}

                              </div>
                            </Link>

                          </React.Fragment>

                        )
                      }
                    }

                    )
                    : ""

                  }
                </React.Fragment>

              )
            }

          })
        }



      </div>
    </div>
  )
}

export default SideBar