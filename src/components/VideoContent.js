import { YOUTUBE_BASE_URL, YOUTUBE_VIDEO_WATCH_URL } from "../constants/Config";

const VideoContent = ({ videoContent }) => {
  return (
    <div className="video-container w-80 mx-2 mb-10">
      <div className="thumnbnail bg-cover">
        <a
          id="thumbnail"
          href={YOUTUBE_VIDEO_WATCH_URL + videoContent.id}
          title={videoContent.title}
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={videoContent.thumbnailUrl}
            className="object-cover w-80 h-44 rounded-xl"
            alt={videoContent.channelTitle}
          />
        </a>
      </div>
      <div className="details grid grid-cols-12 gap-0">
        <a
          id="avatar-link"
          className="avatar mt-3 w-9 col-span-2"
          target="_blank"
          href={YOUTUBE_BASE_URL + "/" + videoContent.channelId}
          title={videoContent.channelTitle}
          rel="noreferrer"
        >
          <img
            src={videoContent.channelAvatarUrl}
            className="w-12 rounded-full"
            alt={videoContent.channelTitle}
          />
        </a>
        <div className="meta-data col-span-10">
          <h3 className=" mt-3 mb-1 text-base font-medium">
            <a
              href={YOUTUBE_VIDEO_WATCH_URL + videoContent.id}
              title={videoContent.title}
              className="multine-ellipsis"
              target="_blank"
              rel="noreferrer"
            >
              {videoContent.title}
            </a>
          </h3>
          <div className="channel-details">
            <div className="channel-name text-sm font-normal">
              <a
                href={videoContent.link} // Channel link should come
                title={videoContent.channelTitle}
                target="_blank"
                rel="noreferrer"
              >
                {videoContent.channelTitle}
              </a>
            </div>
            <div className="verification-info">
              {videoContent.isVerifiedChannel}
            </div>
          </div>
          <div className="meta-data-line text-sm font-normal">
            <span className="views">{videoContent.viewCount + " views"}</span>
            <span className="uploaded-on before:content-['.'] before:mx-1">
              {videoContent.publishedAt}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoContent;

// Single Video Container
// div video-content
// -- thumbnail section
// -- details section
//      -- avatar
//      -- Meta data
//          -- h3 - title
//          -- Channel name
//          -- Views, uploaded details
//          -- badge - Live
//      -- Menu
