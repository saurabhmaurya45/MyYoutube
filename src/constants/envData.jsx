export const API_KEY = "AIzaSyCF589GtSW3koG9gz7gL5q6SZZeke7ntRU"

export const PAGE_OFFSET_VIDEO_DATA = 25

export const PAGE_OFFSET_COMMENT_DATA = 100

export const PAGE_OFFSET_SEARCH_COUNT = 15

export const YOUTUBE_VIDEO_URL = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet&part=localizations&part=player&part=liveStreamingDetails&part=recordingDetails&part=status&part=statistics&part=contentDetails&part=id&part=topicDetails&chart=mostPopular&maxResults="+PAGE_OFFSET_VIDEO_DATA+"&regionCode=IN&key="

export const YOUTUBE_VIDEO_URL_BY_ID =  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet&part=status&part=statistics&part=contentDetails&part=topicDetails&regionCode=IN&id="

export const VIDEO_COMMENT_URL = "https://youtube.googleapis.com/youtube/v3/commentThreads?part=id&part=replies&part=snippet&maxResults="+PAGE_OFFSET_COMMENT_DATA+"&order=time&textFormat=html&videoId="

export const SEARCH_RESULT_VIDEO_DATA = "https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelType=any&maxResults="+PAGE_OFFSET_VIDEO_DATA+"&order=relevance&regionCode=IN&type=video&videoType=any&q="


// https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqbGJnd0N1UUluUVF1RVhEQlNwU2FYbHBYNHVkd3xBQ3Jtc0ttWDBGbGxLN0tYS1htcjlZQzZZU0FVN2FSSDdIa3plZTdWYXRwWFFjWENOai1RQ2Y0Z2dhRjNNRENXQWN2eVctLWVoaVk5LWdLcTROS05vSXh0QnMzc1RNLXZWWWFmTFJ5MmNaZ0ZaMHJIQ2lmUFBOUQ&q=http%3A%2F%2Fsuggestqueries.google.com%2Fcomplete%2Fsearch%3Fclient%3Dyoutube%26ds%3Dyt%26client%3Dfirefox%26q%3D&v=kmVrUn2FHKc