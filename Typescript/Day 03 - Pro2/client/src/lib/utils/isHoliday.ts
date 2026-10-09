import { Holiday } from "@/types/holidays";

export function isHoliday(value: unknown): value is Holiday {
  if (typeof value !== "object" || value === null) return false;

  const v = value as Record<string, unknown>;

  return typeof v.date === "string" && typeof v.name === "string";
}
