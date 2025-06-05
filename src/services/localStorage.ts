import { RecentChange } from '../types/IRecentChange';

export const saveRecentChange = (change: RecentChange) => {
  const existing = JSON.parse(localStorage.getItem('recentChanges') || '[]') as RecentChange[];
  const updated = [change, ...existing].slice(0, 15); // solo los últimos 5 cambios
  localStorage.setItem('recentChanges', JSON.stringify(updated));
};

export const getRecentChanges = (): RecentChange[] => {
  return JSON.parse(localStorage.getItem('recentChanges') || '[]');
};
