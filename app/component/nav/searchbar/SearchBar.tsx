import React from 'react'
import {BiSearch} from "react-icons/bi"

type Props = {}

const SearchBar = (props: Props) => {
  return (
    <div>
      <div className='flex items-center bg-gray-100 p-2 rounded-full mx-md:hidden'>
        <button><BiSearch size={22} className="opacity-60"/></button>
        <input type="text" className='rounded-2xl outline-none px-2 bg-transparent caret-blue-500 placeholder:font-light placeholder:text-gray-600 text-[15px]'
        placeholder='Search'
        autoComplete='false'
        />
      </div>
    </div>
  )
}

export default SearchBar