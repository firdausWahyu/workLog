import { DarkTheme, DefaultTheme, Stack, ThemeProvider } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useColorScheme } from "react-native";

import { AnimatedSplashOverlay } from "@/components/animated-icon";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <AnimatedSplashOverlay />
        <Stack>
          <Stack.Screen name="index" options={{ headerShown: false }} />
          <Stack.Screen name="add" options={{ title: 'Tambah Log' }} />
          <Stack.Screen name="summary" options={{ title: 'Ringkasan' }} />
          <Stack.Screen name="settings" options={{ title: 'Pengaturan' }} />
          <Stack.Screen name="report" options={{ title: 'Laporan' }} />
        </Stack>
    </ThemeProvider>
  );
}
