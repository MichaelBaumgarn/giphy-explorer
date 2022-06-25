import React from "react";
import { Giphy } from "./types";

export const useGiphyList = (): Giphy[] => {
  const [list, setList] = React.useState<Giphy[]>([]);
  React.useEffect(() => {
    const getList = async () => {
      let freshList = await fetch(
        "https://api.giphy.com/v1/gifs/trending?api_key=tVaJe9QRTL6VZp9xhBkogbNWFTI9hYnJ&limit=10"
      );
      if (freshList.ok) {
        let res = await freshList.json();
        setList(res.data);
      }
    };
    getList();
  }, []);
  return list;
};
