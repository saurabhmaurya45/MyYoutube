import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { dateToDays } from '../helper/healper';
const VideoCard = ({video}) => {
    const sidebarStatus = useSelector((state) => state.sidebar.value);
    const {id,snippet,statistics} = video;
    const {title,thumbnails,channelTitle,publishedAt} = snippet;

    return (
        <>
            <Link to={"watch/"+id} key={id} className='my-2'>
                <div className={"video-card w-[26rem] "+(sidebarStatus===1?"md:w-[24rem]":"md:w-[20rem]") +"  md:m-1"}>
                    <div className="md:p-2">
                        <div className={"video-card__thumbnail w-[100%]  "+(sidebarStatus===1? "md:w-[23rem]":"md:w-[19rem]")+" h-[16rem] md:h-[14rem] py-2 "}>
                            <img className="md:rounded-xl w-full h-full " src={thumbnails.high.url} alt="thumbnail" />
                        </div>
                        <div className="video-card__info flex w-full ">
                            <div className="video-card__avatar w-[12%]" >
                                <img className="md:w-[36px] md:h-[36px] rounded-full" src="https://yt3.ggpht.com/ytc/AIdro_nFNsnkrn5f2X1v1ww_s1h93T3MEN7pTsPpJMMQBe68HsA=s68-c-k-c0x00ffffff-no-rj" alt="avatar" />
                            </div>
                            <div className="video-card__text ml-2 text-wrap md:w-[88%]">
                                <h4 className="text-base font-medium line-clamp-2 ">{title}</h4>
                                <p className="text-xs text-gray-500">{channelTitle}</p>
                                <p className="text-xs text-gray-500">{statistics?.viewCount} views • {dateToDays(publishedAt)} days ago</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>



        </>
    )
}

export default VideoCard