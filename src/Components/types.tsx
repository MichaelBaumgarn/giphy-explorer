export type Giphy = {
  title: string;
  embed_url: string;
  images: GiphyImage;
};

export type GiphyImage = {
  downsized_still: { url: string };
  downsized: { url: string };
  hd: { url: string };
  looping: { url: string };
  original: { url: string };
  original_mp4: { url: string };
  preview_gif: { url: string };
  preview_webp: { url: string };
};
