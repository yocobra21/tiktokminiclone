import React from 'react'
import './VideoSidebar.css'
import FavoriteIcon from '@material-ui/icons/Favorite'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import MessageIcon from '@material-ui/icons/Message'
import ShareIcon from '@material-ui/icons/Share'

export default function VideoSidebar({ likes, comments, shares}) {

    const [liked, setLiked] = React.useState(false)

    const toggleLiked = () => {
        liked ? setLiked(!liked) : setLiked(!liked)
    }

    return (
        <div className="video-sidebar">
            <div className="video-sidebar__button">

                <div className="video-sidebar__button-item" onClick={toggleLiked}>
                    {liked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                </div>


                <p>{liked ? likes + 1 : likes}</p>
            </div>
            <div className="video-sidebar__button">
                <MessageIcon />
                <p>{comments}</p>
            </div>
            <div className="video-sidebar__button">
                <ShareIcon />
                <p>{shares}</p>
            </div>
        </div>
    )
}

