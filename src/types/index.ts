import type { Ionicons } from "@expo/vector-icons";

export type IconName = keyof typeof Ionicons.glyphMap;

// Tombol menu di bagian bawah layar utama
export type MenuItem = {
  id: string;
  label: string;
  icon: IconName;
  color: string;
};

// Kartu statistik di layar Summary
export type StatItem = {
  id: string;
  label: string;
  value: string;
  icon: IconName;
  color: string;
  fullWidth?: boolean;
};

// Report
export type Report = {
  
}
