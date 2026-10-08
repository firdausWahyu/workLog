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

  // Form (add screen)
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: COLORS.text,
  },
  toggleRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  toggleText: {
    fontSize: 14,
    color: COLORS.text,
  },
  fieldWrapper: {
    marginBottom: 12,
  },
  fieldRow: {
    flexDirection: "row",
    gap: 12,
  },
  fieldCol: {
    flex: 1,
  },
  input: {
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 15,
    color: COLORS.text,
    backgroundColor: COLORS.background,
  },
  inputMultiline: {
    height: 90,
    textAlignVertical: "top",
  },

  // Pekerjaan
  jobBox: {
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
  },
  jobHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  jobTitle: {
    fontSize: 15,
    fontWeight: "600",
    color: COLORS.text,
  },
  addJobButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
    paddingVertical: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderStyle: "dashed",
    borderColor: COLORS.primary,
  },
  addJobText: {
    color: COLORS.primary,
    fontWeight: "600",
  },

  // Pilih warna
  colorRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
  },
  colorSwatch: {
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: "center",
    justifyContent: "center",
  },
  colorSwatchSelected: {
    borderWidth: 3,
    borderColor: COLORS.text,
  },

  // Tombol simpan
  saveButton: {
    backgroundColor: COLORS.primary,
    borderRadius: 16,
    paddingVertical: 16,
    alignItems: "center",
    marginBottom: 24,
  },
  saveText: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: "700",
  },
    // Radio option
  radioRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 10,
  },
  radioText: {
    fontSize: 15,
    color: COLORS.text,
  },
  radioTextSelected: {
    fontWeight: "700",
  },

  // Kartu statistik
  statGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
    marginBottom: 24,
  },
  statCard: {
    flexGrow: 1,
    flexBasis: "45%",
    backgroundColor: COLORS.card,
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  statCardFull: {
    flexBasis: "100%",
  },
  statIconCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 12,
  },
  statValue: {
    fontSize: 20,
    fontWeight: "700",
    color: COLORS.text,
  },
    // Pengaturan
  settingRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  settingIconCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  settingLabel: {
    flex: 1,
    fontSize: 15,
    fontWeight: "600",
    color: COLORS.text,
  },
  themeControl: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
    // Laporan
  rangeRow: {
    flexDirection: "row",
    gap: 12,
    marginBottom: 12,
  },
  rangeButton: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 14,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: COLORS.border,
    backgroundColor: COLORS.background,
  },
  rangeButtonSelected: {
    backgroundColor: COLORS.primary,
    borderColor: COLORS.primary,
  },
  rangeText: {
    fontSize: 14,
    fontWeight: "600",
    color: COLORS.text,
  },
  rangeTextSelected: {
    color: COLORS.white,
  },
    // Checkbox
  checkItem: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    paddingVertical: 4,
  },
  checkText: {
    fontSize: 14,
    color: COLORS.text,
  },
});
