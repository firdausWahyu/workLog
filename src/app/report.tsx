import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { COLORS } from "@/constants/colors";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "@/styles/style";
import { REPORT_RANGES, REPORT_FIELDS  } from "@/constants/report";
import { SectionHeader } from "@/components/section-header";

export default function ReportScreen() {
  const selected = "Minggu ini";
  const checked = ["Total jam", "Total pendapatan"];
  return (
    <SafeAreaView style={styles.container} edges={["bottom", "left", "right"]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Rentang tanggal */}
        <View style={styles.card}>
          <SectionHeader title="Rentang Tanggal" />

          {REPORT_RANGES.map((row, rowIndex) => (
            <View key={rowIndex} style={styles.rangeRow}>
              {row.map((label) => (
                <TouchableOpacity
                  key={label}
                  style={[
                    styles.rangeButton,
                    label === selected && styles.rangeButtonSelected,
                  ]}
                >
                  <Text
                    style={[
                      styles.rangeText,
                      label === selected && styles.rangeTextSelected,
                    ]}
                  >
                    {label}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          ))}
        </View>

        {/* Sertakan ke dalam laporan pengisian */}
        <View style={styles.card}>
          <SectionHeader title="Sertakan ke dalam laporan pengisian"  icon="settings-outline"/>

          {REPORT_FIELDS.map((row, rowIndex) => (
            <View key={rowIndex} style={styles.rangeRow}>
              {row.map((label) => {
                const isChecked = checked.includes(label);
                return (
                  <TouchableOpacity key={label} style={styles.checkItem}>
                    <Ionicons
                      name={isChecked ? "checkbox" : "square-outline"}
                      size={22}
                      color={isChecked ? COLORS.primary : COLORS.textMuted}
                    />
                    <Text style={styles.checkText}>{label}</Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          ))}
        </View>

        {/* Tombol buat catatan */}
        <TouchableOpacity style={styles.saveButton}>
          <Text style={styles.saveText}>Buat Catatan</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}