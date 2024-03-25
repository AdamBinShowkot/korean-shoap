
import React from 'react';
import { 
    Player, 
    ControlBar 
} from 'video-react';
import './video-react.css';
import ReactPlayer from 'react-player/youtube'


const VideoPlayerArea=()=>{
    return(
        <>
            <ReactPlayer 
            url='https://www.youtube.com/watch?v=A-gBRBD7L5I'
            style={{
                height:'100%',
                width:"100%"
            }} 
            className="youtube-player"
            />
        </>
    )
}
export default VideoPlayerArea;