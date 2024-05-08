import React from 'react'
import { dateToDays } from '../helper/healper';
import { AiOutlineLike } from "react-icons/ai";
import parse from 'html-react-parser';

const SingleComment = ({ comment }) => {
    const topLevel = comment?.snippet?.topLevelComment?1:0;
    const commentData = comment?.snippet?.topLevelComment || comment;

    return (
        <div className='single-comment flex  mt-5 w-full'>
            <div className={'channel-logo '+topLevel?" w-[16%] md:w-[8%]":" md:w-[4%]"}>
                <a href={commentData.snippet.authorChannelUrl} target='_blank' rel='noreferrer'>
                    <div className='logo p-2 cursor-pointer  '>
                        <img className={'rounded-full '+(topLevel?" w-12 h-12 ":" w-8 h-8 ")+ ' border'} src={commentData.snippet.authorProfileImageUrl } alt='logo' />
                    </div>
                </a>
            </div>
            <div className={'comment-details '+topLevel?" w-[84%] md:w-[92%]":" md:w-[96%]"}>
                <a href={commentData.snippet.authorChannelUrl} target='_blank' rel='noreferrer'>
                    <div className='comment-user font-semibold text-sm'> {commentData.snippet.authorDisplayName} {dateToDays(commentData.snippet.publishedAt)} days ago</div>
                </a>
                <div className='comment-text text-sm font-normal'> {parse(commentData.snippet.textDisplay)} </div>
                <div className='comment-like cursor-pointer flex items-center text-sm font-normal mt-2'><AiOutlineLike className='mr-1 text-2xl ' /> {commentData.snippet.likeCount}</div>
            </div>

        </div>
    )
}

export default SingleComment