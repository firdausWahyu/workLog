import { FormField } from "@/components/form-field";
import { SectionHeader } from "@/components/section-header";
import { COLORS, LOG_COLORS } from "@/constants/colors";
import { styles } from "@/styles/style";
import { Ionicons } from "@expo/vector-icons";
import { Stack } from "expo-router";
import { ScrollView, Switch, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function AddScreen() {
  return (
    <SafeAreaView style={styles.container} edges={["bottom", "left", "right"]}>
      {/* Judul di header atas */}
      <Stack.Screen options={{ title: "Tambah Log" }} />

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Tanggal */}
        <View style={styles.card}>
          <SectionHeader title="Tanggal" />
          <View style={styles.toggleRow}>
            <Text style={styles.toggleText}>Tambah lebih dari 1 hari</Text>
            <Switch value={false} trackColor={{ true: COLORS.primary }} />
          </View>
          <FormField label="Tanggal" placeholder="DD/MM/YYYY" />
        </View>

        {/* Pekerjaan utama */}
        <View style={styles.card}>
          <SectionHeader title="Pekerjaan Utama" />

          <View style={styles.jobBox}>
            <View style={styles.jobHeader}>
              <Text style={styles.jobTitle}>Pekerjaan 1</Text>
              <Ionicons
                name="create-outline"
                size={20}
                color={COLORS.textMuted}
              />
            </View>

            <View style={styles.fieldRow}>
              <View style={styles.fieldCol}>
                <FormField
                  label="Durasi (jam : menit)"
                  placeholder="00 : 00"
                  keyboardType="numeric"
                />
              </View>
              <View style={styles.fieldCol}>
                <FormField
                  label="Rate / jam"
                  placeholder="Rp 0"
                  keyboardType="numeric"
                />
              </View>
            </View>
          </View>

          <TouchableOpacity style={styles.addJobButton}>
            <Ionicons
              name="add-circle-outline"
              size={20}
              color={COLORS.primary}
            />
            <Text style={styles.addJobText}>Tambah pekerjaan baru</Text>
          </TouchableOpacity>
        </View>

        {/* Entri lainnya */}
        <View style={styles.card}>
          <SectionHeader title="Entri Lainnya" icon="settings-outline" />
          <FormField label="Bonus" placeholder="Rp 0" keyboardType="numeric" />
          <FormField label="Denda" placeholder="Rp 0" keyboardType="numeric" />
        </View>

        {/* Catatan */}
        <View style={styles.card}>
          <SectionHeader title="Catatan" />
          <FormField placeholder="Tulis catatan..." multiline />
        </View>

        {/* Pilih warna */}
        <View style={styles.card}>
          <SectionHeader title="Pilih Warna" />
          <View style={styles.colorRow}>
            {LOG_COLORS.map((color, index) => (
              <View
                key={color}
                style={[
                  styles.colorSwatch,
                  { backgroundColor: color },
                  index === 0 && styles.colorSwatchSelected,
                ]}
              >
                {index === 0 && (
                  <Ionicons name="checkmark" size={18} color={COLORS.white} />
                )}
              </View>
            ))}
          </View>
        </View>

        {/* Tombol simpan */}
        <TouchableOpacity style={styles.saveButton}>
          <Text style={styles.saveText}>Simpan</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
