
import { useSelector } from 'react-redux'
import VideoCard from './VideoCard'
import { useDispatch } from 'react-redux'
import { clearVideoData, setVideoData } from '../redux/videoDataSlice'
import { useEffect, useState } from 'react'
import { API_KEY, YOUTUBE_VIDEO_URL } from '../constants/envData'
import { Shimmer } from 'react-shimmer'


const VideoCardContainer = () => {
    const videoData = useSelector((state) => state.videoData?.videoData);
    const totalData = useSelector((state) => state.videoData?.totalResults);
    const nextPageToken = useSelector((state) => state.videoData?.nextPageToken);
    const videoDataLength = useSelector((state) => state.videoData?.videoLength);
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const [totalDataCount, setTotalDataCount] = useState(totalData ?? 6);

    const fetchVideoData = async () => {
        setLoading(true);
        const response = await fetch(YOUTUBE_VIDEO_URL + API_KEY);
        const data = await response.json();
        dispatch(clearVideoData())
        dispatch(setVideoData(data))
        setTotalDataCount(data.pageInfo.totalResults)
        setLoading(false);
    }
    
    const fetchMoreData = async () => {
        console.log("inside fetch more data");
        
        
        setLoading(true);
        const response = await fetch(YOUTUBE_VIDEO_URL + API_KEY + "&pageToken=" + nextPageToken);
        const data = await response.json();
        dispatch(setVideoData(data))
        setLoading(false);
    }

    const handleScroll = () => {
        if (window.innerHeight + window.scrollY >= document.body.scrollHeight) {
            console.log("inside scroll");
            console.log(totalDataCount, "inside scroll");
            console.log(videoDataLength, "inside fetch more data");
            console.log(totalData, "inside fetch more data");
            console.log(nextPageToken, "inside fetch more data");
            console.log(videoDataLength >= totalData);
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
        fetchVideoData();
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [])
    console.log(totalDataCount,"outside scroll");
    console.log(videoDataLength,"outside fetch more data");
    console.log(totalData,"outside fetch more data");
    console.log(nextPageToken,"outside fetch more data");
    console.log(videoDataLength >= totalData,"outside fetch more data");
    return (
        <>
            <div className='flex flex-wrap'>
                {
                    videoData?.map((video, index) => (<VideoCard video={video} key={video.id + index} />))
                }
                {
                    loading &&
                    (
                        <div className='flex justify-evenly rounded-lg flex-wrap m-3'>
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