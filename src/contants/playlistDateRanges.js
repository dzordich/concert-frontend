import {
  addDaysToCurrentDateFormatted,
  currentWeekendFormatted,
  formatDate,
  nextWeekendFormatted,
} from "../utils/dates";

const today = new Date();

const todayFormatted = formatDate(today);

export const playlistDateRanges = [
  {
    displayName: "Tonight",
    startDate: todayFormatted,
    endDate: todayFormatted,
  },
  {
    displayName: "Tomorrow",
    startDate: addDaysToCurrentDateFormatted(1),
    endDate: addDaysToCurrentDateFormatted(1),
  },
  {
    displayName: "This Weekend",
    ...currentWeekendFormatted(),
  },
  {
    displayName: "Next Weekend",
    ...nextWeekendFormatted(),
  },
  {
    displayName: "This Month",
    startDate: todayFormatted,
    endDate: addDaysToCurrentDateFormatted(30),
  },
  {
    displayName: "Next Month",
    startDate: addDaysToCurrentDateFormatted(31),
    endDate: addDaysToCurrentDateFormatted(60),
  },
];
