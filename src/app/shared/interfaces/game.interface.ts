export interface Game {
  game_id: string;
  name: string;
  provider: string;
  providerName: string;
  hasLargeImage: boolean;
  image: string;
  imageSet: ImageSet;
  url: string;
  order: number;
  tags: string[];
  stats: any[];
  favoriteCount: number;
  gameId: string;
  image2: string;
}

export interface ImageSet {
  blurhash: string;
  original: string;
  webp: string;
}
