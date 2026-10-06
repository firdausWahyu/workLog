import type { Ionicons } from "@expo/vector-icons";

export type IconName = keyof typeof Ionicons.glyphMap;

// Tombol menu di bagian bawah layar utama
export type MenuItem = {
  id: string;
  label: string;
  icon: IconName;
  color: string;
};