const NormalSideNav = () => {
  return (
    <nav className="side-nav">
      <div id="sections" className="p-3">
        <ul>
          <li className="px-2 py-1 hover:bg-slate-200 rounded-lg">
            <a href="/" className="flex flex-row items-center h-10">
              <img
                src={process.env.PUBLIC_URL + "/svgs_collection/home-icon.svg"}
                alt="Home link"
                className="w-6 mr-6"
              />
              <span>Home</span>
            </a>
          </li>
          <li className="px-2 py-1 hover:bg-slate-200 rounded-lg">
            <a href="/" className="flex flex-row items-center h-10">
              <img
                src={
                  process.env.PUBLIC_URL + "/svgs_collection/shorts-icon.svg"
                }
                alt="Home link"
                className="w-6 mr-6"
              />
              <span>Shorts</span>
            </a>
          </li>
          <li className="px-2 py-1 hover:bg-slate-200 rounded-lg">
            <a href="/" className="flex flex-row items-center h-10">
              <img
                src={
                  process.env.PUBLIC_URL +
                  "/svgs_collection/subscriptions-icon.svg"
                }
                alt="Home link"
                className="w-6 mr-6"
              />
              <span>Subscriptions</span>
            </a>
          </li>
          <li className="px-2 py-1 hover:bg-slate-200 rounded-lg">
            <a href="/" className="flex flex-row items-center h-10">
              <img
                src={
                  process.env.PUBLIC_URL + "/svgs_collection/yt-music-icon.svg"
                }
                alt="Home link"
                className="w-6 mr-6"
              />
              <span>YouTube Music</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NormalSideNav;
