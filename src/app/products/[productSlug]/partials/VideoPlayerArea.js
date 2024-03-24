'use client';
import React from 'react';
import { 
    Player, 
    ControlBar 
} from 'video-react';
// import '~video-react/dist/video-react.css';


const VideoPlayerArea=()=>{
    return(
        <>
            <Player 
            autoPlay 
            src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
            height={200}
            >
                <ControlBar autoHide={false} className="my-class" />
            </Player>
        </>
    )
}
export default VideoPlayerArea;