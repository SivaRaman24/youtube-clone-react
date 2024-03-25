import { useState, useEffect } from "react";
import SearchSuggestionList from "./SearchSuggestionList";
import { YOUTUBE_SUGGESTION_API } from "../constants/Config";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const initialSuggestions = [];
  const [searchSuggestions, setSearchSuggestions] =
    useState(initialSuggestions);
  const [showSuggestions, setShowSuggestions] = useState(false);

  useEffect(() => {
    const delayTimer = setTimeout(() => {
      getSuggestions(searchQuery);
    }, 200);

    return () => {
      clearTimeout(delayTimer);
    };
  }, [searchQuery]);

  const getSuggestions = async (searchQuery) => {
    // Call suggestions API
    if (searchQuery === "") {
      // In feature we can show search history when on-focus
      setSearchSuggestions(initialSuggestions);
      return;
    }

    const data = await fetch(YOUTUBE_SUGGESTION_API + searchQuery);
    const str = await data.text();
    const suggestions = JSON.parse(
      str.substring(str.indexOf("["), str.indexOf("])") + 1)
    );
    if (suggestions.length > 0) {
      setSearchSuggestions(suggestions[1]);
    }
  };

  const handleOnInputChangeEvent = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <header className="flex flex-column justify-between items-center px-4 w-full">
      <div className="left-side-content flex w-1/4">
        <picture className="p-2 hover:bg-gray-200 rounded-full cursor-pointer">
          <source
            srcSet={process.env.PUBLIC_URL + "/svgs_collection/hamburger.svg"}
          ></source>
          <img
            src={process.env.PUBLIC_URL + "/svgs_collection/hamburger.svg"}
            alt="Hamburger menu"
            className="w-6 h-6"
          />
        </picture>
        <picture className="p-2 cursor-pointer">
          <source
            srcSet={process.env.PUBLIC_URL + "/svgs_collection/youtube.svg"}
          ></source>
          <img
            src={process.env.PUBLIC_URL + "/svgs_collection/youtube.svg"}
            alt="youtube logo"
            className="w-28"
          />
        </picture>
      </div>
      <div className="center-content p-2 flex w-2/4">
        <form className="flex">
          <div id="search-input">
            <input
              className="pl-4 pr-1 py-2 w-[640px] border border-gray-500 rounded-l-full"
              type="text"
              value={searchQuery}
              placeholder="Search"
              name="search_query"
              autoCapitalize="none"
              autoComplete="off"
              autoCorrect="off"
              tabIndex={0}
              aria-label="Search"
              aria-autocomplete="list"
              onChange={(e) => {
                handleOnInputChangeEvent(e);
              }}
              onFocus={() => {
                setShowSuggestions(true);
              }}
              //TODO: Need to fix this event delegation issue (event.stopPropagation is not working on child component)
              // onBlur={() => { console.log('onBlur'); setShowSuggestions(false); }}
            ></input>
          </div>
          <div>
            <button
              type="submit"
              className="border-y border-r border-gray-500 p-2 rounded-r-full"
            >
              <img
                src={
                  process.env.PUBLIC_URL + "/svgs_collection/search-thin.svg"
                }
                alt="Search"
                className="w-6 h-6"
              />
            </button>
          </div>
          <SearchSuggestionList
            suggestions={searchSuggestions}
            showSuggestions={showSuggestions}
            setShowSuggestions={setShowSuggestions}
            setSearchQuery={setSearchQuery}
          />
        </form>
        <div
          id="voice-input"
          className="p-2 ml-5 hover:bg-gray-200 rounded-full cursor-pointer"
        >
          <picture>
            <source
              srcSet={
                process.env.PUBLIC_URL + "/svgs_collection/voice-search.svg"
              }
            ></source>
            <img
              src={process.env.PUBLIC_URL + "/svgs_collection/voice-search.svg"}
              alt="Search with your voice"
              className="h-6 w-6"
            />
          </picture>
        </div>
      </div>
      <div className="right-side-content flex justify-end space-x-5 w-1/4">
        <picture className="p-2 hover:bg-gray-200 rounded-full cursor-pointer">
          <source
            srcSet={
              process.env.PUBLIC_URL + "/svgs_collection/create-video.svg"
            }
          ></source>
          <img
            src={process.env.PUBLIC_URL + "/svgs_collection/create-video.svg"}
            alt="Create"
            className="h-6 w-6"
          />
        </picture>
        <picture className="p-2 hover:bg-gray-200 rounded-full cursor-pointer">
          <source
            srcSet={
              process.env.PUBLIC_URL + "/svgs_collection/notification.svg"
            }
          ></source>
          <img
            src={process.env.PUBLIC_URL + "/svgs_collection/notification.svg"}
            alt="Create"
            className="h-6 w-6"
          />
        </picture>
        <picture>
          <img
            id="img"
            draggable="false"
            className="m-1 h-8 w-8 rounded-full cursor-pointer"
            alt="User Avatar"
            src="https://yt3.ggpht.com/yti/ANjgQV9FtfcCMGtFVJ3nSNpa8e51y9CKDoY5nQ_dpb7QTw=s88-c-k-c0x00ffffff-no-rj"
          ></img>
        </picture>
      </div>
    </header>
  );
};

export default Header;
