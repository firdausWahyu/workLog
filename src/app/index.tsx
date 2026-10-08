import { DAY_NAMES, MONTH_NAMES } from "@/constants/calendar";
import { COLORS } from "@/constants/colors";
import { MENU_ITEMS } from "@/constants/menu";
import { getMonthCells } from "@/functions/calendar";
import { styles } from "@/styles/style";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function CalendarScreen() {
  // Ambil bulan & tanggal hari ini dari HP
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth();
  const today = now.getDate();

  const cells = getMonthCells(year, month);

  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>workLog</Text>

      {/* Kalender bulan ini */}
      <View style={styles.card}>
        <View style={styles.monthHeader}>
          <Ionicons name="chevron-back" size={24} color={COLORS.text} />
          <Text style={styles.monthTitle}>
            {MONTH_NAMES[month]} {year}
          </Text>
          <Ionicons name="chevron-forward" size={24} color={COLORS.text} />
        </View>

        {/* Nama hari */}
        <View style={styles.weekRow}>
          {DAY_NAMES.map((name) => (
            <Text key={name} style={styles.weekDayText}>
              {name}
            </Text>
          ))}
        </View>

        {/* Tanggal */}
        <View style={styles.calendarGrid}>
          {cells.map((day, index) => (
            <View key={index} style={styles.dayCell}>
              {day !== null && (
                <View
                  style={[
                    styles.dayCircle,
                    day === today && styles.dayCircleToday,
                  ]}
                >
                  <Text
                    style={[
                      styles.dayText,
                      day === today && styles.dayTextToday,
                    ]}
                  >
                    {day}
                  </Text>
                </View>
              )}
            </View>
          ))}
        </View>
      </View>

      {/* Ringkasan */}
        <View style={[styles.card, styles.summaryRow]}>
          <View style={styles.summaryItem}>
            <Text style={styles.label}>Total jam</Text>
            <Text style={styles.summaryText}>00:00:00</Text>
          </View>

          <View style={styles.summaryDivider} />

          <View style={styles.summaryItem}>
            <Text style={styles.label}>Total pendapatan</Text>
            <Text style={[styles.summaryText, { color: COLORS.play }]}>Rp 0</Text>
          </View>
        </View>

      <View style={{ height: 10 }} />

      {/* Menu Items*/}
      <View style={styles.menuRow}>
        {MENU_ITEMS.map((item) => (
          <TouchableOpacity 
          key={item.id} 
          style={styles.menuCard}
          onPress={() => {
            if (item.id === "summary") {
              router.push("/summary");
            }
            if (item.id === "report") {
               router.push("/report");
            }
            if (item.id === "settings") {
              router.push("/settings");
            }
          }}
          >
            <View
              style={[
                styles.menuIconCircle,
                { backgroundColor: `${item.color}1A` },
              ]}
            >
              <Ionicons name={item.icon} size={22} color={item.color} />
            </View>
            <Text style={styles.menuText}>{item.label}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity
        style={styles.fab}
        onPress={() => {
          router.push("/add");
        }}
      >
        <Ionicons name="add" size={28} color={COLORS.white} />
      </TouchableOpacity>
    </SafeAreaView>
  );
}
