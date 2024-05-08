import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { hideSideBar } from '../redux/sidebarStatusSlice';
import { dateToDays, formatDescription } from '../helper/healper';
import { VIDEO_COMMENT_URL, API_KEY, YOUTUBE_VIDEO_URL_BY_ID } from '../constants/envData';
import CommentList from '../components/CommentList';
import LiveChat from '../components/LiveChat';

const SingleVideo = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [video, setVideo] = useState(null);
  const [loading, setLoading] = useState(false);
  const [readMore, setReadMore] = useState(false);
  const [commentData, setCommentData] = useState([]);

  const fetchCommentData = async () => {
    const response = await fetch(VIDEO_COMMENT_URL + id + "&key=" + API_KEY);
    const data = await response.json();
    setCommentData(data.items);
  };

  const fetchVideoData = async () => {
    setLoading(true);
    const response = await fetch(YOUTUBE_VIDEO_URL_BY_ID + id + "&key=" + API_KEY);
    const data = await response.json();
    setVideo(data.items[0]);
    setLoading(false);
  };

  useEffect(() => {
    dispatch(hideSideBar());
    fetchVideoData();
    fetchCommentData();
  }, []);

  return (
    <div className='md:mx-12 my-4 p-1'>
      <div className='flex flex-wrap'>
        <div className='w-full md:w-3/4 pt-2 pr-1'>
          <div className='video-container rounded-xl mb-4'>
            <iframe
              className='w-full md:h-[34.5rem] h-[20rem] rounded-xl'
              // width="960"
              // height="500"
              src={"https://www.youtube.com/embed/" + video?.id}
              title={video?.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen >
            </iframe>
          </div>
          <div className='video-title rounded-xl mb-4 text-wrap'>
            <h1 className='text-xl font-bold '>{video?.snippet.title}</h1>
          </div>
          <div className='video-description bg-gray-100 rounded-xl mb-4 pb-4 '>
            <div className={!readMore ? 'line-clamp-5' : ''}>
              <p className='text-sm p-4'><span className='font-bold '>{video?.statistics.viewCount} Views {dateToDays(video?.snippet.publishedAt)} days ago</span> <br/><br/> {formatDescription(video?.snippet.description || "")}</p>
            </div>
            <span className='text-sm cursor-pointer p-4' onClick={() => setReadMore(!readMore)}>{!readMore ? 'Show More' : 'Show Less'}</span>
          </div>
          <div className='video-comment rounded-xl mb-4 mt-5 '>
            <h1 className='text-xl font-bold'>{video?.statistics.commentCount } Comments</h1>
            <CommentList commentList={commentData} />
          </div>
        </div>
        <div className='w-full md:w-1/4 pt-2 pr-1'>
          <LiveChat />
        </div>
      </div>
    </div>
  );
};

export default SingleVideo;
