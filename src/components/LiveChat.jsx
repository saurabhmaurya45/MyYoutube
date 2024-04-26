import React, { useEffect, useRef, useState } from 'react'
import { BsSend } from "react-icons/bs";
import LiveSingleChat from './LiveSingleChat';
import { FaAngleDown } from "react-icons/fa6";
import { randomComment, randomIdGenerator } from '../helper/healper';
import { useSelector, useDispatch } from 'react-redux';
import { clearLiveCommentData, setLiveCommentData } from '../redux/liveCommentDataSlice';

const LiveChat = () => {
    const commentData = useSelector(state => state.liveComment.liveCommentData);
    const dispatch = useDispatch();
    const messageEl = useRef(null);
    const [chatMessage, setChatMessage] = useState({
        sentence: '',
        image: "https://yt3.ggpht.com/yti/ANjgQV_ITKYwuwDcwtaNafte-4q6SKs5gX4ORc06JprN0FtxiqRK=s88-c-k-c0x00ffffff-no-rj",
        id: randomIdGenerator(),
        first_name: 'Demo',
        last_name: 'Testing'
    });

    const sendCommentHandler = () => {
        console.log(chatMessage);
        dispatch(setLiveCommentData(chatMessage));
        setChatMessage({
            sentence: '',
            image: "https://yt3.ggpht.com/yti/ANjgQV_ITKYwuwDcwtaNafte-4q6SKs5gX4ORc06JprN0FtxiqRK=s88-c-k-c0x00ffffff-no-rj",
            id: randomIdGenerator(),
            first_name: 'Demo',
            last_name: 'Testing'
        });
    }

    useEffect(() => {
        if (messageEl) {
            messageEl.current.addEventListener('DOMNodeInserted', event => {
                const { currentTarget: target } = event;
                target.scroll({ top: target.scrollHeight, behavior: 'smooth' });
            });
        }
    }, [])

    useEffect(() => {
        dispatch(clearLiveCommentData());
        let comment;
        const interval = setInterval(() => {
            comment = randomComment();
            dispatch(setLiveCommentData(comment));
        }, 3000);

        return () => clearInterval(interval);
        
    }, [])
    return (
        <div>
            <div className='live-comment bg-white border rounded-xl w-full h-[550px] '>
                <div className='live-comment-title flex items-center relative  w-full rounded-t-xl p-3 border-b'>Live chat <span className=' ml-2'><FaAngleDown /></span> </div>
                <div className='live-comment-body flex flex-col overflow-y-scroll h-[440px]' ref={messageEl}>
                    {
                        commentData.map((comment) => {
                            return <LiveSingleChat key={comment.id} comment={comment} />
                        })
                    }
                </div>
                <div className='live-comment-title flex relative  w-full rounded-b-xl p-3 border-t '>
                    <input type='text' placeholder='Chat...' className='w-full px-2 rounded-xl bg-gray-100 text-sm font-light focus:outline-none' value={chatMessage.sentence}
                    onChange={(e)=>{setChatMessage({...chatMessage,sentence:e.target.value})}}
                    onKeyDown={(e) => e.key === "Enter" && sendCommentHandler()} />
                    <button className='bg-gray-100  p-2 px-4 ml-3 rounded-xl text-black font-semibold' onClick={() => { sendCommentHandler() }}><BsSend /></button>
                </div>
            </div>
        </div>
    )
}

export default LiveChat