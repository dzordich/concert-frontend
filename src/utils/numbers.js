export const roundTo2Decimals = number => Math.round(number * 100) / 100;

export const padTo2Digits = num => num.toString().padStart(2, '0');
