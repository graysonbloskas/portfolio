import React from 'react';
import { NavLink } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';
import Pdf from '../../src/J.Grayson_Bloskas_Resume.pdf';

export default function Navbar() {
  return (
    <header className='bg-gray-800'>
      <div className='container mx-auto md:flex lg:flex justify-between'>
        <nav className='flex'>
          <NavLink
            exact
            to='/'
            activeClassName='text-white'
            className='inline-flex item-center py-6 px-3 mr-4 text-blue-100 hover:text-blue-800 text-4xl font-bold cursive tracking-widest hover:cursor-pointer'
          >
            Home
          </NavLink>
          <NavLink
            to='/project'
            className='inline-flex items-center py-3 px-3 my-6 rounded text-blue-200 hover:text-blue-800 hover:cursor-pointer'
            activeClassName='text-gray-800 bg-gray-600'
          >
            Projects
          </NavLink>
          <NavLink
            to='/about'
            className='inline-flex items-center py-3 px-3 my-6 rounded text-blue-200 hover:text-blue-800 hover:cursor-pointer'
            activeClassName='text-gray-800 bg-gray-600'
          >
            About Me
          </NavLink>
          <NavLink
            to='/post'
            className='inline-flex items-center py-3 px-3 my-6 rounded text-blue-200 hover:text-blue-800 hover:cursor-pointer'
            activeClassName='text-gray-800 bg-gray-600'
          >
            Blog Post
          </NavLink>
          <a
            href={Pdf}
            target='_blank'
            className='inline-flex items-center py-3 px-3 my-6 rounded text-blue-200 hover:text-blue-800 hover:cursor-pointer'
            activeClassName='text-gray-800 bg-gray-600'
          >
            My Resume
          </a>
        </nav>
        <div className='inline-flex py-3 px-3 my-6'>
          <SocialIcon
            url='https://www.linkedin.com/in/graysonbloskas/'
            className='mr-4 hover:cursor-pointer'
            target='_blank'
            fgColor='#fff'
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url='https://github.com/graysonbloskas'
            className='mr-4 hover:cursor-pointer'
            target='_blank'
            fgColor='#fff'
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url='https://www.instagram.com/graysonbloskas/'
            className='mr-4 hover:cursor-pointer'
            target='_blank'
            fgColor='#fff'
            style={{ height: 35, width: 35 }}
          />
        </div>
      </div>
    </header>
  );
}
