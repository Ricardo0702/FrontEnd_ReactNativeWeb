import React, { useEffect, useRef } from 'react';
import { View, Animated, StyleSheet, AccessibilityProps } from 'react-native';

export interface LoadingSpinnerProps {
  size?: number;
  color?: string;
}

export const LoadingSpinner: React.FC<LoadingSpinnerProps & AccessibilityProps> = ({
  size = 40,
  color = '#3498db',
  accessibilityLabel = 'Loading',
}) => {
  const scale1 = useRef(new Animated.Value(0)).current;
  const scale2 = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const animate = (anim: Animated.Value, delay: number) =>
      Animated.loop(
        Animated.sequence([
          Animated.timing(anim, {
            toValue: 1,
            duration: 1000,
            delay,
            useNativeDriver: true,
          }),
          Animated.timing(anim, {
            toValue: 0,
            duration: 1000,
            useNativeDriver: true,
          }),
        ]),
      );

    const anim1 = animate(scale1, 0);
    const anim2 = animate(scale2, 1000);

    anim1.start();
    anim2.start();

    return () => {
      anim1.stop();
      anim2.stop();
    };
  }, [scale1, scale2]);

  return (
    <View style={[styles.container, { width: size, height: size }]} accessibilityRole="progressbar" accessibilityLabel={accessibilityLabel}>
      <Animated.View
        style={[
          styles.circle,
          {
            width: size,
            height: size,
            borderRadius: size / 2,
            backgroundColor: color,
            opacity: 0.6,
            transform: [{ scale: scale1 }],
          },
        ]}
      />
      <Animated.View
        style={[
          styles.circle,
          {
            width: size,
            height: size,
            borderRadius: size / 2,
            backgroundColor: color,
            opacity: 0.6,
            transform: [{ scale: scale2 }],
          },
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    marginVertical: 20,
  },
  circle: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
});

export default LoadingSpinner;
