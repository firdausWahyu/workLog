import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "@/styles/style";
import type { Category } from "@/types";

type Props = {
  category: Category;
};

export function CategoryChip({ category }: Props) {
  return (
    <View style={styles.chip}>
      <Ionicons name={category.icon} size={16} color={category.color} />
      <Text style={styles.chipText}>{category.name}</Text>
    </View>
  );
}