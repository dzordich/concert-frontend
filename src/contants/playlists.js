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
} from '../utils/dates';
import { colors } from '../ui/theme';

const today = new Date();

const todayFormatted = formatDate(today);

const createDescription = (timeframe, quantifier = 'all') => ({
    timeframe,
    quantifier,
});

export const playlists = {
    days: [
        {
            displayName: 'Today',
            description: createDescription('today'),
            subHeader: formatTodayPlusDaysShort(0),
            startDate: todayFormatted,
            endDate: todayFormatted,
            image: require('../../assets/bg-day-1.png'),
            backgroundColor: colors.bgDay,
        },
        {
            displayName: 'Tomorrow',
            description: createDescription('tomorrow'),
            subHeader: formatTodayPlusDaysShort(1),
            startDate: formatTodayPlusDays(1),
            endDate: formatTodayPlusDays(1),
            image: require('../../assets/bg-day-2.png'),
            backgroundColor: colors.bgDay,
        },
        {
            displayName: weekdayAtTodayPlusDays(2),
            description: createDescription(`on ${weekdayAtTodayPlusDays(2)}`),
            subHeader: formatTodayPlusDaysShort(2),
            startDate: formatTodayPlusDays(2),
            endDate: formatTodayPlusDays(2),
            image: require('../../assets/bg-day-3.png'),
            backgroundColor: colors.bgDay,
        },
        {
            displayName: weekdayAtTodayPlusDays(3),
            description: createDescription(`on ${weekdayAtTodayPlusDays(3)}`),
            subHeader: formatTodayPlusDaysShort(3),
            startDate: formatTodayPlusDays(3),
            endDate: formatTodayPlusDays(3),
            image: require('../../assets/bg-day-4.png'),
            backgroundColor: colors.bgDay,
        },
        {
            displayName: weekdayAtTodayPlusDays(4),
            description: createDescription(`on ${weekdayAtTodayPlusDays(4)}`),
            subHeader: formatTodayPlusDaysShort(4),
            startDate: formatTodayPlusDays(4),
            endDate: formatTodayPlusDays(4),
            image: require('../../assets/bg-day-5.png'),
            backgroundColor: colors.bgDay,
        },
        {
            displayName: weekdayAtTodayPlusDays(5),
            description: createDescription(`on ${weekdayAtTodayPlusDays(5)}`),
            subHeader: formatTodayPlusDaysShort(5),
            startDate: formatTodayPlusDays(5),
            endDate: formatTodayPlusDays(5),
            image: require('../../assets/bg-day-6.png'),
            backgroundColor: colors.bgDay,
        },
        {
            displayName: weekdayAtTodayPlusDays(6),
            description: createDescription(`on ${weekdayAtTodayPlusDays(6)}`),
            subHeader: formatTodayPlusDaysShort(6),
            startDate: formatTodayPlusDays(6),
            endDate: formatTodayPlusDays(6),
            image: require('../../assets/bg-day-7.png'),
            backgroundColor: colors.bgDay,
        },
    ],
    weeks: [
        {
            displayName: 'This Weekend',
            description: createDescription('this weekend', 'the top 40'),
            subHeader: 'Top 40',
            image: require('../../assets/bg-week-1.png'),
            backgroundColor: colors.bgWeek,
            limit: 40,
            ...currentWeekendFormatted(),
        },
        {
            displayName: 'Next Weekend',
            description: createDescription('next weekend', 'the top 40'),
            subHeader: 'Top 40',
            image: require('../../assets/bg-week-2.png'),
            backgroundColor: colors.bgWeek,
            limit: 40,
            ...nextWeekendFormatted(),
        },
    ],
    months: [
        {
            displayName: formatMonth(new Date()),
            description: createDescription('this month', 'the top 100'),
            subHeader: 'Top 100',
            startDate: todayFormatted,
            endDate: endOfCurrentMonth(),
            image: require('../../assets/bg-month-1.png'),
            backgroundColor: colors.bgMonth,
        },
        {
            subHeader: 'Top 100',
            description: createDescription('next month', 'the top 100'),
            image: require('../../assets/bg-month-2.png'),
            backgroundColor: colors.bgMonth,
            ...currentMonthPlusMonths(1),
        },
        {
            subHeader: 'Top 100',
            image: require('../../assets/bg-month-3.png'),
            backgroundColor: colors.bgMonth,
            ...currentMonthPlusMonths(2),
        },
    ],
};
