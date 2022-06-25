import * as React from "react";
import { Giphy } from "./types";

interface SearchListProlps {
  list: Giphy[];
}
export const SearchResults = ({ list }: SearchListProlps) => {
  if (!list) return null;

  return (
    <div>
      <p>SearchResults</p>
      <div>
        <ul>
          {list.map((l) => (
            <div key={l.title}>
              <li>{l.title}</li>
              <li>
                <img alt={l.title} src={l.images.downsized.url}></img>
              </li>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};
