import { IoMdHome } from "react-icons/io";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions, MdOutlineWatchLater, MdOutlineOutlinedFlag, MdOutlinePlaylistPlay } from "react-icons/md";
import { PiUserSquareThin, PiVideoThin } from "react-icons/pi";
import { SlSettings } from "react-icons/sl";
import { TfiHelpAlt } from "react-icons/tfi";
import { RiFeedbackLine } from "react-icons/ri";
import { VscHistory } from "react-icons/vsc";
import { GoVideo } from "react-icons/go";
import { BiMoviePlay } from "react-icons/bi";
import { AiOutlineLike } from "react-icons/ai";
import { FaShoppingCart, FaMusic, FaFilm, FaGamepad, FaPlay, FaLaptop, FaTshirt } from "react-icons/fa";
import { BsFillGiftFill, BsNewspaper, BsLightningFill } from "react-icons/bs";

export const sidebarData = [
    {
        "main": [
            {
                "name": "Home",
                "icon": <IoMdHome className="text-2xl" />,
                "path": "/"
            },
            {
                "name": "Shorts",
                "icon": <SiYoutubeshorts className="text-2xl" />,
                "path": "/shorts"
            },
            {
                "name": "Subscriptions",
                "icon": <MdOutlineSubscriptions className="text-2xl" />,
                "path": "/subscriptions"
            },
        ]
    },
    {
        "You": [
            {
                "name": "Your Channel",
                "icon": <PiUserSquareThin className="text-2xl" />,
                "path": "/yourchannel"
            },
            {
                "name": "History",
                "icon": <VscHistory className="text-2xl" />,
                "path": "/history"
            },
            {
                "name": "Playlist",
                "icon": <MdOutlinePlaylistPlay className="text-2xl" />,
                "path": "/playlist"
            },
            {
                "name": "Your videos",
                "icon": <GoVideo className="text-2xl" />,
                "path": "/yourvideos"
            },
            {
                "name": "Your movies",
                "icon": <BiMoviePlay className="text-2xl" />,
                "path": "/yourmovies"
            },
            {
                "name": "Watch later",
                "icon": <MdOutlineWatchLater className="text-2xl" />,
                "path": "/watchlater"
            },
            {
                "name": "Liked videos",
                "icon": <AiOutlineLike className="text-2xl" />,
                "path": "/likedvideos"
            }
        ]
    },
    {
        "Subscription": [
            {
                "name": "AAJ tak",
                "icon": <BsNewspaper className="text-2xl" />,
                "path": "/aajtak"
            },
            {
                "name": "Discovery Uk",
                "icon": <BsLightningFill className="text-2xl" />,
                "path": "/discoveryuk"
            },
            {
                "name": "National Geographic",
                "icon": <BsNewspaper className="text-2xl" />,
                "path": "/nationalgeographic"
            },
            {
                "name": "National Science",
                "icon": <FaLaptop className="text-2xl" />,
                "path": "/nationalscience"
            }
        ]
    },
    {
        "Explore": [
            {
                "name": "Trending",
                "icon": <BsFillGiftFill className="text-2xl" />,
                "path": "/trending"
            },
            {
                "name": "Shopping",
                "icon": <FaShoppingCart className="text-2xl" />,
                "path": "/shopping"
            },
            {
                "name": "Music",
                "icon": <FaMusic className="text-2xl" />,
                "path": "/music"
            },
            {
                "name": "Movies",
                "icon": <FaFilm className="text-2xl" />,
                "path": "/movies"
            },
            {
                "name": "Live",
                "icon": <FaPlay className="text-2xl" />,
                "path": "/live"
            },
            {
                "name": "Games",
                "icon": <FaGamepad className="text-2xl" />,
                "path": "/games"
            },
            {
                "name": "Courses",
                "icon": <FaLaptop className="text-2xl" />,
                "path": "/courses"
            },
            {
                "name": "Fashion",
                "icon": <FaTshirt className="text-2xl" />,
                "path": "/fashion"
            }
        ]
    },
    {
        "More from Youtube": [
            {
                "name": "YouTube Premium",
                "icon": <MdOutlineSubscriptions className="text-2xl" />,
                "path": "/youtubepremium"
            },
            {
                "name": "YouTube Studio",
                "icon": <MdOutlineSubscriptions className="text-2xl" />,
                "path": "/youtubestudio"
            },
            {
                "name": "YouTube Music",
                "icon": <MdOutlineSubscriptions className="text-2xl" />,
                "path": "/youtubemusic"
            }

        ]
    },
    {
        "settings": [
            {
                "name": "Settings",
                "icon": <SlSettings className="text-2xl" />,
                "path": "/settings"
            },
            {
                "name": "Report history",
                "icon": <MdOutlineOutlinedFlag className="text-2xl" />,
                "path": "/reporthistory"
            },
            {
                "name": "Help",
                "icon": <TfiHelpAlt className="text-2xl" />,
                "path": "/help"
            },
            {
                "name": "Send feedback",
                "icon": <RiFeedbackLine className="text-2xl" />,
                "path": "/sendfeedback"
            }
        ]
    }
];

export const sidebarData2 = [
    {
        "name": "Home",
        "icon": <IoMdHome className="text-2xl" />,
        "path": "/"
    },
    {
        "name": "Shorts",
        "icon": <SiYoutubeshorts className="text-2xl" />,
        "path": "/shorts"
    },
    {
        "name": "Subscriptions",
        "icon": <MdOutlineSubscriptions className="text-2xl" />,
        "path": "/subscriptions"
    },
    {
        "name": "You",
        "icon": <PiVideoThin className="text-2xl" />,
        "path": "/you"
    }
]
