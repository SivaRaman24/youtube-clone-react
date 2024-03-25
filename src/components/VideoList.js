import { useEffect, useState } from "react";

import { YOUTUBE_VIDEOS_API_URL } from "../constants/Config";

import VideoContent from "./VideoContent";

const VideoList = () => {
  const [videos, setVideos] = useState([]);
  const [formattedVideos, setFormattedVideos] = useState([]);

  // GET youtube videos API call
  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API_URL);
    let videos = await data.json();
    const formattedVideos = videos?.items.map((video) => {
      const videoItem = {
        id: video.id,
        categoryId: video.snippet.categoryId,
        channelId: video.snippet.channelId,
        channelTitle: video.snippet.channelTitle,
        channelAvatarUrl: process.env.PUBLIC_URL + '/channel_profile.jpg',
        description: video.snippet.localized.description,
        liveBroadcastContent: video.snippet.liveBroadcastContent,
        title: video.snippet.localized.title,
        thumbnailUrl: video.snippet.thumbnails.standard.url,
        viewCount: video.statistics.viewCount,
        publishedAt: video.snippet.publishedAt,
      };
      return videoItem;
    });
    setVideos(videos);
    setFormattedVideos(formattedVideos);
  };

  useEffect(() => {
    getVideos();
  }, []);

  return (
    <div className="videos-container mx-4 flex flex-row flex-wrap justify-center">
      {
        formattedVideos.map((content) => {
          return <VideoContent key={content.id} videoContent={content}></VideoContent>
        })
      }
    </div>
  );
};

export default VideoList;
