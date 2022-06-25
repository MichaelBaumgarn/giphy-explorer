import * as React from "react";

type Giphy = {
  title: string;
  embed_url: string;
  images: GiphyImage;
};

type GiphyImage = {
  downsized: { url: string };
};
const useGiphyList = (): Giphy[] => {
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

export const SearchResults: React.FC<{}> = () => {
  const list = useGiphyList();
  console.log(list);

  return (
    <div>
      <p>SearchResults</p>;
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
