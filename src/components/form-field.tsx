import { View, Text, TextInput } from "react-native";
import type { KeyboardTypeOptions } from "react-native";
import { styles } from "@/styles/style";
import { COLORS } from "@/constants/colors";

type Props = {
  label?: string;
  placeholder: string;
  keyboardType?: KeyboardTypeOptions;
  multiline?: boolean;
};

export function FormField({
  label,
  placeholder,
  keyboardType = "default",
  multiline = false,
}: Props) {
  return (
    <View style={styles.fieldWrapper}>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput
        style={[styles.input, multiline && styles.inputMultiline]}
        placeholder={placeholder}
        placeholderTextColor={COLORS.textMuted}
        keyboardType={keyboardType}
        multiline={multiline}
      />
    </View>
  );
}