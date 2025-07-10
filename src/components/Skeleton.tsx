import React, { useEffect, useRef } from 'react';
import { View, Animated, StyleSheet, ViewStyle } from 'react-native';

export interface SkeletonProps {
  width?: number | string;
  height?: number;
  circle?: boolean;
  style?: ViewStyle;
}

export const Skeleton: React.FC<SkeletonProps> = ({ width, height = 20, circle = false, style = {} }) => {
  const shimmerAnim = useRef(new Animated.Value(-1)).current;
  const numericWidth = typeof width === 'number' ? width : 100;

  useEffect(() => {
    const loop = Animated.loop(
      Animated.timing(shimmerAnim, {
        toValue: 1,
        duration: 1500,
        useNativeDriver: true,
      }),
    );
    loop.start();

    return () => loop.stop();
  }, [shimmerAnim]);

  const translateX = shimmerAnim.interpolate({
    inputRange: [-1, 1],
    outputRange: [-numericWidth, numericWidth],
  });

  return (
    <View
      style={[
        styles.skeletonBase,
        style,
        {
          height,
          borderRadius: circle ? height / 2 : 4,
          overflow: 'hidden',
          ...(typeof width === 'number' ? { width } : { flex: 1 }),
        },
      ]}
      accessibilityState={{ busy: true }}
    >
      <Animated.View
        style={[
          styles.shimmer,
          {
            transform: [{ translateX }],
            height,
          },
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  skeletonBase: {
    backgroundColor: '#eee',
    position: 'relative',
  },
  shimmer: {
    flex: 1,
    width: '50%',
    backgroundColor: 'rgba(255,255,255,0.7)',
    opacity: 0.8,
  },
});
