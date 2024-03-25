const MiniSideNav = () => {
  return (
    <nav className="side-nav">
      <div id="sections">
        <ul>
          <li className="hover:bg-slate-100 rounded-lg">
            <a href="/" className="flex flex-col justify-center items-center pt-4 pb-[12px]">
              <img
                src={process.env.PUBLIC_URL + "/svgs_collection/home-icon.svg"}
                alt="Home link"
                className="w-6"
              />
              <span className="text-[10px]">Home</span>
            </a>
          </li>
          <li className="hover:bg-slate-200 rounded-lg">
            <a href="/" className="flex flex-col justify-center items-center pt-4 pb-[12px]">
              <img
                src={
                  process.env.PUBLIC_URL + "/svgs_collection/shorts-icon.svg"
                }
                alt="Home link"
                className="w-6"
              />
              <span className="text-[10px]">Shorts</span>
            </a>
          </li>
          <li className="hover:bg-slate-200 rounded-lg">
            <a href="/" className="flex flex-col justify-center items-center pt-4 pb-[12px]">
              <img
                src={
                  process.env.PUBLIC_URL +
                  "/svgs_collection/subscriptions-icon.svg"
                }
                alt="Home link"
                className="w-6"
              />
              <span className="text-[10px]">Subscriptions</span>
            </a>
          </li>
          <li className="hover:bg-slate-200 rounded-lg text-center">
            <a href="/" className="flex flex-col justify-center items-center pt-4 pb-[12px]">
              <img
                src={
                  process.env.PUBLIC_URL + "/svgs_collection/yt-music-icon.svg"
                }
                alt="Home link"
                className="w-6"
              />
              <span className="text-[10px]">YouTube Music</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default MiniSideNav;
