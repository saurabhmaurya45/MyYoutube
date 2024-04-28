import React from 'react'
import { dateToDays } from '../helper/healper';
import {Link} from 'react-router-dom';


const SearchVideoCard = ({video}) => {
    const videoId = video?.id?.videoId;
    const {publishedAt,title,description,thumbnails,channelTitle} = video?.snippet;
  return (
    <Link to = {"/watch/"+videoId}>
        <div className='search-video-card flex w-full h-72  my-2 pr-14 '>
            <div className='thumbnail-container w-[40%] h-full   mr-2 px-2  rounded-lg'>
                <img className='thumbnail w-full h-full rounded-lg ' src={thumbnails.high.url ??""} alt='thumbnail'/> 
            </div>
            <div className='details-container w-[60%] h-full px-1 text-[#5b5a5a] '>
                <h1 className='title text-xl text-black line-clamp-2'>{title ??''}</h1>
                <p className='statictics text-xs my-3 flex items-center'>   {dateToDays(publishedAt ?? new Date())}  ago</p>
                <div className='channel-description flex items-center text-xs my-4 cursor-pointer hover:text-black'>
                    <img className='channel-image rounded-full w-6 h-6' alt='channel-image' src='https://yt3.ggpht.com/yti/ANjgQV_ITKYwuwDcwtaNafte-4q6SKs5gX4ORc06JprN0FtxiqRK=s88-c-k-c0x00ffffff-no-rj' />
                    <p className='channel-name ml-4 '>{channelTitle ?? ''}</p>
                </div>
                <p className='video-description hover:text-black text-xs my-5'>{description??""}</p>
            </div>
        </div>
    </Link>
  )
}

export default SearchVideoCard