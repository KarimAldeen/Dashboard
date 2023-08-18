"use client"
import React, { useState } from 'react';
import { FaAngleDown } from 'react-icons/fa';
import { GiHamburgerMenu } from "react-icons/gi";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { SideBar_Links } from '@/Utils/SideNavLinks';
import { SideBarLogoUrl } from '@/Utils/Const';

const SideBar = () => {
  const pathname = usePathname();
  const [isOpenSide, setIsOpenSide] = useState(false);
  const [isOpenDropdown, setIsOpenDropdown] = useState(false);

  const toggleHamburgerMenu = () => {
    setIsOpenSide(true);
    document.getElementById('DashboardLayout_Body')?.classList.add('DashboardLayout_Body_Open');
  };

  const closeImage = () => {
    setIsOpenSide(false);
    document.getElementById('DashboardLayout_Body')?.classList.remove('DashboardLayout_Body_Open');
  };

  return (
    <div className={isOpenSide ? 'SideBar SideBar_Open' : 'SideBar'}>
      <div className="SideBar_Top">
        <img alt="" src={SideBarLogoUrl} width={60} height={40} onClick={closeImage} />
        <div className="HamburgerMenu" onClick={toggleHamburgerMenu}>
          <GiHamburgerMenu />
        </div>
      </div>
      <div className="SideBar_Links">
        {SideBar_Links?.map((item, index) => {
          const isActive = pathname === item?.href;
          if (item?.href) {
            return (
              <Link href={item?.href} className={isActive ? 'SideBar_Link Active_SideBar_Link' : 'SideBar_Link'} key={index}>
                {item?.Icon}
                <div className="Link_Text">{item?.Name}</div>
              </Link>
            );
          } else {
            return (
              <div className={isOpenDropdown ? 'SideBar_Link DropDown DropDown_SideBar_Link' : 'SideBar_Link DropDown'} key={index}>
                <div onClick={() => setIsOpenDropdown((prev) => !prev)}>
                  {item?.Icon}
                </div>
                <div className="DropDown_Text">{item?.Name}</div>
                <div className="DropDown_Svg" onClick={() => setIsOpenDropdown((prev) => !prev)}>
                  <FaAngleDown />
                </div>
                {isOpenDropdown &&
                  item.children?.map((childItem, childIndex) => {
                    if (childItem?.href) {
                      return (
                        <Link href={childItem?.href} className="SideBar_Link" key={childIndex}>
                          {childItem?.Icon}
                          <div className="Link_Text">{childItem?.Name}</div>
                        </Link>
                      );
                    }
                    return null;
                  })}
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default SideBar;
