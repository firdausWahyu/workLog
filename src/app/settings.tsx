import { View, Text, ScrollView, Switch, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "@/styles/style";
import { COLORS, SETTING_COLORS } from "@/constants/colors";

export default function SettingsScreen() {
  return (
    <SafeAreaView style={styles.container} edges={["bottom", "left", "right"]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        
        {/* Ganti pengguna */}
        <View style={styles.card}>
          <TouchableOpacity style={styles.settingRow}>
            <View
              style={[
                styles.settingIconCircle,
                { backgroundColor: `${SETTING_COLORS.user}1A` },
              ]}
            >
              <Ionicons
                name="person-circle-outline"
                size={20}
                color={SETTING_COLORS.user}
              />
            </View>
            <Text style={styles.settingLabel}>Ganti Pengguna</Text>
            <Ionicons
              name="chevron-forward"
              size={20}
              color={COLORS.textMuted}
            />
          </TouchableOpacity>
        </View>

        {/* Ganti tema */}
        <View style={styles.card}>
          <View style={styles.settingRow}>
            <View
              style={[
                styles.settingIconCircle,
                { backgroundColor: `${SETTING_COLORS.theme}1A` },
              ]}
            >
              <Ionicons
                name="contrast-outline"
                size={20}
                color={SETTING_COLORS.theme}
              />
            </View>
            <Text style={styles.settingLabel}>Ganti Tema</Text>

            <View style={styles.themeControl}>
              <Ionicons name="sunny-outline" size={18} color={COLORS.textMuted} />
              <Switch value={false} trackColor={{ true: COLORS.primary }} />
              <Ionicons name="moon-outline" size={18} color={COLORS.textMuted} />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}