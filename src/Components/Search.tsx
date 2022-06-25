import { useState } from "react";

interface SearchProps {
  onSubmit: (q: string) => void;
}
export const Search = ({ onSubmit }: SearchProps) => {
  const [search, setSearch] = useState("");
  return (
    <div>
      <input onChange={(e) => setSearch(e.target.value)} value={search}></input>
      <button onClick={() => onSubmit(search)}>Search for {search}</button>
    </div>
  );
};
