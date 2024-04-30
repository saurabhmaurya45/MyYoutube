
import { useSelector } from 'react-redux'
import VideoCard from './VideoCard'
import { useDispatch } from 'react-redux'
import { clearVideoData, setVideoData } from '../redux/videoDataSlice'
import { useEffect, useMemo, useState } from 'react'
import { API_KEY, YOUTUBE_VIDEO_URL } from '../constants/envData'
import { Shimmer } from 'react-shimmer'
import { setApiLimit } from '../redux/apiLimitSlice'


const VideoCardContainer = () => {
    const videoData = useSelector((state) => state.videoData?.videoData);
    const totalData = useSelector((state) => state.videoData?.totalResults);
    const nextPageToken = useSelector((state) => state.videoData?.nextPageToken);
    const videoDataLength = useSelector((state) => state.videoData?.videoLength);
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const [firstVideoCall, setFirstVideoCall] = useState(false);

    const fetchVideoData = async () => {
        setLoading(true);
        try{
            const response = await fetch(YOUTUBE_VIDEO_URL + API_KEY);
            const data = await response.json();
            
            if(data && !data?.error){
                dispatch(clearVideoData())
                dispatch(setVideoData(data))
                setFirstVideoCall(true);
            }
            if(data && data?.error.code === 403){
                console.log(data.error.message)
                dispatch(setApiLimit());
            }
        }
        catch(error){
            console.log(error);
            
        }
        setLoading(false);
    }
    
    const fetchMoreData = async () => {
        setLoading(true);
        try{
            const response = await fetch(YOUTUBE_VIDEO_URL + API_KEY + "&pageToken=" + nextPageToken);
            const data = await response.json();
            if(data && !data?.error){
                dispatch(setVideoData(data))
            }
            if(data && data.error.code === 403){
                console.log(data.error.message)
                dispatch(setApiLimit());
            }
        }
        catch(error){
            console.log(error);
            
        }
        setLoading(false);
    }

    const handleScroll = () => {
        if (window.innerHeight + window.scrollY >= document.body.scrollHeight) {
            if(videoDataLength >= totalData)
            {
                return;
            }
            else{
                fetchMoreData();
            }
        }
    }

    useEffect(() => {
        !firstVideoCall && fetchVideoData();
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [nextPageToken,videoDataLength])

    return (
        <>
            <div className='flex flex-wrap'>
                {
                    videoData?.map((video, index) => (<VideoCard video={video} key={video.id + index} />))
                }
                {
                    loading &&
                    (
                        <div className='flex justify-evenly rounded-lg flex-wrap m-3 -z-10'>
                            <Shimmer width={340} height={300} />
                            <Shimmer width={340} height={300} />
                            <Shimmer width={340} height={300} />
                            <Shimmer width={340} height={300} />
                            <Shimmer width={340} height={300} />
                            <Shimmer width={340} height={300} />
                            <Shimmer width={340} height={300} />
                            <Shimmer width={340} height={300} />
                            <Shimmer width={340} height={300} />
                        </div>
                    )
                }


            </div>

        </>
    )
}

export default VideoCardContainer