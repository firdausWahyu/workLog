import { RadioOption } from "@/components/radio-option";
import { SectionHeader } from "@/components/section-header";
import { SUMMARY_STATS, DETAIL_STATS  } from "@/constants/summary";
import { styles } from "@/styles/style";
import { StatItem } from "@/types";
import { Ionicons } from "@expo/vector-icons";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SummaryScreen() {
  return (
    <SafeAreaView style={styles.container} edges={["bottom", "left", "right"]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Pilihan periode */}
        <View style={styles.card}>
          <RadioOption label="Ringkasan bulan ini" selected={true} />
          <RadioOption label="Kustom Tanggal" selected={false} />
        </View>

        {/* Kartu statistik */}
        <View style={styles.card}>
          <SectionHeader title="Ringkasan Utama" />
          <StatGrid stats={SUMMARY_STATS} />
        </View>

        {/* Detail ringkasan */}
        <View style={styles.card}>
          <SectionHeader title="Detail Ringkasan" icon="settings-outline" />
          <StatGrid stats={DETAIL_STATS} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );

  function StatGrid({ stats }: { stats: StatItem[] }) {
  return (
    <View style={styles.statGrid}>
      {stats.map((stat) => (
        <View
          key={stat.id}
          style={[styles.statCard, stat.fullWidth && styles.statCardFull]}
        >
          <View
            style={[
              styles.statIconCircle,
              { backgroundColor: `${stat.color}1A` },
            ]}
          >
            <Ionicons name={stat.icon} size={20} color={stat.color} />
          </View>
          <Text style={styles.label}>{stat.label}</Text>
          <Text style={styles.statValue}>{stat.value}</Text>
        </View>
      ))}
    </View>
  );
}
}
