import React, { useCallback, useMemo } from 'react';
import { Pressable, StyleSheet, Text, View, useColorScheme } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as Haptics from 'expo-haptics';
import { router } from 'expo-router';

const HomeScreen: React.FC = () => {
  const colorScheme = useColorScheme();

  const palette = useMemo(() => {
    const isDark = colorScheme === 'dark';
    return {
      background: isDark ? '#0f172a' : '#f8fafc',
      buttonBackground: isDark ? '#38bdf8' : '#2563eb',
      buttonPressed: isDark ? '#0ea5e9' : '#1d4ed8',
      buttonText: '#ffffff',
      subtitle: isDark ? '#cbd5f5' : '#4b5563',
      title: isDark ? '#f8fafc' : '#111827',
    };
  }, [colorScheme]);

  const handleNavigate = useCallback(async () => {
    await Haptics.selectionAsync();
    router.push('/missions');
  }, []);

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: palette.background }]}
      edges={['top', 'left', 'right']}
    >
      <View style={styles.container}>
        <Text style={[styles.title, { color: palette.title }]}>SIP Monitor Mobile</Text>
        <Text style={[styles.subtitle, { color: palette.subtitle }]}>Bienvenido</Text>
        <Pressable
          accessibilityHint="Abre la pestaña de misiones"
          accessibilityLabel="Ir a Misiones"
          accessibilityRole="button"
          onPress={handleNavigate}
          style={({ pressed }) => [
            styles.button,
            { backgroundColor: pressed ? palette.buttonPressed : palette.buttonBackground },
          ]}
        >
          <Text style={[styles.buttonText, { color: palette.buttonText }]}>Ir a Misiones</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 12,
    minHeight: 48,
    minWidth: 200,
    paddingHorizontal: 28,
    paddingVertical: 14,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
  },
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  safeArea: {
    flex: 1,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 32,
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    marginBottom: 16,
    textAlign: 'center',
  },
});

export default HomeScreen;
