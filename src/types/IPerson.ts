export interface IPerson {
  id: number;
  name: string;
  age: number;
  directionIds: number[];
  streets: string[];
  cities: string[];
  projectIds: number[] | null;
  projectNames: string[];
}
