import { Game } from './game.interface';

export interface SlotsByProviders {
  type: string;
  provider: string;
  vendor: string;
  iframeW: number;
  iframeH: number;
  name: string;
  order: number;
  tags: string[];
  games: Game[];
  totalGames: number;
}
