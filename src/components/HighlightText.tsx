import React from 'react';
import { Text } from 'react-native';

export function highlightText(text: string, query?: string): React.ReactNode {
  if (typeof query !== 'string' || typeof text !== 'string' || !query.trim()) {
    return <Text>{text}</Text>;
  }

  const escapedQuery = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const regex = new RegExp(`(${escapedQuery})`, 'gi');
  const parts = text.split(regex);

  return (
    <Text>
      {parts.map((part, i) =>
        part.toLowerCase() === query.toLowerCase() ? (
          <Text key={i} style={{ backgroundColor: 'yellow' }}>
            {part}
          </Text>
        ) : (
          <Text key={i}>{part}</Text>
        ),
      )}
    </Text>
  );
}
