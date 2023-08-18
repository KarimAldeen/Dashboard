"use client"
import { Menu, MenuItem, MenuButton } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';
import { FaEllipsisV } from 'react-icons/fa';

export default function Header_Menu() {
  return (
    <Menu menuButton={<MenuButton><FaEllipsisV/></MenuButton>} transition>
      <MenuItem>Lahleh</MenuItem>
      <MenuItem>Lahleh2</MenuItem>
      <MenuItem>Lahleh3</MenuItem>
    </Menu>
  );
}