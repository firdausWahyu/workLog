import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "@/styles/style";
import { COLORS } from "@/constants/colors";
import type { IconName } from "@/types";

type Props = {
  title: string;
  icon?: IconName; // tanda ? artinya boleh tidak diisi
};

export function SectionHeader({ title, icon }: Props) {
  return (
    <View style={styles.sectionHeader}>
      <Text style={styles.sectionTitle}>{title}</Text>
      {icon && <Ionicons name={icon} size={20} color={COLORS.textMuted} />}
    </View>
  );
}