import React from 'react'

const Story = () => {
  return (
    <div className='w-full px-32 my-20 flex flex-row'>
        <img className='w-32 h-1/3 mr-20' src={process.env.PUBLIC_URL+"/det.jpg"} alt="" />
        <div className='flex justify-center items-center'>
            <p className='text-lg font-bold'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aspernatur harum vitae unde iste. Quod ea nihil ipsa maiores est omnis, sit officia facilis minima, soluta in repellat. Culpa, sed?</p>
        </div>
    </div>  
  )
}

export default Story