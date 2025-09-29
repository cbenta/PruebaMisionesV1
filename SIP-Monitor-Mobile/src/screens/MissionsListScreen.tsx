import React, { useCallback } from 'react';
import { FlatList, ListRenderItem, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';

type MissionsListScreenProps = NativeStackScreenProps<RootStackParamList, 'Missions'>;

type MissionItem = {
  id: string;
  title: string;
  description: string;
};

const COLORS = {
  cardBackground: '#ffffff',
  containerBackground: '#f9fafb',
  primaryText: '#1f2937',
  secondaryText: '#4b5563',
  shadow: '#000000',
  titleText: '#111827',
};

const missions: MissionItem[] = [
  { id: '1', title: 'Misión Alfa', description: 'Placeholder sin datos reales.' },
  { id: '2', title: 'Misión Bravo', description: 'Información pendiente de cargar.' },
  { id: '3', title: 'Misión Charlie', description: 'Detalle aún no disponible.' },
  { id: '4', title: 'Misión Delta', description: 'Contenido temporal para pruebas.' },
  { id: '5', title: 'Misión Eco', description: 'Se reemplazará con datos reales.' },
];

const MissionsListScreen: React.FC<MissionsListScreenProps> = () => {
  const renderMission: ListRenderItem<MissionItem> = useCallback(
    ({ item }) => (
      <View style={styles.card}>
        <Text style={styles.cardTitle}>{item.title}</Text>
        <Text style={styles.cardDescription}>{item.description}</Text>
      </View>
    ),
    [],
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Misiones</Text>
      <FlatList
        accessibilityRole="list"
        contentContainerStyle={styles.listContent}
        data={missions}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        keyExtractor={(item) => item.id}
        renderItem={renderMission}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.cardBackground,
    borderRadius: 8,
    elevation: 2,
    padding: 16,
    shadowColor: COLORS.shadow,
    shadowOffset: { height: 1, width: 0 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  cardDescription: {
    color: COLORS.secondaryText,
    fontSize: 14,
  },
  cardTitle: {
    color: COLORS.primaryText,
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
  },
  container: {
    backgroundColor: COLORS.containerBackground,
    flex: 1,
    paddingHorizontal: 16,
  },
  listContent: {
    paddingBottom: 24,
  },
  separator: {
    height: 12,
  },
  title: {
    color: COLORS.titleText,
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 16,
    textAlign: 'center',
  },
});

export default MissionsListScreen;
