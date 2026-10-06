import { COLORS } from "@/constants/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  // Layout dasar layar
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: "700",
    color: COLORS.text,
    marginBottom: 20,
  },

  // Kotak putih pembungkus isi (timer, pilihan proyek, dll.)
  card: {
    backgroundColor: COLORS.card,
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: COLORS.border,
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    color: COLORS.textMuted,
    marginBottom: 8,
  },
  // Kalender
  monthHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  monthTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: COLORS.text,
  },
  weekRow: {
    flexDirection: "row",
    marginBottom: 8,
  },
  weekDayText: {
    width: "14.2857%", // 100% dibagi 7 kolom
    textAlign: "center",
    fontSize: 12,
    color: COLORS.textMuted,
  },
  calendarGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  dayCell: {
    width: "14.2857%",
    height: 44,
    alignItems: "center",
    justifyContent: "center",
  },
  dayCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: "center",
    justifyContent: "center",
  },
  dayCircleToday: {
    backgroundColor: COLORS.primary,
  },
  dayText: {
    fontSize: 15,
    color: COLORS.text,
  },
  dayTextToday: {
    color: COLORS.white,
    fontWeight: "700",
  },
  summaryText: {
    fontSize: 22,
    fontWeight: "700",
    color: COLORS.text,
  },
  fab: {
    position: "absolute",
    right: 20,
    bottom: 25,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: COLORS.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  //Footer
  spacer: {
    flex: 1,
  },
  menuRow: {
    flexDirection: "row",
    gap: 12,
  },
  menuCard: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 16,
    borderRadius: 20,
    backgroundColor: COLORS.card,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  menuIconCircle: {
    width: 44,
    height: 44,
    borderRadius: 22,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 8,
  },
  menuText: {
    fontSize: 13,
    fontWeight: "600",
    color: COLORS.text,
  },
  summaryRow: {
    flexDirection: "row",
  },
  summaryItem: {
    flex: 1,
  },
  summaryDivider: {
    width: 1,
    backgroundColor: COLORS.border,
    marginHorizontal: 16,
  },
});
