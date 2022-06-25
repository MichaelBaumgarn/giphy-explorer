export type Giphy = {
  title: string;
  embed_url: string;
  images: GiphyImage;
};

export type GiphyImage = {
  downsized: { url: string };
};
