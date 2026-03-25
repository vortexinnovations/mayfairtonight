export function getTodayString(): string {
  return new Date().toISOString().split("T")[0];
}

export function getDayOfWeek(dateStr?: string): string {
  const date = dateStr ? new Date(dateStr + "T12:00:00") : new Date();
  return date.toLocaleDateString("en-GB", { weekday: "long" });
}

export function getWeekendDates(): { friday: string; saturday: string; sunday: string } {
  const now = new Date();
  const day = now.getDay();

  // Calculate days until next Friday (5)
  const daysUntilFriday = day <= 5 ? 5 - day : 5 + (7 - day);
  // If it's Fri/Sat/Sun, show this weekend
  const daysToFri =
    day === 5 ? 0 : day === 6 ? -1 : day === 0 ? -2 : daysUntilFriday;

  const friday = new Date(now);
  friday.setDate(now.getDate() + daysToFri);

  const saturday = new Date(friday);
  saturday.setDate(friday.getDate() + 1);

  const sunday = new Date(friday);
  sunday.setDate(friday.getDate() + 2);

  return {
    friday: friday.toISOString().split("T")[0],
    saturday: saturday.toISOString().split("T")[0],
    sunday: sunday.toISOString().split("T")[0],
  };
}

export function formatDate(dateStr: string): string {
  const date = new Date(dateStr + "T12:00:00");
  return date.toLocaleDateString("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });
}
