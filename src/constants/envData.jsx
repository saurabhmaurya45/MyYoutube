export const API_KEY = "AIzaSyBDZPR2036aUIndTjhRN79KVkDaRIppVBE"

export const PAGE_OFFSET_VIDEO_DATA = 25

export const PAGE_OFFSET_COMMENT_DATA = 100

export const PAGE_OFFSET_SEARCH_COUNT = 15

export const YOUTUBE_VIDEO_URL = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet&part=localizations&part=player&part=liveStreamingDetails&part=recordingDetails&part=status&part=statistics&part=contentDetails&part=id&part=topicDetails&chart=mostPopular&maxResults="+PAGE_OFFSET_VIDEO_DATA+"&regionCode=IN&key="

export const YOUTUBE_VIDEO_URL_BY_ID =  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet&part=status&part=statistics&part=contentDetails&part=topicDetails&regionCode=IN&id="

export const VIDEO_COMMENT_URL = "https://youtube.googleapis.com/youtube/v3/commentThreads?part=id&part=replies&part=snippet&maxResults="+PAGE_OFFSET_COMMENT_DATA+"&order=time&textFormat=html&videoId="

export const SEARCH_RESULT_VIDEO_DATA = "https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelType=any&maxResults="+PAGE_OFFSET_VIDEO_DATA+"&order=relevance&regionCode=IN&type=video&videoType=any&q="

export const SEARCH_SUGGESTION_DATA = "https://clients1.google.com/complete/search?client=youtube&gs_ri=youtube&ds=yt&q="
export const SEARCH_SUGGESTION_DATA1 = "https://suggestqueries.google.com/complete/search?ds=yt&q="