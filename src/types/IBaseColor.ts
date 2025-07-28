export interface BaseColor {
  id: number;
  color: string;
  onUse: boolean;
  userId: number | undefined;
  userName: string | undefined;
}