import "./App.css";
import { SearchResults } from "./Components/SearchResults";
import { Search } from "./Components/Search";
import { useGiphyList } from "./Components/hooks";
import { useEffect, useState } from "react";
import { ChakraProvider, Container } from "@chakra-ui/react";

type PaginationType = {
  total_count: number;
  count: number;
  offset: number;
};
function App() {
  const [pagination, setPagination] = useState<PaginationType>({
    total_count: 20,
    count: 0,
    offset: 0,
  });
  const [query, setQuery] = useState("");
  const list = useGiphyList(pagination.offset, query);
  useEffect(() => {
    setSearchResults((currentResults) => [...currentResults, ...list]);
  }, [list]);

  const [searchResults, setSearchResults] = useState(list);
  const getList = async (query: string, offSet: number = 0) => {
    if (pagination?.total_count > offSet + 10) {
      console.log("end reached");
    }
    let freshList = await fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=tVaJe9QRTL6VZp9xhBkogbNWFTI9hYnJ&limit=10&q=${query}&offset=${offSet}`
    );
    if (freshList.ok) {
      let res = await freshList.json();
      console.log(res);
      const { pagination, data } = res;
      setPagination(pagination);
      setSearchResults((currentResults) => [...currentResults, ...data]);
    }
  };
  const handleSubmitSearch = (q: string) => {
    setQuery(q);
    setSearchResults([]);
    getList(q);
  };
  const handleLoadMore = (offSet: number) => {
    if (query) {
      getList(query, offSet);
    } else {
      setPagination((prevPagination) => {
        return { ...prevPagination, offset: offSet };
      });
    }
  };

  return (
    <ChakraProvider>
      <div className="App">
        <Container>
          <Search onSubmit={handleSubmitSearch}></Search>
          {searchResults && (
            <SearchResults
              list={searchResults}
              onLoadMore={handleLoadMore}
            ></SearchResults>
          )}
        </Container>
      </div>
    </ChakraProvider>
  );
}

export default App;
