import {
  format as _format,
  add,
  getDay,
  nextSunday,
  nextFriday,
  nextMonday,
  parseISO,
  endOfMonth,
  startOfMonth,
} from "date-fns";
import { compose, map, replace } from "ramda";
import { takeAfter } from "./strings";

const WEEKEND_DAYS_WITH_FRIDAY = [5, 6, 0];

const format = (formatStr) => (date) => _format(date, formatStr);

export const formatDate = format("yyyy-MM-dd");

export const formatShortDate = format("M.d");

export const parseAndFormatShortDate = compose(formatShortDate, parseISO);

export const addDaysToCurrentDate = (days) => add(new Date(), { days });

export const formatTodayPlusDays = compose(formatDate, addDaysToCurrentDate);

export const formatTodayPlusDaysShort = compose(
  formatShortDate,
  addDaysToCurrentDate
);

export const formatDateWithoutYear = compose(replace("-", "/"), takeAfter("-"));

export const displayDate = compose(format("EEEE, MMMM do"), parseISO);

export const weekdayAtTodayPlusDays = compose(
  format("EEEE"),
  addDaysToCurrentDate
);

// Weekends

export const nextWeekend = () => {
  const startOfNextWeek = nextMonday(new Date());
  return {
    startDate: nextFriday(startOfNextWeek),
    endDate: nextSunday(startOfNextWeek),
  };
};

export const currentWeekend = () => {
  const today = new Date();
  const currentDay = getDay(today);
  if (WEEKEND_DAYS_WITH_FRIDAY.includes(currentDay)) {
    return {
      startDate: today,
      endDate: currentDay === 0 ? today : nextSunday(today),
    };
  }
  return {
    startDate: nextFriday(today),
    endDate: nextSunday(today),
  };
};

const formatStartEndDate = map((date) => formatDate(date));

export const nextWeekendFormatted = compose(formatStartEndDate, nextWeekend);

export const currentWeekendFormatted = compose(
  formatStartEndDate,
  currentWeekend
);

// Months

export const formatMonth = format("MMMM");

export const endOfCurrentMonth = () => formatDate(endOfMonth(new Date()));

export const currentMonthPlusMonths = (months) => {
  const date = add(new Date(), { months });
  const formatted = formatMonth(date);
  return {
    displayName: formatted,
    description: { timeframe: `this ${formatted}`, quantifier: "the top 100" },
    startDate: formatDate(startOfMonth(date)),
    endDate: formatDate(endOfMonth(date)),
  };
};
