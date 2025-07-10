export interface Person {
  id: number;
  name: string;
  age: number;
  addressIds: number[] | null;
  streets: string[];
  cities: string[];
  projectIds: number[] | null;
  projectNames: string[];
}
