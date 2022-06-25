import "./App.css";
import { SearchResults } from "./Components/SearchResults";
import { Search } from "./Components/Search";
import { useGiphyList } from "./Components/hooks";
import { Giphy } from "./Components/types";
import { useState } from "react";

function App() {
  const list = useGiphyList();
  const [searchResults, setSearchResults] = useState(list || []);
  const getList = async (q: string) => {
    let freshList = await fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=tVaJe9QRTL6VZp9xhBkogbNWFTI9hYnJ&limit=10&q=${q}`
    );
    if (freshList.ok) {
      let res = await freshList.json();
      setSearchResults(res.data);
    }
  };
  const handleSubmitSearch = (q: string) => {
    return getList(q);
  };
  return (
    <div className="App">
      <Search onSubmit={handleSubmitSearch}></Search>
      <SearchResults list={searchResults}></SearchResults>
    </div>
  );
}

export default App;
