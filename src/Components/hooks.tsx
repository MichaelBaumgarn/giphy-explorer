import React from "react";
import { Giphy } from "./types";

export const useGiphyList = (offSet: number = 0, query: string): Giphy[] => {
  const [list, setList] = React.useState<Giphy[]>([]);
  React.useEffect(() => {
    const getList = async () => {
      let freshList = await fetch(
        `https://api.giphy.com/v1/gifs/trending?api_key=tVaJe9QRTL6VZp9xhBkogbNWFTI9hYnJ&limit=10&offset=${offSet}`
      );
      if (freshList.ok) {
        let res = await freshList.json();
        setList(res.data);
      }
    };
    if (!query) {
      getList();
    }
  }, [offSet]);
  return list;
};
