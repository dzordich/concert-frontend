import {
  formatTodayPlusDays,
  currentWeekendFormatted,
  formatDate,
  nextWeekendFormatted,
  weekdayAtTodayPlusDays,
  formatTodayPlusDaysShort,
  endOfCurrentMonth,
  formatMonth,
  currentMonthPlusMonths,
} from "../utils/dates";
import { colors } from "../ui/theme";

const today = new Date();

const todayFormatted = formatDate(today);

export const playlists = {
  days: [
    {
      displayName: "Today",
      descriptionName: "today",
      subHeader: formatTodayPlusDaysShort(0),
      startDate: todayFormatted,
      endDate: todayFormatted,
      background: require("../../assets/bg-day-1.png"),
      backgroundColor: colors.bgDay,
    },
    {
      displayName: "Tomorrow",
      descriptionName: "tomorrow",
      subHeader: formatTodayPlusDaysShort(1),
      startDate: formatTodayPlusDays(1),
      endDate: formatTodayPlusDays(1),
      background: require("../../assets/bg-day-2.png"),
      backgroundColor: colors.bgDay,
    },
    {
      displayName: weekdayAtTodayPlusDays(2),
      descriptionName: `on ${weekdayAtTodayPlusDays(2)}`,
      subHeader: formatTodayPlusDaysShort(2),
      startDate: formatTodayPlusDays(2),
      endDate: formatTodayPlusDays(2),
      background: require("../../assets/bg-day-3.png"),
      backgroundColor: colors.bgDay,
    },
    {
      displayName: weekdayAtTodayPlusDays(3),
      descriptionName: `on ${weekdayAtTodayPlusDays(3)}`,
      subHeader: formatTodayPlusDaysShort(3),
      startDate: formatTodayPlusDays(3),
      endDate: formatTodayPlusDays(3),
      background: require("../../assets/bg-day-4.png"),
      backgroundColor: colors.bgDay,
    },
    {
      displayName: weekdayAtTodayPlusDays(4),
      descriptionName: `on ${weekdayAtTodayPlusDays(4)}`,
      subHeader: formatTodayPlusDaysShort(4),
      startDate: formatTodayPlusDays(4),
      endDate: formatTodayPlusDays(4),
      background: require("../../assets/bg-day-5.png"),
      backgroundColor: colors.bgDay,
    },
    {
      displayName: weekdayAtTodayPlusDays(5),
      descriptionName: `on ${weekdayAtTodayPlusDays(5)}`,
      subHeader: formatTodayPlusDaysShort(5),
      startDate: formatTodayPlusDays(5),
      endDate: formatTodayPlusDays(5),
      background: require("../../assets/bg-day-6.png"),
      backgroundColor: colors.bgDay,
    },
    {
      displayName: weekdayAtTodayPlusDays(6),
      descriptionName: `on ${weekdayAtTodayPlusDays(6)}`,
      subHeader: formatTodayPlusDaysShort(6),
      startDate: formatTodayPlusDays(6),
      endDate: formatTodayPlusDays(6),
      background: require("../../assets/bg-day-7.png"),
      backgroundColor: colors.bgDay,
    },
  ],
  weeks: [
    {
      displayName: "This Weekend",
      descriptionName: "this weekend",
      subHeader: "Top 40",
      background: require("../../assets/bg-week-1.png"),
      backgroundColor: colors.bgWeek,
      limit: 40,
      ...currentWeekendFormatted(),
    },
    {
      displayName: "Next Weekend",
      descriptionName: "next weekend",
      subHeader: "Top 40",
      background: require("../../assets/bg-week-2.png"),
      backgroundColor: colors.bgWeek,
      limit: 40,
      ...nextWeekendFormatted(),
    },
  ],
  months: [
    {
      displayName: formatMonth(new Date()),
      descriptionName: 'this month',
      subHeader: "Top 100",
      startDate: todayFormatted,
      endDate: endOfCurrentMonth(),
      background: require("../../assets/bg-month-1.png"),
      backgroundColor: colors.bgMonth,
    },
    {
      subHeader: "Top 100",
      background: require("../../assets/bg-month-2.png"),
      backgroundColor: colors.bgMonth,
      ...currentMonthPlusMonths(1),
    },
    {
      subHeader: "Top 100",
      background: require("../../assets/bg-month-3.png"),
      backgroundColor: colors.bgMonth,
      ...currentMonthPlusMonths(2),
    },
  ],
};
