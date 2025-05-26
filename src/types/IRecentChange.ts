export interface RecentChange {
  type: 'Persona' | 'Proyecto' | 'Dirección';
  action: 'Añadido/a' | 'Editado/a' | 'Eliminado/a';
  name: string;
  timestamp: number;
}
