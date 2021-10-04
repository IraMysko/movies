export type Movie = {
  id: number;
  title: string;
  year: number;
  format: string;
  actors: Actor[];
};

export type Movies = Movie[];

export type Actor = {
  id: number;
  name: string;
  createdAt?: string;
  updatedAt?: string;
};

export type Values = {
  actors: string;
  format: string;
  title: string;
  year: number;
};
