import React from 'react'
import { useSelector } from 'react-redux';

const apiLimitReached = () => {
    const apiLimitExceed = useSelector((state) => state.apiLimitExceed);
  return (
    <div className='flex justify-center items-center w-full h-96'>
        <h1 className='text-4xl'>{apiLimitExceed.apiLimitMessage}</h1>
    </div>
  )
}

export default apiLimitReached