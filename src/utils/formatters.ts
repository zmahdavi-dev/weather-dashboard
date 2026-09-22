function getLocale(language: string) {
  return language.startsWith("fa") ? "fa-IR" : "en-US";
}

export function formatForecastDate(
  date: string,
  language: string,
): string {
  if (!date) return "";

  const locale = getLocale(language);

  return new Intl.DateTimeFormat(locale, {
    weekday: "long",
  }).format(new Date(`${date}T12:00:00`));
}

export function formatLocalTime(
  dateTime: string,
  language: string,
): string {
  if (!dateTime) return "";

  const locale = getLocale(language);
  const date = new Date(dateTime.replace(" ", "T"));

  return new Intl.DateTimeFormat(locale, {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(date);
}

export function formatNumber(
  value: number,
  language: string,
): string {
  const locale = getLocale(language);

  return new Intl.NumberFormat(locale, {
    maximumFractionDigits: 1,
  }).format(value);
}