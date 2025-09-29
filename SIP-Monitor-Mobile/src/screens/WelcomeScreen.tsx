import React, { useCallback } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';

const COLORS = {
  background: '#ffffff',
  buttonBackground: '#2563eb',
  buttonText: '#ffffff',
  primaryText: '#111827',
  secondaryText: '#4b5563',
};

type WelcomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Welcome'>;

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ navigation }) => {
  const handleGoToMissions = useCallback(() => {
    navigation.navigate('Missions');
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>SIP Monitor Mobile</Text>
        <Text style={styles.subtitle}>Bienvenido</Text>
        <Pressable
          accessibilityLabel="Ir a Misiones"
          accessibilityRole="button"
          onPress={handleGoToMissions}
          style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]}
        >
          <Text style={styles.buttonText}>Ir a Misiones</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: COLORS.buttonBackground,
    borderRadius: 8,
    paddingHorizontal: 32,
    paddingVertical: 14,
  },
  buttonPressed: {
    opacity: 0.85,
  },
  buttonText: {
    color: COLORS.buttonText,
    fontSize: 16,
    fontWeight: '600',
  },
  container: {
    backgroundColor: COLORS.background,
    flex: 1,
  },
  content: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  subtitle: {
    color: COLORS.secondaryText,
    fontSize: 18,
    marginBottom: 32,
  },
  title: {
    color: COLORS.primaryText,
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 16,
  },
});

export default WelcomeScreen;
