import type { StatItem } from "@/types";
import { STAT_COLORS } from "@/constants/colors";

// Nilainya masih contoh tetap, nanti diganti hasil hitungan
export const SUMMARY_STATS: StatItem[] = [
  { id: "days", label: "Total Hari", value: "0", icon: "calendar-outline", color: STAT_COLORS.days },
  { id: "hours", label: "Total Jam", value: "00:00", icon: "time-outline", color: STAT_COLORS.hours },
  { id: "earning", label: "Pendapatan", value: "Rp 0", icon: "cash-outline", color: STAT_COLORS.earning },
  { id: "yearEarning", label: "Pendapatan Tahun Ini", value: "Rp 0", icon: "trending-up-outline", color: STAT_COLORS.yearEarning },
];
export const DETAIL_STATS: StatItem[] = [
  { id: "tax", label: "Pajak", value: "Rp 0", icon: "receipt-outline", color: STAT_COLORS.tax, fullWidth: true },
];