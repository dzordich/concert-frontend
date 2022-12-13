import { complement, isEmpty } from 'ramda';

export const isNotEmpty = complement(isEmpty);

const listFormatter = new Intl.ListFormat('en', {
    style: 'long',
    type: 'conjunction',
});

export const formatList = list => listFormatter.format(list);

export const listToPairs = list => {
    const groups = [];
    for (let i = 0; i < list.length; i += 2) {
        groups.push(list.slice(i, i + 2));
    }
    return groups;
};
