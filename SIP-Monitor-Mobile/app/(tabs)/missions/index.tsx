import React, { useCallback, useMemo } from 'react';
import { FlatList, ListRenderItem, Pressable, StyleSheet, Text, View, useColorScheme } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as Haptics from 'expo-haptics';

type Mission = {
  id: string;
  title: string;
  summary: string;
};

const placeholderMissions: Mission[] = [
  { id: '1', title: 'Misión Alfa', summary: 'Pendiente de información real.' },
  { id: '2', title: 'Misión Bravo', summary: 'Datos en preparación.' },
  { id: '3', title: 'Misión Charlie', summary: 'Contenido temporal.' },
  { id: '4', title: 'Misión Delta', summary: 'Se actualizará con detalles oficiales.' },
  { id: '5', title: 'Misión Eco', summary: 'Reemplazar con información productiva.' },
];

const MissionsScreen: React.FC = () => {
  const colorScheme = useColorScheme();

  const palette = useMemo(() => {
    const isDark = colorScheme === 'dark';
    return {
      background: isDark ? '#0f172a' : '#f1f5f9',
      border: isDark ? '#1f2937' : '#e2e8f0',
      cardBackground: isDark ? '#1f2937' : '#ffffff',
      cardText: isDark ? '#e2e8f0' : '#1f2937',
      cardSubtleText: isDark ? '#cbd5f5' : '#4b5563',
      emptyButton: isDark ? '#38bdf8' : '#2563eb',
      emptyButtonPressed: isDark ? '#0ea5e9' : '#1d4ed8',
      emptyButtonText: '#ffffff',
      title: isDark ? '#f8fafc' : '#111827',
    };
  }, [colorScheme]);

  const handleRefresh = useCallback(async () => {
    await Haptics.selectionAsync();
    // TODO: Integrate real refresh action when backend is available.
  }, []);

  const renderMission: ListRenderItem<Mission> = useCallback(
    ({ item }) => (
      <View
        accessible
        accessibilityLabel={`${item.title}. ${item.summary}`}
        accessibilityRole="text"
        style={[styles.card, { backgroundColor: palette.cardBackground, borderColor: palette.border }]}
      >
        <Text style={[styles.cardTitle, { color: palette.cardText }]}>{item.title}</Text>
        <Text style={[styles.cardSummary, { color: palette.cardSubtleText }]}>{item.summary}</Text>
      </View>
    ),
    [palette],
  );

  const missions = placeholderMissions;
  const isEmpty = missions.length === 0;

  return (
    <SafeAreaView
      edges={['top', 'left', 'right']}
      style={[styles.safeArea, { backgroundColor: palette.background }]}
    >
      <View style={styles.container}>
        <Text style={[styles.title, { color: palette.title }]}>Misiones</Text>
        {isEmpty ? (
          <View style={styles.emptyState}>
            <Text style={[styles.emptyTitle, { color: palette.cardText }]}>Sin misiones disponibles</Text>
            <Text style={[styles.emptySubtitle, { color: palette.cardSubtleText }]}>
              Revisá más tarde o intentá actualizar.
            </Text>
            <Pressable
              accessibilityHint="Volverá a intentar la carga de misiones"
              accessibilityLabel="Actualizar"
              accessibilityRole="button"
              onPress={handleRefresh}
              style={({ pressed }) => [
                styles.emptyButton,
                { backgroundColor: pressed ? palette.emptyButtonPressed : palette.emptyButton },
              ]}
            >
              <Text style={[styles.emptyButtonText, { color: palette.emptyButtonText }]}>Actualizar</Text>
            </Pressable>
          </View>
        ) : (
          <FlatList
            accessibilityRole="list"
            contentContainerStyle={styles.listContent}
            data={missions}
            ItemSeparatorComponent={() => <View style={styles.separator} />}
            keyExtractor={(item) => item.id}
            renderItem={renderMission}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 16,
    borderWidth: 1,
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  cardSummary: {
    fontSize: 14,
    lineHeight: 20,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 16,
  },
  emptyButton: {
    borderRadius: 999,
    minHeight: 48,
    minWidth: 160,
    paddingHorizontal: 28,
    paddingVertical: 12,
  },
  emptyButtonText: {
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
  emptyState: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  emptySubtitle: {
    fontSize: 16,
    marginBottom: 24,
    textAlign: 'center',
  },
  emptyTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 12,
    textAlign: 'center',
  },
  listContent: {
    paddingBottom: 24,
  },
  safeArea: {
    flex: 1,
  },
  separator: {
    height: 12,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 16,
    textAlign: 'center',
  },
});

export default MissionsScreen;
