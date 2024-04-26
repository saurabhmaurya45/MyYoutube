import React from 'react'
import { randomImageGenerator } from '../helper/healper'

const LiveSingleChat = ({comment}) => {
    const {first_name,last_name,image,sentence} = comment;
    return (
        <div>
            <div className='comment flex w-full p-2 pl-4  hover:bg-gray-100 my-1'>
                <div className='comment-image w-[10%]'>
                    <img className='rounded-full w-8 h-8' src={image} alt="user logo" />
                </div>
                <div className='comment-content text-xs w-[90%] ml-2'>
                    <div className='comment-text'><span className='mr-2 font-semibold text-[rgb(112,112,112)] text-justify'>{first_name+" "+last_name }</span> {sentence}</div>
                </div>
            </div>
        </div>
    )
}

export default LiveSingleChat