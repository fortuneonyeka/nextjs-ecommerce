"use client"
import React, { useState } from 'react'

type Props = {}

export const NavBar = (props: Props) => {

  const [showProfile, setShowProfile] = useState<boolean>(false)
  const [showNav, setShowNav] = useState<boolean>(false)

  return (
    <div>
      <div className='flex items-center justify-between py-4 relative'>
          <div className='flex items-center md:space-x-10 lg:space-x-20'>
              <div className='font-semibold text-2xl'> <a href="/">Evergreen</a></div>
              <nav className='max-md:"hidden'>
                  <ul className='flex items-center lg:space-x-10 space-x-7 opacity-90 text-[17px] '>
                    <li><a href="/" className='w-full inline-block py-3 hover:text-green-600'>Shop</a></li>
                    <li><a href="filter" className='w-full inline-block py-3 hover:text-green-600'>Filter</a></li>
                    <li><a href="myproducts" className='w-full inline-block py-3 hover:text-green-600'>My Products</a></li>
                    
                  </ul>
              </nav>
          </div>
      </div>
    </div>
  )
}