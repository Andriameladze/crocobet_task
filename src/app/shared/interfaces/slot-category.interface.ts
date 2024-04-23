import { Game } from './game.interface';

export interface SlotCategory {
  type: string;
  category: string;
  group: string;
  platform: string;
  name: string;
  order: number;
  games: Game[];
  totalGames: number;
}
