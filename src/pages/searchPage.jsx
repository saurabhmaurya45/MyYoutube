import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { API_KEY, SEARCH_RESULT_VIDEO_DATA } from '../constants/envData';
import { useDispatch, useSelector } from 'react-redux';
import { clearVideoData, setVideoData } from "../redux/searchDataSlice";
import SearchVideoCard from '../components/SearchVideoCard';
import { Shimmer } from 'react-shimmer';
import { resetSideBar } from '../redux/sidebarStatusSlice';
import { setApiLimit } from '../redux/apiLimitSlice';

const SearchPage = () => {
    const [params] = useSearchParams();
    const dispatch = useDispatch();
    const query = params.get("q")
    const [isLoading, setIsLoading] = useState(false);
    const [firstSearchCall, setFirstSearchCall] = useState(false);
    const videoData = useSelector((state) => state.searchData.videoData);
    const totalData = useSelector((state) => state.searchData.totalResults);
    const nextPageToken = useSelector((state) => state.searchData.nextPageToken);
    const videoDataLength = useSelector((state) => state.searchData.videoLength);
    const sidebarStatus = useSelector((state) => state.sidebar.value);

    const fetchDataBasedOnQuery = async () => {
        setIsLoading(true);
        try{
            const data = await fetch(SEARCH_RESULT_VIDEO_DATA + query + "&key=" + API_KEY);
            const json = await data.json()
            if(!json?.error){
                dispatch(clearVideoData())
                dispatch(setVideoData(json));
                setFirstSearchCall(true);
            }
            if(json?.error.code === 403){
                console.log(json.error.message)
                dispatch(setApiLimit());
            }
        }
        catch(error){
            console.log(error);
        }
        setIsLoading(false);
    }
    const fetchMoreData = async () => {
        setIsLoading(true);
        try{
            const response = await fetch(SEARCH_RESULT_VIDEO_DATA + query + "&key=" + API_KEY+ "&pageToken=" + nextPageToken);
            const data = await response.json();
            if(!data?.error){
                dispatch(setVideoData(data))
            }
            if(data?.error.code === 403){
                console.log(data.error.message)
                dispatch(setApiLimit());
            }
        }
        catch(error){
            console.log(error);
            
        }

        setIsLoading(false);
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
        !firstSearchCall && fetchDataBasedOnQuery();
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [query,nextPageToken,videoDataLength])



    useEffect(() => {
        if (sidebarStatus === 3) {
            dispatch(resetSideBar())
        }
    }, [])

    return (
        <>
            {
                videoData.map((video, index) => {
                    return <SearchVideoCard key={video.id.videoId} video={video} />
                })
            }
            {
                isLoading &&
                <>
                    <Shimmer height={400} width={1150} />
                    <Shimmer height={400} width={1150} />
                    <Shimmer height={400} width={1150} />
                </>
            }

        </>

    )
}

export default SearchPage