// Warna umum aplikasi
export const COLORS = {
  background: "#F8FAFC",
  card: "#FFFFFF",
  border: "#E2E8F0",
  text: "#0F172A",
  textMuted: "#64748B",
  primary: "#4F46E5",
  white: "#FFFFFF",
  play: "#10B981", // hijau
  pause: "#F59E0B", // kuning
  stop: "#EF4444", // merah
} as const;

// Warna tiap kategori aktivitas
export const CATEGORY_COLORS = {
  coding: "#4F46E5",
  design: "#EC4899",
  meeting: "#F59E0B",
  bugfix: "#EF4444",
} as const;

// Warna tiap proyek
export const PROJECT_COLORS = {
  alpha: "#0EA5E9",
  skripsi: "#10B981",
  clientA: "#8B5CF6",
} as const;

// Warna tombol menu bawah
export const MENU_COLORS = {
  summary: "#0EA5E9",
  report: "#10B981",
  settings: "#64748B",
} as const;