import {
  format,
  add,
  getDay,
  nextSunday,
  nextFriday,
  nextMonday,
} from "date-fns";
import { compose, map, replace } from "ramda";
import { takeAfter } from "./strings";

const WEEKEND_DAYS_WITH_FRIDAY = [5, 6, 0];

export const formatDate = (date) => format(date, "yyyy-MM-dd");

export const addDaysToCurrentDate = (days) => add(new Date(), { days });

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

export const addDaysToCurrentDateFormatted = compose(
  formatDate,
  addDaysToCurrentDate
);

export const formatDateWithoutYear = compose(replace("-", "/"), takeAfter("-"));
