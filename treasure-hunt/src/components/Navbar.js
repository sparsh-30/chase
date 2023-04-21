import React from 'react'
import {BiUserCircle} from 'react-icons/bi'

const Navbar = (props) => {
  return (
    <div className='sticky flex flex-row justify-between py-6 px-20 w-full bg-[#8D7B68] text-white'>
        <div className='text-3xl'>CHASE</div>
        <div className='flex flex-row justify-center items-center'>
            <p className='text-lg font-bold'>{props.username}</p>
            <BiUserCircle className='text-4xl ml-4' />
        </div>
    </div>
  )
}

export default Navbar