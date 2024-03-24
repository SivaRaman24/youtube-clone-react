/* eslint-disable jsx-a11y/role-has-required-aria-props */
const SearchSuggestionList = ({
  suggestions,
  showSuggestions,
  setShowSuggestions,
  setSearchQuery,
}) => {
//   showSuggestions = true;
  if (!suggestions.length || !showSuggestions) return;

  const handleOptionClick = (e) => {
    // Actually we need to redirect the user to results page with search_query
    // Ex: https://www.youtube.com/results?search_query=angular+best+tutorial
    
    e.stopPropagation(); // TODO: Fix this event delegation issue
    setSearchQuery(e.target.innerText);
    setShowSuggestions(false);
  };

  return (
    <div className="suggestions-container fixed bg-white border border-gray-500 rounded-2xl mt-[2.65rem] pt-4 pb-2 w-[640px]">
      <ul role="listbox" onClick={handleOptionClick}>
        {suggestions.map((suggestion, index) => {
          return (
            <li
              key={index}
              className="pl-3 pr-6 py-1 hover:bg-gray-100 cursor-pointer"
              role="presentation"
            >
              <div
                className="before:content-search before:h-5 before:w-5 before:mr-2 flex items-center"
                role="option"
              >
                <b className="font-medium">{suggestion[0]}</b>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SearchSuggestionList;
