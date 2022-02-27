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

const today = new Date();

const todayFormatted = formatDate(today);

export const playlists = {
  days: [{
    displayName: 'Tonight',
    subHeader: formatTodayPlusDaysShort(0),
    startDate: todayFormatted,
    endDate: todayFormatted,
    background: require('../../assets/bg-day-1.png')
  },{
    displayName: 'Tomorrow',
    subHeader: formatTodayPlusDaysShort(1),
    startDate: formatTodayPlusDays(1),
    endDate: formatTodayPlusDays(1),
    background: require('../../assets/bg-day-2.png')
  },{
    displayName: weekdayAtTodayPlusDays(2),
    subHeader: formatTodayPlusDaysShort(2),
    startDate: formatTodayPlusDays(2),
    endDate: formatTodayPlusDays(2),
    background: require('../../assets/bg-day-3.png')
  },{
    displayName: weekdayAtTodayPlusDays(3),
    subHeader: formatTodayPlusDaysShort(3),
    startDate: formatTodayPlusDays(3),
    endDate: formatTodayPlusDays(3),
    background: require('../../assets/bg-day-4.png')
  },{
    displayName: weekdayAtTodayPlusDays(4),
    subHeader: formatTodayPlusDaysShort(4),
    startDate: formatTodayPlusDays(4),
    endDate: formatTodayPlusDays(4),
    background: require('../../assets/bg-day-5.png')
  },{
    displayName: weekdayAtTodayPlusDays(5),
    subHeader: formatTodayPlusDaysShort(5),
    startDate: formatTodayPlusDays(5),
    endDate: formatTodayPlusDays(5),
    background: require('../../assets/bg-day-6.png')
  },{
    displayName: weekdayAtTodayPlusDays(6),
    subHeader: formatTodayPlusDaysShort(6),
    startDate: formatTodayPlusDays(6),
    endDate: formatTodayPlusDays(6),
    background: require('../../assets/bg-day-7.png')
  },
  ],
  weeks: [
    {
      displayName: "This Weekend",
      subHeader: "Top 40",
      background: require('../../assets/bg-week-1.png'),
      ...currentWeekendFormatted(),
    },
      {
      displayName: "Next Weekend",
      subHeader: "Top 40",
      background: require('../../assets/bg-week-2.png'),
      ...nextWeekendFormatted(),
    },

  ],
  months: [
    {
      displayName: formatMonth(new Date()),
      subHeader: "Top 100",
      startDate: todayFormatted,
      endDate: endOfCurrentMonth(),
      background: require('../../assets/bg-month-1.png')
    },
    {
      subHeader: "Top 100",
      background: require('../../assets/bg-month-2.png'),
      ...currentMonthPlusMonths(1),
    },
    {
      subHeader: "Top 100",
      background: require('../../assets/bg-month-3.png'),
      ...currentMonthPlusMonths(2),
    },

  ]
}