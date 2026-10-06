import type { MenuItem } from "@/types";
import { MENU_COLORS } from "@/constants/colors";

export const MENU_ITEMS: MenuItem[] = [
  { id: "summary", label: "Summary", icon: "stats-chart", color: MENU_COLORS.summary },
  { id: "report", label: "Report", icon: "document-text", color: MENU_COLORS.report },
  { id: "settings", label: "Settings", icon: "settings", color: MENU_COLORS.settings },
];