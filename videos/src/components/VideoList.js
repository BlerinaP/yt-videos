import React from "react";
import VideoItem from "./VideoItem";

//We destructure videos and onVideoSelect from the videoList
const VideoList = ({videos, onVideoSelect}) => {
    //then we map over videos we get in response and for each video we return videoItem compononent with the given key which is the id of video and the
    //video we select
    const renderedList = videos.map((video) => {
       return <VideoItem key={video.id.videoId} onVideoSelect={onVideoSelect} video={video}/>;
    });
    return <div className="ui relaxed divided list">{renderedList}</div>
};

export  default  VideoList;