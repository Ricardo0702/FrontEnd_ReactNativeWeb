export interface RecentChange {
  type: 'Persona' | 'Proyecto' | 'Dirección' | string;
  action: 'Añadido/a' | 'Editado/a' | 'Eliminado/a' | string;
  name: string;
  timestamp: number;
}
