import React from 'react'
import { dateToDays } from '../helper/healper';
import { Link } from 'react-router-dom';


const SearchVideoCard = ({ video }) => {
    const videoId = video?.id?.videoId;
    const { publishedAt, title, description, thumbnails, channelTitle } = video?.snippet;
    return (
        <Link to={"/watch/" + videoId}>
            <div className='search-video-card flex w-full md:h-72 my-2 md:pr-14 flex-col  md:flex-row '>
                <div className='thumbnail-container w-[100%] md:w-[40%] h-full   md:mr-2 md:px-2  md:rounded-lg'>
                    <img className='thumbnail w-full h-52 md:h-full md:rounded-lg ' src={thumbnails.high.url ?? ""} alt='thumbnail' />
                </div>
                <div className='details-container pt-1 md:p-3 ml-2 md:w-[60%] h-full px-1 text-[#5b5a5a] '>
                    <h1 className='title text-xl text-black line-clamp-1 md:line-clamp-2'>{title ?? ''}</h1>
                    <div className='flex  justify-between flex-row-reverse md:block'>
                        <p className='statictics text-xs my-3 mr-3 md:mr-0 items-center flex'>   {dateToDays(publishedAt ?? new Date())}  ago</p>
                        <div className='channel-description flex items-center text-xs my-4 cursor-pointer hover:text-black'>
                            <img className='channel-image rounded-full w-6 h-6' alt='channel-image' src='https://i.pngimg.me/thumb/f/720/m2i8d3i8N4d3N4K9.jpg' />
                            <p className='channel-name ml-4 '>{channelTitle ?? ''}</p>
                        </div>
                    </div>
                    <p className='video-description hover:text-black text-xs my-5 hidden md:block'>{description ?? ""}</p>
                </div>
            </div>
        </Link>
    )
}

export default SearchVideoCard