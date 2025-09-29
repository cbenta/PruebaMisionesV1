import React, { useMemo } from 'react';
import { useColorScheme } from 'react-native';
import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

type TabName = 'index' | 'missions/index';

type IconConfig = {
  focused: keyof typeof Ionicons.glyphMap;
  unfocused: keyof typeof Ionicons.glyphMap;
};

const ICONS: Record<TabName, IconConfig> = {
  index: {
    focused: 'home',
    unfocused: 'home-outline',
  },
  'missions/index': {
    focused: 'list',
    unfocused: 'list-outline',
  },
};

const TabLayout: React.FC = () => {
  const colorScheme = useColorScheme();

  const palette = useMemo(() => {
    const isDark = colorScheme === 'dark';
    return {
      active: isDark ? '#a3d8ff' : '#2563eb',
      inactive: isDark ? '#9ca3af' : '#6b7280',
      background: isDark ? '#111827' : '#ffffff',
      border: isDark ? '#1f2937' : '#e5e7eb',
    };
  }, [colorScheme]);

  return (
    <Tabs
      screenOptions={({ route }) => {
        const tabRoute = route.name as TabName;
        const icon = ICONS[tabRoute];
        return {
          headerShown: false,
          tabBarActiveTintColor: palette.active,
          tabBarInactiveTintColor: palette.inactive,
          tabBarStyle: {
            backgroundColor: palette.background,
            borderTopColor: palette.border,
            height: 64,
            paddingBottom: 8,
            paddingTop: 8,
          },
          tabBarItemStyle: {
            minHeight: 44,
            paddingVertical: 4,
          },
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: '600',
          },
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name={focused ? icon.focused : icon.unfocused}
              size={size}
              color={color}
              accessibilityElementsHidden
              focusable={false}
              importantForAccessibility="no"
            />
          ),
          tabBarAccessibilityLabel:
            tabRoute === 'index' ? 'Ir a Inicio' : 'Ir a Misiones',
        };
      }}
    >
      <Tabs.Screen name="index" options={{ title: 'Inicio' }} />
      <Tabs.Screen name="missions/index" options={{ title: 'Misiones' }} />
    </Tabs>
  );
};

export default TabLayout;
