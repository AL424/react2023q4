export interface FilmInfo {
  id: number;
  name: string;
  description?: string;
  year?: number;
  poster?: {
    url: string;
  };
}

export interface KinopoiskResp {
  docs: FilmInfo[];
  limit: number;
  page: number;
  pages: number;
  total: number;
}
