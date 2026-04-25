import SearchIcon from "./SearchIcon";

function SearchButton() {
  return (
    <button className="p-2 rounded-full hover:bg-[#F6F5F4] transition">
      <SearchIcon />
    </button>
  );
}

export default SearchButton;