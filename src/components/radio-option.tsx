import { Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "@/styles/style";
import { COLORS } from "@/constants/colors";

type Props = {
  label: string;
  selected: boolean;
};

export function RadioOption({ label, selected }: Props) {
  return (
    <TouchableOpacity style={styles.radioRow}>
      <Text style={[styles.radioText, selected && styles.radioTextSelected]}>
        {label}
      </Text>
      <Ionicons
        name={selected ? "radio-button-on" : "radio-button-off"}
        size={24}
        color={selected ? COLORS.primary : COLORS.textMuted}
      />
    </TouchableOpacity>
  );
}