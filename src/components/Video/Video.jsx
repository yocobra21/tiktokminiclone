import React from 'react';
import { VideoFooter } from '../';
import { VideoSidebar } from '../';
import './Video.css';

export default function Video({url, channel , description, song, likes, comments, shares}) {

    const [playing, setPlaying] = React.useState(false);
    const videoRef = React.useRef(null);

    const onVideoPress = () => {
        if (playing) {
            videoRef.current.pause();
            setPlaying(!playing);
        } else {
            videoRef.current.play();
            setPlaying(!playing);
        }
    };

    return (
        <div className="video">
            <video className="video__player"
                onClick={onVideoPress}
                ref={videoRef}
                loop
                src={url}
            >

            </video>
            <VideoFooter
                channel={channel}
                description={description}
                song={song}
            />
            <VideoSidebar 
                likes={likes}
                comments={comments}
                shares={shares}
            />
        </div>
    )
}
